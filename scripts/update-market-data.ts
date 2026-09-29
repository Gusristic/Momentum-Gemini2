import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_FUNDS, benchReturns } from '../src/data/defaultFunds.js';
import { parseYahooFinanceChartJson } from '../src/utils/yahooEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_PATH = path.join(__dirname, '../src/data/defaultFunds.ts');

async function syncAllFunds() {
  console.log('🔄 Sincronizando los 12 fondos del Sistema Dual Momentum desde Yahoo Finance...');
  const updatedFunds = [];

  for (const fund of INITIAL_FUNDS) {
    const symbol = fund.ticker || fund.isin;
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5y`;
    
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.warn(`⚠️ Error ${res.status} para ${symbol}, manteniendo datos previos.`);
        updatedFunds.push(fund);
        continue;
      }
      const json = await res.json();
      const parsed = parseYahooFinanceChartJson(symbol, json);

      const r12 = parsed.score12M !== null && parsed.score12M !== undefined ? Number((parsed.score12M * 100).toFixed(2)) : fund.return12M;
      const r12_1 = parsed.score12_1 !== null && parsed.score12_1 !== undefined ? Number((parsed.score12_1 * 100).toFixed(2)) : fund.return12Minus1M;
      const r6 = parsed.rets?.['6m'] !== null && parsed.rets?.['6m'] !== undefined ? Number((parsed.rets['6m'] * 100).toFixed(2)) : fund.return6M;
      const r3 = parsed.rets?.['3m'] !== null && parsed.rets?.['3m'] !== undefined ? Number((parsed.rets['3m'] * 100).toFixed(2)) : fund.return3M;
      const r1 = parsed.rets?.['1m'] !== null && parsed.rets?.['1m'] !== undefined ? Number((parsed.rets['1m'] * 100).toFixed(2)) : fund.return1M;
      const r3yAnual = parsed.ret3yAnual !== null && parsed.ret3yAnual !== undefined ? Number((parsed.ret3yAnual * 100).toFixed(2)) : fund.return3YAnnualized;

      const updated = {
        ...fund,
        name: parsed.nombreOficial || fund.name,
        currentNAV: parsed.currentPrice,
        currency: parsed.currency || fund.currency || 'EUR',
        lastUpdated: parsed.lastDateIso,
        lastDateFormatted: parsed.lastDateFormatted,
        return1M: r1,
        return3M: r3,
        return6M: r6,
        return12M: r12,
        return12Minus1M: r12_1,
        return3YAnnualized: r3yAnual,
        score12M: parsed.score12M,
        score12_1: parsed.score12_1,
        scoreEquilibrado: parsed.scoreEquilibrado,
        scoreProgresivo: parsed.scoreProgresivo,
        ytd: parsed.ytd,
        ret3yAnnual: parsed.ret3yAnual,
        ret5yAnnual: parsed.ret5yAnual,
        periodReturns: parsed.rets,
        periodPrices: parsed.precios,
        volatility1Y: parsed.volatility1Y,
        sharpeRatio: parsed.sharpeRatio,
        jensenAlpha: parsed.jensenAlpha,
        sortinoRatio: parsed.sortinoRatio,
        beta: parsed.beta,
        maxDrawdown: parsed.maxDrawdown,
        yahooUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}`,
        history: parsed.history && parsed.history.length > 0 ? parsed.history : fund.history,
      };

      console.log(`✅ Slot #${fund.slotNumber} ${updated.name}: NAV=${updated.currentNAV} Fecha=${updated.lastDateFormatted} (12M=${updated.return12M}%)`);
      updatedFunds.push(updated);
    } catch (e: any) {
      console.error(`❌ Error procesando ${symbol}:`, e.message);
      updatedFunds.push(fund);
    }
  }

  const fileContent = `import { FundISIN, HistoricalDataPoint } from '../types';

export const benchReturns = ${JSON.stringify(benchReturns, null, 2)};

/**
 * 12 Slots Fijos Oficiales del Sistema Dual Momentum
 * Datos puros rescatados directamente de Yahoo Finance API (/v8/finance/chart)
 * Actualizado automáticamente en build / despliegue
 */
export const INITIAL_FUNDS: FundISIN[] = ${JSON.stringify(updatedFunds, null, 2)};
`;

  fs.writeFileSync(TARGET_PATH, fileContent, 'utf-8');
  console.log(`\n🎉 Archivo ${TARGET_PATH} actualizado correctamente con datos vivos de Yahoo Finance.`);
}

syncAllFunds().catch((e: any) => {
  console.error('Fatal sync error:', e);
  process.exit(1);
});
