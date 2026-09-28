import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { parseYahooFinanceChartJson, classifyFundCategory, YAHOO_PERIODS, KNOWN_ISIN_MAP } from './src/utils/yahooEngine.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // ============================================================================
  // API ROUTES (Before Vite middleware)
  // ============================================================================

  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      serverTime: new Date().toISOString(),
      engine: 'Yahoo Finance Pure Quantitative Core · Antonacci Dual Momentum'
    });
  });

  // ============================================================================
  // TELEGRAM BOT INTEGRATION ENDPOINTS
  // ============================================================================

  // 1. Auto-detect Chat ID by inspecting recent messages sent to the bot
  app.get('/api/telegram/detect-chat-id', async (req, res) => {
    const token = (req.query.token as string || '').trim();
    if (!token) {
      return res.status(400).json({ ok: false, error: 'Token de Telegram no proporcionado' });
    }

    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
      const data = await tgRes.json();

      if (!data.ok) {
        return res.status(400).json({ 
          ok: false, 
          error: data.description || 'Token de Telegram no válido o rechazado por los servidores de Telegram.' 
        });
      }

      const updates = data.result || [];
      if (updates.length === 0) {
        return res.json({
          ok: false,
          error: 'NO_MESSAGES',
          message: 'No se encontraron mensajes en el bot. Por favor, entra en Telegram, busca tu bot, pulsa el botón "INICIAR" o envíale un mensaje cualquiera (ej: "hola"), y vuelve a hacer clic en este botón.'
        });
      }

      // Grab the most recent message
      const latestUpdate = updates[updates.length - 1];
      const chat = latestUpdate.message?.chat || latestUpdate.edited_message?.chat || latestUpdate.channel_post?.chat || latestUpdate.my_chat_member?.chat;

      if (!chat || !chat.id) {
        return res.json({
          ok: false,
          error: 'NO_CHAT_FOUND',
          message: 'Se recibieron actualizaciones pero no se identificó el ID de chat. Envía un mensaje de texto nuevo al bot e inténtalo de nuevo.'
        });
      }

      const chatName = [chat.first_name, chat.last_name].filter(Boolean).join(' ') || chat.username || chat.title || 'Usuario Telegram';

      res.json({
        ok: true,
        chatId: String(chat.id),
        chatName,
        username: chat.username || '',
        message: `¡Chat detectado con éxito! ID: ${chat.id} (${chatName})`
      });
    } catch (err: any) {
      console.error('Error auto-detecting Telegram Chat ID:', err.message);
      res.status(500).json({ ok: false, error: 'Error de conexión con la API de Telegram: ' + err.message });
    }
  });

  // 2. Send Test Notification
  app.post('/api/telegram/send-test', async (req, res) => {
    const { token, chatId } = req.body;
    if (!token || !chatId) {
      return res.status(400).json({ ok: false, error: 'Falta token o chatId' });
    }

    const testText = 
      `🚀 *Dual Momentum Engine España (Yahoo Finance)*\n` +
      `✅ *¡Conexión con Telegram verificada con éxito!*\n\n` +
      `Tu sistema de alertas automáticas para fondos indexados está configurado.\n\n` +
      `📋 *Qué recibirás por aquí:*\n` +
      `• 🔔 *Señal mensual de rotación* (días 28-30 de cada mes)\n` +
      `• 🏆 *Fondo ganador y orden de traspaso fiscal*\n` +
      `• 🛡️ *Alertas de activación de Modo Refugio / Monetario*\n` +
      `• ⚖️ *Filtro de Histéresis y supresión de ruido*\n` +
      `• 📊 *Datos exclusivos Yahoo Finance Oficial*\n\n` +
      `_Hora de verificación: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}_`;

    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: testText,
          parse_mode: 'Markdown'
        })
      });

      const data = await tgRes.json();
      if (!data.ok) {
        return res.status(400).json({ ok: false, error: data.description || 'Error al enviar mensaje a Telegram' });
      }

      res.json({ ok: true, message: 'Mensaje de prueba enviado con éxito a Telegram.' });
    } catch (err: any) {
      console.error('Error sending Telegram test message:', err.message);
      res.status(500).json({ ok: false, error: 'Error al contactar con Telegram: ' + err.message });
    }
  });

  // In-memory / persistent store for backend background scheduler
  let backendTelegramState: {
    token?: string;
    chatId?: string;
    isEnabled?: boolean;
    notifyOnMonthEnd?: boolean;
    notifyOnSignalChange?: boolean;
    hysteresisBuffer?: number;
    lastDispatchedMonth?: string;
    lastDispatchedSignal?: string;
    funds?: any[];
    activeFundId?: string;
  } = {};

  // Endpoint to sync settings to cloud server for 24/7 background execution
  app.post('/api/telegram/save-backend-config', (req, res) => {
    const { token, chatId, isEnabled, notifyOnMonthEnd, notifyOnSignalChange, hysteresisBuffer, funds, activeFundId } = req.body;
    backendTelegramState = {
      ...backendTelegramState,
      token: token || backendTelegramState.token,
      chatId: chatId || backendTelegramState.chatId,
      isEnabled: isEnabled ?? backendTelegramState.isEnabled,
      notifyOnMonthEnd: notifyOnMonthEnd ?? backendTelegramState.notifyOnMonthEnd,
      notifyOnSignalChange: notifyOnSignalChange ?? backendTelegramState.notifyOnSignalChange,
      hysteresisBuffer: hysteresisBuffer ?? backendTelegramState.hysteresisBuffer ?? 0.5,
      funds: funds || backendTelegramState.funds,
      activeFundId: activeFundId || backendTelegramState.activeFundId
    };
    res.json({ ok: true, message: 'Configuración de fondo sincronizada en la nube.' });
  });

  // 3. Send Official Strategy Signal Alert (4 Models with Equilibrado as Priority #1)
  app.post('/api/telegram/send-signal', async (req, res) => {
    const { token, chatId, signal, allModels, hysteresisBuffer = 0.5 } = req.body;
    if (!token || !chatId) {
      return res.status(400).json({ ok: false, error: 'Faltan token o chatId' });
    }

    const eqSignal = allModels?.equilibrado || signal;
    const classicSignal = allModels?.classic12M;
    const instSignal = allModels?.momentum12Minus1;
    const progSignal = allModels?.progresivo;

    if (!eqSignal) {
      return res.status(400).json({ ok: false, error: 'Falta la señal de la estrategia' });
    }

    const isDefense = eqSignal.isDefenseMode;
    const isTransfer = eqSignal.transferRequired;
    const isHysteresis = eqSignal.isHysteresisHolding;

    const emoji = isTransfer ? '🚨' : isDefense ? '🛡️' : '✅';
    const title = isTransfer 
      ? 'ORDEN DE TRASPASO REQUERIDA' 
      : isDefense 
      ? 'ESTRATEGIA EN MODO DEFENSIVO' 
      : isHysteresis 
      ? 'MANTENER POR FILTRO ANTI-RUIDO' 
      : 'MANTENER ASIGNACIÓN ACTUAL';

    let actionText = '';
    if (isTransfer) {
      actionText = 
        `🔄 *ORDEN PRIORITARIA A EJECUTAR EN TU BROKER:*\n` +
        `• *Fondo Origen:* \`${eqSignal.fromFund?.isin || 'En cartera'}\` (${eqSignal.fromFund?.name})\n` +
        `• *Fondo Destino:* \`${eqSignal.toFund?.isin || eqSignal.currentSelectedFund?.isin}\` (${eqSignal.toFund?.name || eqSignal.currentSelectedFund?.name})\n` +
        `• *Operación:* Traspaso Total sin impacto fiscal (Art. 94 LIRPF)\n`;
    } else if (isHysteresis) {
      actionText = 
        `⚖️ *ORDEN PRIORITARIA EN BROKER (FILTRO ANTI-RUIDO ±${hysteresisBuffer}%):*\n` +
        `• *Acción:* *NO TRASPASAR* — Se mantiene el fondo en cartera.\n` +
        `• *Fondo en Cartera:* \`${eqSignal.currentSelectedFund?.isin}\` (${eqSignal.currentSelectedFund?.name})\n` +
        `• *Justificación:* La ventaja del fondo competidor no supera el umbral de convicción del ${hysteresisBuffer}%.\n`;
    } else {
      actionText = 
        `📌 *ORDEN PRIORITARIA EN BROKER:*\n` +
        `• *Acción:* *MANTENER POSICIÓN* — Asignación óptima.\n` +
        `• *Fondo en Cartera:* \`${eqSignal.currentSelectedFund?.isin}\` (${eqSignal.currentSelectedFund?.name})\n`;
    }

    let comparisonBlock = '';
    if (allModels) {
      const getFundName = (s: any) => s?.currentSelectedFund?.name || s?.toFund?.name || 'No disponible';
      const getFundIsin = (s: any) => s?.currentSelectedFund?.isin || s?.toFund?.isin || 'N/A';
      const getScore = (s: any) => s?.currentSelectedFund?.momentumScore !== undefined ? `(+${s.currentSelectedFund.momentumScore}%)` : '';

      comparisonBlock = 
        `──────────────────────────\n` +
        `📊 *COMPARATIVA DE LOS 4 MODELOS (Yahoo Finance):*\n\n` +
        `🌟 *1. Equilibrado (Meb Faber - PRIORITARIO):*\n` +
        `└ \`${getFundIsin(eqSignal)}\` - ${getFundName(eqSignal)} ${getScore(eqSignal)}\n` +
        `   _Pondera 50% 12M + 30% 6M + 20% 3M_\n\n` +
        `🏛️ *2. 12M Puro (Gary Antonacci):*\n` +
        `└ \`${getFundIsin(classicSignal)}\` - ${getFundName(classicSignal)} ${getScore(classicSignal)}\n` +
        `   _Inercia pura a 12 meses_\n\n` +
        `🏢 *3. Institucional (12m - 1m):*\n` +
        `└ \`${getFundIsin(instSignal)}\` - ${getFundName(instSignal)} ${getScore(instSignal)}\n` +
        `   _Excluye el mes t-1 (sin reversión)_\n\n` +
        `⚡ *4. Progresivo Escalonado (Rápido):*\n` +
        `└ \`${getFundIsin(progSignal)}\` - ${getFundName(progSignal)} ${getScore(progSignal)}\n` +
        `   _40% 1M + 30% 3M + 20% 6M + 10% 12M_\n`;
    }

    const message = 
      `${emoji} *DUAL MOMENTUM — SEÑAL MENSUAL*\n` +
      `──────────────────────────\n` +
      `🎯 *MODELO PRINCIPAL DE EJECUCIÓN:*\n` +
      `*Dual Momentum Equilibrado (50/30/20)*\n` +
      `🏷️ *Estado:* *${title}*\n\n` +
      `${actionText}\n` +
      `💡 *Motivo Cuantitativo:*\n` +
      `${eqSignal.transferReason || 'Evaluación de momentum completada.'}\n\n` +
      `${comparisonBlock}` +
      `──────────────────────────\n` +
      `⚖️ *Filtro Histéresis:* ±${hysteresisBuffer}%\n` +
      `⏳ *Próxima Revisión:* en ${eqSignal.daysUntilNextMonthlyReview || 30} días (Fin de mes)\n` +
      `📅 _${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })} (Hora España)_`;

    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      const data = await tgRes.json();
      if (!data.ok) {
        return res.status(400).json({ ok: false, error: data.description || 'Error enviando señal' });
      }

      res.json({ ok: true, message: 'Alerta multi-modelo enviada correctamente a Telegram con el modelo Equilibrado como prioritario.' });
    } catch (err: any) {
      console.error('Error sending Telegram signal message:', err.message);
      res.status(500).json({ ok: false, error: 'Error al contactar con Telegram: ' + err.message });
    }
  });

  /**
   * Helper unificado para buscar un ticker/ISIN exclusivamente en Yahoo Finance API
   */
  async function fetchYahooFinanceData(query: string): Promise<any> {
    const cleanQuery = query.trim().toUpperCase();
    const candidates: { symbol: string; name?: string }[] = [];

    if (KNOWN_ISIN_MAP[cleanQuery]) {
      candidates.push({
        symbol: KNOWN_ISIN_MAP[cleanQuery].symbol,
        name: KNOWN_ISIN_MAP[cleanQuery].name,
      });
    }

    // Direct symbol candidate
    candidates.push({ symbol: cleanQuery });

    // Yahoo Finance search query for ISIN or Ticker if no match
    if (!KNOWN_ISIN_MAP[cleanQuery]) {
      try {
        const searchRes = await fetch(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(cleanQuery)}`, {
          headers: { 
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
          },
          signal: AbortSignal.timeout(4000)
        });
        
        if (searchRes.ok) {
          const searchJson = await searchRes.json();
          if (searchJson.quotes && Array.isArray(searchJson.quotes)) {
            for (const q of searchJson.quotes) {
              if (q.symbol && !candidates.some(c => c.symbol === q.symbol)) {
                candidates.unshift({
                  symbol: q.symbol,
                  name: q.longname || q.shortname || ''
                });
              }
            }
          }
        }
      } catch {
        // Continue to candidates
      }
    }

    let lastError = 'No se encontraron datos';
    for (const cand of candidates) {
      try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(cand.symbol)}?interval=1d&range=5y`;
        const resp = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          signal: AbortSignal.timeout(6000)
        });

        if (!resp.ok) {
          lastError = `HTTP ${resp.status}`;
          continue;
        }

        const json = await resp.json();
        if (!json.chart?.result?.length) {
          lastError = 'Respuesta vacía de Yahoo Finance';
          continue;
        }

        // Parse with exact algorithm
        const parsed = parseYahooFinanceChartJson(cand.symbol, json, cleanQuery);
        return {
          ...parsed,
          query: cleanQuery,
          resolvedSymbol: cand.symbol,
          source: 'Yahoo Finance Oficial (v8/finance/chart)',
          yahooUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(cand.symbol)}`
        };
      } catch (e: any) {
        lastError = e.message;
        continue;
      }
    }

    throw new Error(lastError);
  }

  // ============================================================================
  // PURE YAHOO FINANCE ENDPOINTS
  // ============================================================================

  // 1. Single Fund Lookup
  app.get('/api/fund-lookup', async (req, res) => {
    const query = (req.query.query as string || req.query.ticker as string || '').trim().toUpperCase();
    if (!query) {
      return res.status(400).json({ error: 'Parámetro query (ISIN o Ticker) requerido' });
    }

    try {
      const data = await fetchYahooFinanceData(query);
      res.json(data);
    } catch (err: any) {
      console.error(`Error en consulta Yahoo Finance para ${query}:`, err.message);
      res.status(404).json({ 
        error: `No se pudieron obtener datos de Yahoo Finance para ${query}. Detalle: ${err.message}` 
      });
    }
  });

  // 2. Batch Sync All Funds (Compact script logic with sleep 250ms)
  app.post('/api/yahoo-sync-all', async (req, res) => {
    const tickers: string[] = req.body.tickers || req.body.isins || [];
    if (!Array.isArray(tickers) || tickers.length === 0) {
      return res.status(400).json({ error: 'Array de tickers o ISINs requerido' });
    }

    const resultados: any[] = [];
    const errores: string[] = [];

    for (let i = 0; i < tickers.length; i++) {
      const ticker = (tickers[i] || '').trim().toUpperCase();
      if (!ticker) continue;

      try {
        const data = await fetchYahooFinanceData(ticker);
        resultados.push(data);
      } catch (e: any) {
        errores.push(`${ticker}: ${e.message}`);
        resultados.push({
          query: ticker,
          ticker: ticker,
          isin: ticker,
          error: e.message,
          currentPrice: 0,
          score12M: null,
          score12_1: null,
          scoreEquilibrado: null,
          scoreProgresivo: null,
        });
      }

      // 250ms pause between requests to respect rate-limits
      if (i < tickers.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 250));
      }
    }

    res.json({
      ok: true,
      count: resultados.length,
      resultados,
      errores,
      message: `✅ ${resultados.length} elementos procesados exclusivamente vía Yahoo Finance (1º Amarillo | 2º Plata | 3º Cobre)`
    });
  });

  // Manual / Cron trigger endpoint
  app.all('/api/telegram/trigger-check', async (req, res) => {
    if (!backendTelegramState.isEnabled || !backendTelegramState.token || !backendTelegramState.chatId) {
      return res.json({ ok: false, message: 'Telegram no está habilitado o configurado en el servidor.' });
    }
    const result = await runCloudScheduledCheck();
    return res.json({ ok: true, result });
  });

  async function runCloudScheduledCheck() {
    if (!backendTelegramState.isEnabled || !backendTelegramState.token || !backendTelegramState.chatId) {
      return { skipped: true, reason: 'Not configured or disabled' };
    }
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const day = now.getDate();

    const isMonthEnd = day >= 28 || day <= 1;
    if (!isMonthEnd && backendTelegramState.lastDispatchedMonth === currentMonthKey) {
      return { skipped: true, reason: 'Already dispatched for this cycle' };
    }

    const funds = backendTelegramState.funds || [];
    if (funds.length === 0) {
      return { skipped: true, reason: 'No funds registered in cloud state' };
    }

    try {
      const activeFunds = funds.filter((f: any) => !f.isDisabled && !f.isBlank && f.isin);
      const safeHaven = activeFunds.find((f: any) => f.category === 'MONEY_MARKET_CASH' || f.isSafeHaven) || activeFunds[0];
      const riskFreeHurdle = Number(safeHaven?.return12M ?? 3.65);
      const riskyFunds = activeFunds.filter((f: any) => !f.isSafeHaven);

      const calcEqScore = (f: any) => Number((Number(f.return12M || 0) * 0.5 + Number(f.return6M || 0) * 0.3 + Number(f.return3M || 0) * 0.2).toFixed(2));
      const calc12MScore = (f: any) => Number(f.return12M || 0);
      const calc12Minus1Score = (f: any) => {
        if (f.return12Minus1M !== undefined) return Number(f.return12Minus1M);
        const r12 = Number(f.return12M || 0) / 100;
        const r1 = Number(f.return1M || 0) / 100;
        return Number((((1 + r12) / (1 + r1) - 1) * 100).toFixed(2));
      };
      const calcProgScore = (f: any) => Number((Number(f.return1M || 0) * 0.4 + Number(f.return3M || 0) * 0.3 + Number(f.return6M || 0) * 0.2 + Number(f.return12M || 0) * 0.1).toFixed(2));

      const scoredEq = [...riskyFunds].sort((a, b) => calcEqScore(b) - calcEqScore(a));
      const bestEq = scoredEq[0];
      const best12M = [...riskyFunds].sort((a, b) => calc12MScore(b) - calc12MScore(a))[0];
      const best12Minus1 = [...riskyFunds].sort((a, b) => calc12Minus1Score(b) - calc12Minus1Score(a))[0];
      const bestProg = [...riskyFunds].sort((a, b) => calcProgScore(b) - calcProgScore(a))[0];

      const heldFund = funds.find((f: any) => f.id === backendTelegramState.activeFundId) || bestEq;
      const eqScore = calcEqScore(bestEq);
      const isDefense = eqScore < riskFreeHurdle;
      const targetFund = isDefense ? safeHaven : bestEq;
      const hBuffer = backendTelegramState.hysteresisBuffer || 0.5;

      let isHysteresis = false;
      let finalTarget = targetFund;
      if (!isDefense && heldFund && heldFund.id !== bestEq.id && !heldFund.isSafeHaven) {
        const heldScore = calcEqScore(heldFund);
        if (heldScore > riskFreeHurdle && (eqScore - heldScore) < hBuffer) {
          isHysteresis = true;
          finalTarget = heldFund;
        }
      }

      const isTransfer = !isHysteresis && finalTarget.id !== heldFund.id;
      const emoji = isTransfer ? '🚨' : isDefense ? '🛡️' : '✅';
      const title = isTransfer ? 'ORDEN DE TRASPASO REQUERIDA' : isDefense ? 'ESTRATEGIA EN MODO DEFENSIVO' : isHysteresis ? 'MANTENER POR FILTRO ANTI-RUIDO' : 'MANTENER ASIGNACIÓN ACTUAL';

      let actionText = '';
      if (isTransfer) {
        actionText = 
          `🔄 *ORDEN PRIORITARIA A EJECUTAR EN TU BROKER:*\n` +
          `• *Fondo Origen:* \`${heldFund.isin}\` (${heldFund.name})\n` +
          `• *Fondo Destino:* \`${finalTarget.isin}\` (${finalTarget.name})\n` +
          `• *Operación:* Traspaso Total sin peaje fiscal (Art. 94 LIRPF)\n`;
      } else if (isHysteresis) {
        actionText = 
          `⚖️ *ORDEN PRIORITARIA EN BROKER (FILTRO ANTI-RUIDO ±${hBuffer}%):*\n` +
          `• *Acción:* *NO TRASPASAR* — Se mantiene el fondo en cartera.\n` +
          `• *Fondo en Cartera:* \`${heldFund.isin}\` (${heldFund.name})\n` +
          `• *Motivo:* Ventaja menor al ${hBuffer}%, evitando fricción y comisiones.\n`;
      } else {
        actionText = 
          `📌 *ORDEN PRIORITARIA EN BROKER:*\n` +
          `• *Acción:* *MANTENER POSICIÓN*\n` +
          `• *Fondo en Cartera:* \`${heldFund.isin}\` (${heldFund.name})\n`;
      }

      const message = 
        `${emoji} *DUAL MOMENTUM — ALERTA AUTOMÁTICA EN LA NUBE (Yahoo Finance)*\n` +
        `──────────────────────────\n` +
        `🎯 *MODELO PRINCIPAL DE EJECUCIÓN:*\n` +
        `*Dual Momentum Equilibrado (50/30/20)*\n` +
        `🏷️ *Estado:* *${title}*\n\n` +
        `${actionText}\n` +
        `💡 *Score Ponderado:* +${eqScore}%\n\n` +
        `──────────────────────────\n` +
        `📊 *COMPARATIVA DE LOS 4 MODELOS:*\n\n` +
        `🌟 *1. Equilibrado (Meb Faber - PRIORITARIO):*\n` +
        `└ \`${bestEq?.isin}\` - ${bestEq?.name} (+${calcEqScore(bestEq)}%)\n\n` +
        `🏛️ *2. 12M Puro (Gary Antonacci):*\n` +
        `└ \`${best12M?.isin}\` - ${best12M?.name} (+${calc12MScore(best12M)}%)\n\n` +
        `🏢 *3. Institucional (12m - 1m):*\n` +
        `└ \`${best12Minus1?.isin}\` - ${best12Minus1?.name} (+${calc12Minus1Score(best12Minus1)}%)\n\n` +
        `⚡ *4. Progresivo Escalonado (Rápido):*\n` +
        `└ \`${bestProg?.isin}\` - ${bestProg?.name} (+${calcProgScore(bestProg)}%)\n\n` +
        `──────────────────────────\n` +
        `⚖️ *Filtro Histéresis:* ±${hBuffer}%\n` +
        `☁️ *Ejecutado automáticamente en servidor Cloud 24/7 (Yahoo Finance)*\n` +
        `📅 _${now.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })} (Hora España)_`;

      await fetch(`https://api.telegram.org/bot${backendTelegramState.token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: backendTelegramState.chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      backendTelegramState.lastDispatchedMonth = currentMonthKey;
      return { sent: true, month: currentMonthKey };
    } catch (e: any) {
      console.error('Error running cloud scheduled check:', e.message);
      return { error: e.message };
    }
  }

  // Cloud background scheduler (Runs every 2 hours in Node.js server)
  setInterval(() => {
    try {
      const now = new Date();
      const madridHour = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Madrid' })).getHours();
      if (madridHour === 20) {
        runCloudScheduledCheck();
      }
    } catch (err) {
      console.error('Scheduler error:', err);
    }
  }, 2 * 60 * 60 * 1000);

  // ============================================================================
  // VITE MIDDLEWARE (Development) vs STATIC FILES (Production)
  // ============================================================================

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dual Momentum server running on http://localhost:${PORT}`);
  });
}

startServer();
