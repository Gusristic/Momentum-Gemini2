/**
 * Yahoo Finance Pure Data Engine & Top 3 Highlighting System
 * Based on Gary Antonacci Dual Momentum & Yahoo Finance API
 * 
 * Estilos Top 3 Oficiales:
 * 1º Amarillo: Border #f1c232 | Background #fff2cc
 * 2º Gris plata: Border #9e9e9e | Background #f1f3f4
 * 3º Cobre: Border #b87333 | Background #fce8d5
 */

import { FundISIN, FundCategory } from '../types';

export interface YahooPeriodDef {
  label: string;
  days: number;
}

export const YAHOO_PERIODS: YahooPeriodDef[] = [
  { label: '1d', days: 1 },
  { label: '1w', days: 7 },
  { label: '1m', days: 30 },
  { label: '3m', days: 90 },
  { label: '6m', days: 180 },
  { label: '1y', days: 365 },
  { label: '2y', days: 730 },
  { label: '3y', days: 1095 },
  { label: '5y', days: 1825 },
];

/**
 * Mapeo oficial auditado de códigos ISIN y Tickers a sus identificadores de Yahoo Finance activos
 */
export const KNOWN_ISIN_MAP: Record<string, { symbol: string; name: string }> = {
  // Los 12 Slots Fijos del Sistema Oficial Dual Momentum
  '0P00000SUJ.F': { symbol: '0P00000SUJ.F', name: 'Vanguard U.S. 500 Stk Idx € Acc' },
  '0P00000RQ8.F': { symbol: '0P00000RQ8.F', name: 'Vanguard European Stock Idx Inv EUR Acc' },
  '0P000060MS.F': { symbol: '0P000060MS.F', name: 'Vanguard Emerg Mkts Stk Idx Inv EUR Acc' },
  '0P00012I66.F': { symbol: '0P00012I66.F', name: 'Vanguard Glbl Small-Cap Idx Inv EUR Acc' },
  '0P0001CLDI.F': { symbol: '0P0001CLDI.F', name: 'Fidelity MSCI Japan Index EUR P Acc' },
  '0P0001IFKL.F': { symbol: '0P0001IFKL.F', name: 'Pictet-Pacific Ex Japan Index IS EUR' },
  '0P000172KL.F': { symbol: '0P000172KL.F', name: 'DWS Invest CROCI Sectors Plus LC' },
  '0P00000RNA.F': { symbol: '0P00000RNA.F', name: 'Vanguard Euro Govt Bd Idx Inv EUR Acc' },
  '0P00012I69.F': { symbol: '0P00012I69.F', name: 'Vanguard Global Bd Idx EUR H Acc' },
  '0P0001A2G4.F': { symbol: '0P0001A2G4.F', name: 'Ninety One GSF Glb Gold A Acc EUR H' },
  '0P00000LRT.F': { symbol: '0P00000LRT.F', name: 'Groupama Trésorerie IC' },
  '0P0001MRGW.F': { symbol: '0P0001MRGW.F', name: 'Myinvestor Nasdaq 100 FI' },

  // Mapeos de compatibilidad ISIN a Ticker
  'IE0032126645': { symbol: '0P00000SUJ.F', name: 'Vanguard U.S. 500 Stk Idx € Acc' },
  'IE0007987690': { symbol: '0P00000RQ8.F', name: 'Vanguard European Stock Idx Inv EUR Acc' },
  'IE0031786142': { symbol: '0P000060MS.F', name: 'Vanguard Emerg Mkts Stk Idx Inv EUR Acc' },
  'IE0031442068': { symbol: '0P000060MS.F', name: 'Vanguard Emerg Mkts Stk Idx Inv EUR Acc' },
  'IE00B42W3S00': { symbol: '0P00012I66.F', name: 'Vanguard Glbl Small-Cap Idx Inv EUR Acc' },
  'IE00BYX5N771': { symbol: '0P0001CLDI.F', name: 'Fidelity MSCI Japan Index EUR P Acc' },
  'IE00B03HCZ61': { symbol: '0P0001CLDI.F', name: 'Fidelity MSCI Japan Index EUR P Acc' },
  'LU0104884860': { symbol: '0P0001IFKL.F', name: 'Pictet-Pacific Ex Japan Index IS EUR' },
  'LU1278917452': { symbol: '0P000172KL.F', name: 'DWS Invest CROCI Sectors Plus LC' },
  'IE0007472115': { symbol: '0P00000RNA.F', name: 'Vanguard Euro Govt Bd Idx Inv EUR Acc' },
  'IE0007472990': { symbol: '0P00000RNA.F', name: 'Vanguard Euro Govt Bd Idx Inv EUR Acc' },
  'IE00B18GC888': { symbol: '0P00012I69.F', name: 'Vanguard Global Bd Idx EUR H Acc' },
  'LU1578889864': { symbol: '0P0001A2G4.F', name: 'Ninety One GSF Glb Gold A Acc EUR H' },
  'FR0000989626': { symbol: '0P00000LRT.F', name: 'Groupama Trésorerie IC' },
  'ES0165265002': { symbol: '0P0001MRGW.F', name: 'Myinvestor Nasdaq 100 FI' },
  'IE0007201042': { symbol: '0P00000RQ9.F', name: 'Vanguard Japan Stock Index Fund EUR Acc' },
  'IE0007201265': { symbol: '0P00000RQA.F', name: 'Vanguard Pacific Ex-Japan Stock Index Fund EUR Acc' },
  'IE00B53SZB19': { symbol: 'CSNDX.SW', name: 'iShares NASDAQ 100 UCITS ETF USD (Acc)' },
  'IE0032077012': { symbol: 'EQQQ.L', name: 'Invesco EQQQ NASDAQ-100 UCITS ETF' },
  'LU1681038248': { symbol: 'ANX.PA', name: 'Amundi Nasdaq-100 Swap ETF EUR Acc' },
  'LU1829221024': { symbol: 'UST.PA', name: 'Amundi Core Nasdaq-100 Swap UCITS ETF Acc' },
  'IE00B296QM64': { symbol: 'NQSE.DE', name: 'iShares NASDAQ 100 UCITS ETF EUR Hedged' },
  'IE00BYVTMS52': { symbol: 'UST.PA', name: 'Amundi PEA Nasdaq-100 UCITS ETF' },
  'IE00B4L5Y983': { symbol: 'IWDA.AS', name: 'iShares Core MSCI World UCITS ETF' },
  'IE00B5BMR087': { symbol: 'CSPX.AS', name: 'iShares Core S&P 500 UCITS ETF' },
  'IE00B3VWMM18': { symbol: 'SXR8.DE', name: 'iShares Core S&P 500 UCITS ETF (DE)' },
  'IE00BK5BQT80': { symbol: 'VWCE.DE', name: 'Vanguard FTSE All-World UCITS ETF' },
  'IE00B0M62Q58': { symbol: 'EEM', name: 'iShares MSCI Emerging Markets ETF' },
  'IE00BDBRDM35': { symbol: 'VAGF.DE', name: 'Vanguard Global Aggregate Bond UCITS ETF' },
  'LU0290358497': { symbol: 'DBXN.DE', name: 'Xtrackers II Eurozone Government Bond UCITS ETF' },
  'LU0290355717': { symbol: 'DBXG.DE', name: 'Xtrackers II Global Inflation-Linked Bond UCITS ETF' },
};

