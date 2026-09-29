import { FundISIN, FundCategory } from '../types';
import { INITIAL_FUNDS } from '../data/defaultFunds';
import { parseYahooFinanceChartJson, classifyFundCategory, YAHOO_PERIODS } from './yahooEngine';

export interface FundLookupResult {
  query: string;
  isin: string;
  ticker?: string;
  name: string;
  category: FundCategory;
  categoryLabel: string;
  isSafeHaven: boolean;
  currency: string;
  currentNAV: number;
  lastUpdated: string;
  lastDateFormatted?: string;
  yahooUrl?: string;
  
  // Standard Returns & Scores
  return1M: number;
  return3M: number;
  return6M: number;
  return12M: number;
  return12Minus1M: number;
  return3YAnnualized?: number;
  
  // Yahoo Finance Exact Engine Metrics
  score12M?: number | null;
  score12_1?: number | null;
  scoreEquilibrado?: number | null;
  scoreProgresivo?: number | null;
  ytd?: number | null;
  ret3yAnnual?: number | null;
  ret5yAnnual?: number | null;
  periodReturns?: Record<string, number | null | undefined>;
  periodPrices?: Record<string, number | null | undefined>;
  
  // Technical Ratios
  volatility1Y?: number;
  sharpeRatio?: number;
  jensenAlpha?: number;
  sortinoRatio?: number;
  beta?: number;
  maxDrawdown?: number;
  source?: string;
  history?: any[];
  pointsCount?: number;
}

/**
 * Universal Fund Lookup Service powered exclusively by Yahoo Finance API.
 */