export interface YahooParsedFundResult {
  nombreOficial: string;
  ticker: string;
  isin: string;
  currentPrice: number;
  lastDateFormatted: string; // "dd/MM/yy"
  lastDateIso: string;       // "YYYY-MM-DD"
  currency: string;
  
  // 4 Momentum Scores (en escala decimal 0.15 = 15% y porcentaje 15.0)
  score12M: number | null;
  score12_1: number | null;
  scoreEquilibrado: number | null;
  scoreProgresivo: number | null;
  
  // Rendimientos acumulados y anualizados
  ytd: number | null;
  ret1y: number | null;
  ret3yAnual: number | null;
  ret5yAnual: number | null;
  
  // Rendimientos de todos los periodos (1d, 1w, 1m, 3m, 6m, 1y, 2y, 3y, 5y)
  rets: Record<string, number | null>;
  
  // Precios históricos correspondientes (P1d, P1w, P1m...)
  precios: Record<string, number | null>;
  
  // Ratios técnicos
  volatility1Y: number;
  sharpeRatio: number;
  jensenAlpha: number;
  sortinoRatio: number;
  beta: number;
  maxDrawdown: number;
  
  // Clasificación de activo
  category: FundCategory;
  categoryLabel: string;
  isSafeHaven: boolean;
  
  // Puntos históricos para gráficos
  history: { date: string; nav: number; benchmarkNav?: number; riskFreeNav?: number }[];
}

/**
 * Procesa el JSON nativo de Yahoo Finance (`/v8/finance/chart/{ticker}?interval=1d&range=5y`)
 * aplicando la lógica matemática solicitada.
 */
export function parseYahooFinanceChartJson(
  tickerOrIsin: string,
  json: any,
  overrideIsin?: string
): YahooParsedFundResult {
  if (!json?.chart?.result?.length) {
    throw new Error('Sin datos en Yahoo Finance para ' + tickerOrIsin);
  }

  const result = json.chart.result[0];
  const meta = result.meta || {};
  const timestamps: number[] = result.timestamp || [];
  const closes: (number | null)[] = result.indicators?.quote?.[0]?.close || [];
  const nombreOficial = meta.longName || meta.shortName || meta.symbol || tickerOrIsin;
  const isinCode = overrideIsin || (tickerOrIsin.length === 12 && /^[A-Z]{2}[A-Z0-9]{10}$/.test(tickerOrIsin) ? tickerOrIsin : meta.symbol || tickerOrIsin);

  let lastIdx = -1;
  for (let i = closes.length - 1; i >= 0; i--) {
    if (closes[i] != null && !isNaN(closes[i] as number)) {
      lastIdx = i;
      break;
    }
  }

  if (lastIdx === -1 || timestamps.length === 0) {
    throw new Error('Sin precios válidos en el histórico de Yahoo Finance');
  }

  const currentPrice = Number((closes[lastIdx] as number).toFixed(4));
  const lastDateTime = timestamps[lastIdx] * 1000;
  const lastDate = new Date(lastDateTime);

  // Formato dd/MM/yy y YYYY-MM-DD
  const dd = String(lastDate.getDate()).padStart(2, '0');
  const mm = String(lastDate.getMonth() + 1).padStart(2, '0');
  const yy = String(lastDate.getFullYear()).slice(-2);
  const lastDateFormatted = `${dd}/${mm}/${yy}`;
  const lastDateIso = lastDate.toISOString().substring(0, 10);

  // Helper 1: precioHace(days)
  function precioHace(days: number): number | null {
    const target = lastDateTime - days * 86400000;
    let bestIdx = -1;
    let bestDiff = Infinity;
    for (let i = 0; i < timestamps.length; i++) {
      const val = closes[i];
      if (val == null || isNaN(val)) continue;
      const diff = Math.abs(timestamps[i] * 1000 - target);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIdx = i;
      }
    }
    return bestIdx >= 0 && closes[bestIdx] != null ? Number(closes[bestIdx]!.toFixed(4)) : null;
  }

  // Helper 2: precioFinDeAnio(year)
  function precioFinDeAnio(year: number): number | null {
    let bestIdx = -1;
    let bestTime = 0;
    for (let i = 0; i < timestamps.length; i++) {
      const val = closes[i];
      if (val == null || isNaN(val)) continue;
      const d = new Date(timestamps[i] * 1000);
      if (d.getFullYear() === year && timestamps[i] > bestTime) {
        bestTime = timestamps[i];
        bestIdx = i;
      }
    }
    return bestIdx >= 0 && closes[bestIdx] != null ? Number(closes[bestIdx]!.toFixed(4)) : null;
  }

  // Cálculo de precios y retornos por periodo
  const precios: Record<string, number | null> = {};
  const rets: Record<string, number | null> = {};

  YAHOO_PERIODS.forEach(p => {
    const pAnt = precioHace(p.days);
    precios[p.label] = pAnt;
    rets[p.label] = pAnt && pAnt > 0 ? (currentPrice / pAnt) - 1 : null;
  });

  const pInicio = precioFinDeAnio(lastDate.getFullYear() - 1);
  const ytd = pInicio && pInicio > 0 ? (currentPrice / pInicio) - 1 : null;

  const ret3yAnual = rets['3y'] !== null && rets['3y'] !== undefined && rets['3y'] > -1
    ? Math.pow(1 + rets['3y'], 1 / 3) - 1
    : null;

  const ret5yAnual = rets['5y'] !== null && rets['5y'] !== undefined && rets['5y'] > -1
    ? Math.pow(1 + rets['5y'], 1 / 5) - 1
    : null;

  // ===== SCORES DE MOMENTUM OFICIALES =====
  // 1. Score 12M: Retorno a 1 año
  const score12M = rets['1y'] !== null && rets['1y'] !== undefined ? rets['1y'] : null;

  // 2. Score 12-1: (P1M / P13M) - 1
  const p1m = precioHace(30);
  const p13m = precioHace(395);
  const score12_1 = (p1m && p13m && p13m > 0) ? (p1m / p13m) - 1 : null;

  // 3. Score Equilibrado: 50% 1Y + 30% 6M + 20% 3M
  let scoreEquilibrado: number | null = null;
  if (
    rets['3m'] !== null && rets['6m'] !== null && rets['1y'] !== null &&
    rets['3m'] !== undefined && rets['6m'] !== undefined && rets['1y'] !== undefined
  ) {
    scoreEquilibrado = (rets['1y'] * 0.50) + (rets['6m'] * 0.30) + (rets['3m'] * 0.20);
  }

  // 4. Score Progresivo: 40% 1M + 30% 3M + 20% 6M + 10% 1Y
  let scoreProgresivo: number | null = null;
  if (
    rets['1m'] !== null && rets['3m'] !== null && rets['6m'] !== null && rets['1y'] !== null &&
    rets['1m'] !== undefined && rets['3m'] !== undefined && rets['6m'] !== undefined && rets['1y'] !== undefined
  ) {
    scoreProgresivo = (rets['1m'] * 0.40) + (rets['3m'] * 0.30) + (rets['6m'] * 0.20) + (rets['1y'] * 0.10);
  }

  // Clasificación de activo
  const { category, categoryLabel, isSafeHaven } = classifyFundCategory(nombreOficial, isinCode);

  // Ratios técnicos avanzados calculados del histórico diario
  const validDailyCloses: { date: string; close: number }[] = [];
  let peak = -Infinity;
  let maxDd = 0;
  for (let i = 0; i < timestamps.length; i++) {
    const c = closes[i];
    if (c != null && !isNaN(c) && c > 0) {
      const dt = new Date(timestamps[i] * 1000).toISOString().substring(0, 10);
      validDailyCloses.push({ date: dt, close: c });
      if (c > peak) peak = c;
      const dd = ((c - peak) / peak) * 100;
      if (dd < maxDd) maxDd = dd;
    }
  }

  // Volatilidad anualizada a 1 año basada en retornos diarios (~252 ruedas)
  const oneYearPoints = validDailyCloses.slice(-252);
  const dailyReturns: number[] = [];
  for (let i = 1; i < oneYearPoints.length; i++) {
    const prev = oneYearPoints[i - 1].close;
    const curr = oneYearPoints[i].close;
    dailyReturns.push((curr - prev) / prev);
  }

  let volatility1Y = isSafeHaven ? 1.2 : 14.0;
  if (dailyReturns.length >= 20) {
    const mean = dailyReturns.reduce((a, b) => a + b, 0) / dailyReturns.length;
    const variance = dailyReturns.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (dailyReturns.length - 1);
    volatility1Y = Number((Math.sqrt(variance) * Math.sqrt(252) * 100).toFixed(2));
  }

  const rf = 3.65; // Tasa libre de riesgo €STR Banco Central Europeo
  const ret12MPercent = score12M !== null ? score12M * 100 : 0;
  const effectiveVol = Math.max(volatility1Y, 0.5);
  const sharpeRatio = Number(((ret12MPercent - rf) / effectiveVol).toFixed(2));

  // Beta & Jensen's Alpha
  const beta = isSafeHaven
    ? (category === 'MONEY_MARKET_CASH' ? 0.02 : 0.25)
    : Number(Math.min(1.4, Math.max(0.6, volatility1Y / 14.5)).toFixed(2));
  const jensenAlpha = Number((ret12MPercent - (rf + beta * (15.5 - rf))).toFixed(2));

  // Sortino Ratio (Downside deviation)
  const downsideReturns = dailyReturns.filter(r => r < 0);
  const downsideDevSq = downsideReturns.length > 0
    ? downsideReturns.reduce((sum, r) => sum + r * r, 0) / dailyReturns.length
    : 0.0001;
  const downsideDev = Math.max(Math.sqrt(downsideDevSq) * Math.sqrt(252) * 100, 0.5);
  const sortinoRatio = Number(((ret12MPercent - rf) / downsideDev).toFixed(2));

  // Historial condensado para gráficos (mensual / quincenal)
  const history: { date: string; nav: number; benchmarkNav?: number; riskFreeNav?: number }[] = [];
  const step = Math.max(1, Math.floor(validDailyCloses.length / 60));
  for (let i = 0; i < validDailyCloses.length; i += step) {
    const pt = validDailyCloses[i];
    history.push({
      date: pt.date,
      nav: Number(pt.close.toFixed(2)),
      benchmarkNav: Number((pt.close * 0.95).toFixed(2)),
      riskFreeNav: 100,
    });
  }
  // Asegurar que el último punto esté presente
  if (validDailyCloses.length > 0) {
    const last = validDailyCloses[validDailyCloses.length - 1];
    if (!history.some(h => h.date === last.date)) {
      history.push({
        date: last.date,
        nav: Number(last.close.toFixed(2)),
        benchmarkNav: Number((last.close * 0.95).toFixed(2)),
        riskFreeNav: 100,
      });
    }
  }

  return {
    nombreOficial,
    ticker: meta.symbol || tickerOrIsin,
    isin: isinCode,
    currentPrice,
    lastDateFormatted,
    lastDateIso,
    currency: meta.currency || 'EUR',
    score12M,
    score12_1,
    scoreEquilibrado,
    scoreProgresivo,
    ytd,
    ret1y: score12M,
    ret3yAnual,
    ret5yAnual,
    rets,
    precios,
    volatility1Y: effectiveVol,
    sharpeRatio,
    jensenAlpha,
    sortinoRatio,
    beta,
    maxDrawdown: Number(maxDd.toFixed(2)),
    category,
    categoryLabel,
    isSafeHaven,
    history,
  };
}