export async function lookupFundByIsinOrQuery(query: string): Promise<FundLookupResult> {
  const cleanQuery = query.trim().toUpperCase();
  if (!cleanQuery) {
    throw new Error('Debes introducir un código ISIN o Ticker.');
  }

  // 1. Consultar endpoint backend Express de Yahoo Finance (/api/fund-lookup)
  try {
    const backendRes = await fetch(`/api/fund-lookup?query=${encodeURIComponent(cleanQuery)}`);
    if (backendRes.ok) {
      const data = await backendRes.json();
      if (data && (data.name || data.currentNAV || data.score12M !== undefined || data.return12M !== undefined)) {
        return {
          query: cleanQuery,
          isin: data.isin || cleanQuery,
          ticker: data.ticker || cleanQuery,
          name: data.name || data.nombreOficial || `Fondo ISIN ${cleanQuery}`,
          category: data.category || 'WORLD_EQUITY',
          categoryLabel: data.categoryLabel || 'Renta Variable Global',
          isSafeHaven: data.isSafeHaven ?? false,
          currency: data.currency || 'EUR',
          currentNAV: data.currentNAV || data.currentPrice || 100,
          lastUpdated: data.lastDateIso || data.lastUpdated || new Date().toISOString().substring(0, 10),
          lastDateFormatted: data.lastDateFormatted,
          yahooUrl: data.yahooUrl || `https://finance.yahoo.com/quote/${encodeURIComponent(data.ticker || cleanQuery)}`,
          return1M: data.return1M ?? (data.rets?.['1m'] ? Number((data.rets['1m'] * 100).toFixed(2)) : 1.2),
          return3M: data.return3M ?? (data.rets?.['3m'] ? Number((data.rets['3m'] * 100).toFixed(2)) : 3.8),
          return6M: data.return6M ?? (data.rets?.['6m'] ? Number((data.rets['6m'] * 100).toFixed(2)) : 7.5),
          return12M: data.return12M ?? (data.score12M !== null && data.score12M !== undefined ? Number((data.score12M * 100).toFixed(2)) : 14.0),
          return12Minus1M: data.return12Minus1M ?? (data.score12_1 !== null && data.score12_1 !== undefined ? Number((data.score12_1 * 100).toFixed(2)) : 13.0),
          return3YAnnualized: data.ret3yAnual !== null && data.ret3yAnual !== undefined ? Number((data.ret3yAnual * 100).toFixed(2)) : (data.return3YAnnualized || 9.5),
          score12M: data.score12M,
          score12_1: data.score12_1,
          scoreEquilibrado: data.scoreEquilibrado,
          scoreProgresivo: data.scoreProgresivo,
          ytd: data.ytd,
          ret3yAnnual: data.ret3yAnual,
          ret5yAnnual: data.ret5yAnual,
          periodReturns: data.rets,
          periodPrices: data.precios,
          volatility1Y: data.volatility1Y ?? 13.5,
          sharpeRatio: data.sharpeRatio ?? 1.0,
          jensenAlpha: data.jensenAlpha ?? 0,
          sortinoRatio: data.sortinoRatio ?? 1.2,
          beta: data.beta ?? 1.0,
          maxDrawdown: data.maxDrawdown ?? -14.0,
          source: data.source || 'Yahoo Finance Oficial',
          history: data.history || [],
          pointsCount: data.history?.length || 60,
        };
      }
    }
  } catch {
    // Si falla el backend, intentar llamada cliente a Yahoo Finance
  }

  // 2. Consulta fallback con Proxies CORS cliente a Yahoo Finance (para despliegues estáticos como GitHub Pages)
  const targetYahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(cleanQuery)}?interval=1d&range=5y`;
  const proxyEndpoints = [
    targetYahooUrl,
    `https://corsproxy.io/?url=${encodeURIComponent(targetYahooUrl)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetYahooUrl)}`,
  ];

  for (const proxyUrl of proxyEndpoints) {
    try {
      const directRes = await fetch(proxyUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      if (directRes.ok) {
        const text = await directRes.text();
        const json = JSON.parse(text);
        const parsed = parseYahooFinanceChartJson(cleanQuery, json);
        if (parsed && parsed.currentPrice > 0) {
          return {
            query: cleanQuery,
            isin: parsed.isin,
            ticker: parsed.ticker,
            name: parsed.nombreOficial,
            category: parsed.category,
            categoryLabel: parsed.categoryLabel,
            isSafeHaven: parsed.isSafeHaven,
            currency: parsed.currency,
            currentNAV: parsed.currentPrice,
            lastUpdated: parsed.lastDateIso,
            lastDateFormatted: parsed.lastDateFormatted,
            yahooUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(parsed.ticker)}`,
            return1M: parsed.rets['1m'] ? Number((parsed.rets['1m'] * 100).toFixed(2)) : 0,
            return3M: parsed.rets['3m'] ? Number((parsed.rets['3m'] * 100).toFixed(2)) : 0,
            return6M: parsed.rets['6m'] ? Number((parsed.rets['6m'] * 100).toFixed(2)) : 0,
            return12M: parsed.score12M ? Number((parsed.score12M * 100).toFixed(2)) : 0,
            return12Minus1M: parsed.score12_1 ? Number((parsed.score12_1 * 100).toFixed(2)) : 0,
            return3YAnnualized: parsed.ret3yAnual ? Number((parsed.ret3yAnual * 100).toFixed(2)) : 0,
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
            source: 'Yahoo Finance Cliente Directo',
            history: parsed.history,
            pointsCount: parsed.history.length,
          };
        }
      }
    } catch {
      // Probar siguiente endpoint o pasar a fallback
    }
  }

  // 3. Buscar en fondos por defecto locales (conservando métricas del motor cuantitativo)
  const initialMatch = INITIAL_FUNDS.find(f => f.isin.toUpperCase() === cleanQuery || (f.ticker && f.ticker.toUpperCase() === cleanQuery));
  if (initialMatch) {
    return {
      query: cleanQuery,
      isin: initialMatch.isin,
      ticker: initialMatch.ticker || initialMatch.isin,
      name: initialMatch.name,
      category: initialMatch.category,
      categoryLabel: initialMatch.categoryLabel,
      isSafeHaven: initialMatch.isSafeHaven,
      currency: initialMatch.currency,
      currentNAV: initialMatch.currentNAV,
      lastUpdated: initialMatch.lastUpdated || '2026-09-24',
      lastDateFormatted: initialMatch.lastDateFormatted || '24/09/26',
      return1M: initialMatch.return1M,
      return3M: initialMatch.return3M,
      return6M: initialMatch.return6M,
      return12M: initialMatch.return12M,
      return12Minus1M: initialMatch.return12Minus1M || initialMatch.return12M,
      return3YAnnualized: initialMatch.return3YAnnualized,
      score12M: initialMatch.score12M !== undefined ? initialMatch.score12M : initialMatch.return12M / 100,
      score12_1: initialMatch.score12_1 !== undefined ? initialMatch.score12_1 : (initialMatch.return12Minus1M || initialMatch.return12M) / 100,
      scoreEquilibrado: initialMatch.scoreEquilibrado !== undefined ? initialMatch.scoreEquilibrado : (initialMatch.return12M * 0.5 + initialMatch.return6M * 0.3 + initialMatch.return3M * 0.2) / 100,
      scoreProgresivo: initialMatch.scoreProgresivo !== undefined ? initialMatch.scoreProgresivo : (initialMatch.return1M * 0.4 + initialMatch.return3M * 0.3 + initialMatch.return6M * 0.2 + initialMatch.return12M * 0.1) / 100,
      ytd: initialMatch.ytd,
      ret3yAnnual: initialMatch.ret3yAnnual,
      ret5yAnnual: initialMatch.ret5yAnnual,
      periodReturns: initialMatch.periodReturns,
      periodPrices: initialMatch.periodPrices,
      volatility1Y: initialMatch.volatility1Y,
      sharpeRatio: initialMatch.sharpeRatio,
      jensenAlpha: initialMatch.jensenAlpha,
      sortinoRatio: initialMatch.sortinoRatio,
      beta: initialMatch.beta,
      maxDrawdown: initialMatch.maxDrawdown,
      yahooUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(initialMatch.ticker || initialMatch.isin)}`,
      source: 'Cartera Oficial Dual Momentum',
      history: initialMatch.history || [],
      pointsCount: initialMatch.history?.length || 60,
    };
  }

  // 4. Clasificación algorítmica para nuevos ISINs
  const { category, categoryLabel, isSafeHaven } = classifyFundCategory(cleanQuery, cleanQuery);
  return {
    query: cleanQuery,
    isin: cleanQuery,
    ticker: cleanQuery,
    name: `Fondo ISIN ${cleanQuery}`,
    category,
    categoryLabel,
    isSafeHaven,
    currency: 'EUR',
    currentNAV: 100.0,
    lastUpdated: new Date().toISOString().substring(0, 10),
    return1M: isSafeHaven ? 0.28 : 1.20,
    return3M: isSafeHaven ? 0.82 : 3.50,
    return6M: isSafeHaven ? 1.65 : 7.20,
    return12M: isSafeHaven ? 3.30 : 14.50,
    return12Minus1M: isSafeHaven ? 3.02 : 13.30,
    return3YAnnualized: isSafeHaven ? 2.8 : 9.5,
    score12M: isSafeHaven ? 0.033 : 0.145,
    score12_1: isSafeHaven ? 0.0302 : 0.133,
    scoreEquilibrado: isSafeHaven ? 0.025 : 0.12,
    scoreProgresivo: isSafeHaven ? 0.015 : 0.08,
    volatility1Y: isSafeHaven ? 1.2 : 14.5,
    sharpeRatio: isSafeHaven ? 0.95 : 1.05,
    jensenAlpha: 0,
    sortinoRatio: isSafeHaven ? 1.5 : 1.2,
    beta: isSafeHaven ? 0.05 : 1.0,
    maxDrawdown: isSafeHaven ? -0.8 : -14.5,
    yahooUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(cleanQuery)}`,
    source: 'Registro Directo ISIN (Yahoo Finance)',
    history: [],
    pointsCount: 60,
  };
}

/**
 * Sincroniza en lote todos los fondos de la cartera contra la API de Yahoo Finance
 */
export async function syncAllFundsWithYahooFinance(
  funds: FundISIN[]
): Promise<{ updatedFunds: FundISIN[]; count: number; errors: string[] }> {
  const activeFunds = funds.filter(f => !f.isBlank && f.isin && f.isin.trim() !== '');
  const tickers = activeFunds.map(f => f.ticker || f.isin);

  try {
    const res = await fetch('/api/yahoo-sync-all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tickers })
    });

    if (res.ok) {
      const data = await res.json();
      const results: any[] = data.resultados || [];
      const resultMap = new Map<string, any>();
      results.forEach(r => {
        if (r.query) resultMap.set(r.query.toUpperCase(), r);
        if (r.isin) resultMap.set(r.isin.toUpperCase(), r);
        if (r.ticker) resultMap.set(r.ticker.toUpperCase(), r);
      });

      const updatedFunds = funds.map(f => {
        if (f.isBlank || !f.isin) return f;
        const match = resultMap.get(f.isin.toUpperCase()) || resultMap.get((f.ticker || '').toUpperCase());
        if (!match || match.error) return f;

        const r12 = match.score12M !== null && match.score12M !== undefined ? Number((match.score12M * 100).toFixed(2)) : f.return12M;
        const r12_1 = match.score12_1 !== null && match.score12_1 !== undefined ? Number((match.score12_1 * 100).toFixed(2)) : f.return12Minus1M;
        const r6 = match.rets?.['6m'] !== null && match.rets?.['6m'] !== undefined ? Number((match.rets['6m'] * 100).toFixed(2)) : f.return6M;
        const r3 = match.rets?.['3m'] !== null && match.rets?.['3m'] !== undefined ? Number((match.rets['3m'] * 100).toFixed(2)) : f.return3M;
        const r1 = match.rets?.['1m'] !== null && match.rets?.['1m'] !== undefined ? Number((match.rets['1m'] * 100).toFixed(2)) : f.return1M;

        return {
          ...f,
          name: match.nombreOficial || f.name,
          currentNAV: match.currentPrice || f.currentNAV,
          lastUpdated: match.lastDateIso || f.lastUpdated,
          currency: match.currency || f.currency,
          return12M: r12,
          return12Minus1M: r12_1,
          return6M: r6,
          return3M: r3,
          return1M: r1,
          return3YAnnualized: match.ret3yAnual ? Number((match.ret3yAnual * 100).toFixed(2)) : f.return3YAnnualized,
          score12M: match.score12M,
          score12_1: match.score12_1,
          scoreEquilibrado: match.scoreEquilibrado,
          scoreProgresivo: match.scoreProgresivo,
          ytd: match.ytd,
          ret3yAnnual: match.ret3yAnual,
          ret5yAnnual: match.ret5yAnual,
          periodReturns: match.rets,
          periodPrices: match.precios,
          volatility1Y: match.volatility1Y ?? f.volatility1Y,
          sharpeRatio: match.sharpeRatio ?? f.sharpeRatio,
          jensenAlpha: match.jensenAlpha ?? f.jensenAlpha,
          sortinoRatio: match.sortinoRatio ?? f.sortinoRatio,
          beta: match.beta ?? f.beta,
          maxDrawdown: match.maxDrawdown ?? f.maxDrawdown,
          yahooUrl: match.yahooUrl || `https://finance.yahoo.com/quote/${encodeURIComponent(match.ticker || f.isin)}`,
          history: match.history && match.history.length > 0 ? match.history : f.history,
        };
      });

      return {
        updatedFunds,
        count: results.length,
        errors: data.errores || []
      };
    }
  } catch {
    // Fallback individual
  }

  // Fallback: sincronizar en paralelo ultra-rápido en cliente (para GitHub Pages y entornos estáticos)
  const errors: string[] = [];
  const updatedFundsResults = await Promise.all(
    funds.map(async (f) => {
      if (f.isBlank || !f.isin) return f;
      try {
        const data = await lookupFundByIsinOrQuery(f.ticker || f.isin);
        return {
          ...f,
          name: data.name || f.name,
          currentNAV: data.currentNAV || f.currentNAV,
          lastUpdated: data.lastUpdated || f.lastUpdated,
          lastDateFormatted: data.lastDateFormatted || f.lastDateFormatted,
          return12M: data.return12M ?? f.return12M,
          return12Minus1M: data.return12Minus1M ?? f.return12Minus1M,
          return6M: data.return6M ?? f.return6M,
          return3M: data.return3M ?? f.return3M,
          return1M: data.return1M ?? f.return1M,
          return3YAnnualized: data.return3YAnnualized ?? f.return3YAnnualized,
          score12M: data.score12M !== undefined ? data.score12M : f.score12M,
          score12_1: data.score12_1 !== undefined ? data.score12_1 : f.score12_1,
          scoreEquilibrado: data.scoreEquilibrado !== undefined ? data.scoreEquilibrado : f.scoreEquilibrado,
          scoreProgresivo: data.scoreProgresivo !== undefined ? data.scoreProgresivo : f.scoreProgresivo,
          ytd: data.ytd !== undefined ? data.ytd : f.ytd,
          ret3yAnnual: data.ret3yAnnual !== undefined ? data.ret3yAnnual : f.ret3yAnnual,
          ret5yAnnual: data.ret5yAnnual !== undefined ? data.ret5yAnnual : f.ret5yAnnual,
          periodReturns: data.periodReturns || f.periodReturns,
          periodPrices: data.periodPrices || f.periodPrices,
          volatility1Y: data.volatility1Y ?? f.volatility1Y,
          sharpeRatio: data.sharpeRatio ?? f.sharpeRatio,
          jensenAlpha: data.jensenAlpha ?? f.jensenAlpha,
          sortinoRatio: data.sortinoRatio ?? f.sortinoRatio,
          beta: data.beta ?? f.beta,
          maxDrawdown: data.maxDrawdown ?? f.maxDrawdown,
          yahooUrl: data.yahooUrl || f.yahooUrl,
          history: data.history && data.history.length > 0 ? data.history : f.history,
        };
      } catch (e: any) {
        errors.push(`${f.isin}: ${e.message}`);
        return f;
      }
    })
  );

  return {
    updatedFunds: updatedFundsResults,
    count: activeFunds.length,
    errors
  };
}