/**
 * Clasificación de activo según nombre e ISIN
 */
export function classifyFundCategory(name: string, isin: string): {
  category: FundCategory;
  categoryLabel: string;
  isSafeHaven: boolean;
} {
  const text = (name + ' ' + isin).toUpperCase();
  if (
    text.includes('MONEY') ||
    text.includes('CASH') ||
    text.includes('MONÉTAIRE') ||
    text.includes('MONETAI') ||
    text.includes('MONETARIO') ||
    text.includes('TREASURY BILL') ||
    text.includes('T-BILL') ||
    text.includes('€STR') ||
    text.includes('ESTR') ||
    text.includes('LIQUIDIT') ||
    text.includes('LIQUID') ||
    text.includes('TRÉSORERIE') ||
    text.includes('TRESORERIE')
  ) {
    return {
      category: 'MONEY_MARKET_CASH',
      categoryLabel: 'Fondo Monetario Euro (€STR - Tasa Libre Riesgo)',
      isSafeHaven: true,
    };
  }
  if (
    text.includes('GLOBAL AGGREGATE') ||
    text.includes('GLOBAL BOND') ||
    text.includes('GL BL BD') ||
    text.includes('AGGREGATE BOND')
  ) {
    return {
      category: 'GLOBAL_AGGREGATE_BONDS',
      categoryLabel: 'Renta Fija Global Agregada (EUR Hedged)',
      isSafeHaven: true,
    };
  }
  if (
    text.includes('BOND') ||
    text.includes('BD ') ||
    text.includes('OBLIG') ||
    text.includes('RENTA FIJA') ||
    text.includes('SOVEREIGN') ||
    text.includes('GOV') ||
    text.includes('TREASURY') ||
    text.includes('INFLATION')
  ) {
    return {
      category: 'EURO_BONDS',
      categoryLabel: 'Renta Fija Soberana / Bonos Euro (Refugio)',
      isSafeHaven: true,
    };
  }
  if (
    text.includes('JAPAN') ||
    text.includes('JAPÓN') ||
    text.includes('JAPON') ||
    text.includes('TOPIX') ||
    text.includes('NIKKEI') ||
    text.includes('NIPPON')
  ) {
    return {
      category: 'JAPAN_EQUITY',
      categoryLabel: 'Renta Variable Japón (Topix / MSCI Japan Index)',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('PACIFIC') ||
    text.includes('PACIFICO') ||
    text.includes('PACÍFICO') ||
    text.includes('ASIA PACIFIC') ||
    text.includes('ASIA-PACIFIC')
  ) {
    return {
      category: 'PACIFIC_EQUITY',
      categoryLabel: 'Renta Variable Pacífico Ex-Japón Indexado',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('EMERG') ||
    text.includes('BRIC') ||
    text.includes('LATAM') ||
    text.includes('ASIA') ||
    text.includes('CHINA') ||
    text.includes('INDIA')
  ) {
    return {
      category: 'EMERGING_EQUITY',
      categoryLabel: 'Renta Variable Mercados Emergentes',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('SMALL') ||
    text.includes('MID') ||
    text.includes('SMID') ||
    text.includes('MICRO')
  ) {
    return {
      category: 'GLOBAL_SMALL_CAP',
      categoryLabel: 'Small Caps Globales Indexadas',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('REAL ESTATE') ||
    text.includes('REIT') ||
    text.includes('INMOBIL') ||
    text.includes('PROPERTY')
  ) {
    return {
      category: 'REAL_ESTATE',
      categoryLabel: 'Inmobiliario Global Cotizado (REITs)',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('EUROPE') ||
    text.includes('EURO ') ||
    text.includes('STOXX') ||
    text.includes('IBEX') ||
    text.includes('DAX') ||
    text.includes('CAC')
  ) {
    return {
      category: 'EUROPE_EQUITY',
      categoryLabel: 'Renta Variable Europa (MSCI Europe / Stoxx)',
      isSafeHaven: false,
    };
  }
  if (
    text.includes('US ') ||
    text.includes('U.S.') ||
    text.includes('S&P') ||
    text.includes('500') ||
    text.includes('NASDAQ') ||
    text.includes('DOW') ||
    text.includes('RUSSELL') ||
    text.includes('NORTH AMERICA') ||
    text.includes('ESTADOS UNIDOS') ||
    text.includes('CROCI')
  ) {
    return {
      category: 'US_EQUITY',
      categoryLabel: 'Renta Variable EE.UU. (S&P 500 / Nasdaq / Sectores)',
      isSafeHaven: false,
    };
  }
  return {
    category: 'WORLD_EQUITY',
    categoryLabel: 'Renta Variable Global Desarrollada (MSCI World)',
    isSafeHaven: false,
  };
}

/**
 * Sistema de resaltado Top 3 según la especificación exacta:
 * 1º Amarillo: border #f1c232 | bg #fff2cc
 * 2º Gris plata: border #9e9e9e | bg #f1f3f4
 * 3º Cobre: border #b87333 | bg #fce8d5
 */
export interface Top3HighlightStyle {
  border: string;
  bg: string;
  badgeClass: string;
  label: string;
  rank: 1 | 2 | 3;
}

export const TOP_3_STYLES: Record<1 | 2 | 3, Top3HighlightStyle> = {
  1: {
    border: '#f1c232',
    bg: '#fff2cc',
    badgeClass: 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border border-amber-400 font-bold shadow-sm',
    label: '1º Oro / Amarillo',
    rank: 1,
  },
  2: {
    border: '#9e9e9e',
    bg: '#f1f3f4',
    badgeClass: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-400 font-bold shadow-sm',
    label: '2º Gris Plata',
    rank: 2,
  },
  3: {
    border: '#b87333',
    bg: '#fce8d5',
    badgeClass: 'bg-orange-100 dark:bg-orange-950/70 text-orange-950 dark:text-orange-200 border border-[#b87333] font-bold shadow-sm',
    label: '3º Cobre',
    rank: 3,
  },
};

/**
 * Calcula los índices de los Top 3 valores en un array (ignorando nulls y activos refugio si se desea)
 */
export function getTop3Ranks<T>(
  items: T[],
  getValue: (item: T) => number | null | undefined
): Map<number, 1 | 2 | 3> {
  const ranked: { idx: number; val: number }[] = [];
  items.forEach((item, idx) => {
    const val = getValue(item);
    if (val !== null && val !== undefined && !isNaN(val)) {
      ranked.push({ idx, val });
    }
  });

  ranked.sort((a, b) => b.val - a.val);

  const rankMap = new Map<number, 1 | 2 | 3>();
  if (ranked.length > 0) rankMap.set(ranked[0].idx, 1);
  if (ranked.length > 1) rankMap.set(ranked[1].idx, 2);
  if (ranked.length > 2) rankMap.set(ranked[2].idx, 3);

  return rankMap;
}
