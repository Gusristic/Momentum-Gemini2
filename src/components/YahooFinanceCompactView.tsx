import React, { useState, useMemo } from 'react';
import { 
  RefreshCw, 
  ExternalLink, 
  Download, 
  Check, 
  Copy, 
  Award,
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';
import { FundISIN } from '../types';
import { YAHOO_PERIODS, TOP_3_STYLES } from '../utils/yahooEngine';

interface Props {
  funds: FundISIN[];
  onSyncAll: () => Promise<void>;
  isSyncing: boolean;
  onEditFund?: (fund: FundISIN) => void;
}

export const YahooFinanceCompactView: React.FC<Props> = ({
  funds,
  onSyncAll,
  isSyncing,
}) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showOnlyActive, setShowOnlyActive] = useState<boolean>(true);
  const [sortColumn, setSortColumn] = useState<string>('slotNumber');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Exact Decimal Momentum Scores (0.2071 = 20.71%)
  const getScore12M = (f: FundISIN) => (f.score12M !== undefined && f.score12M !== null ? f.score12M : f.return12M / 100);
  const getScore12_1 = (f: FundISIN) => (f.score12_1 !== undefined && f.score12_1 !== null ? f.score12_1 : (f.return12Minus1M ?? f.return12M) / 100);
  const getScoreEquilibrado = (f: FundISIN) => (f.scoreEquilibrado !== undefined && f.scoreEquilibrado !== null ? f.scoreEquilibrado : (f.return12M * 0.5 + f.return6M * 0.3 + f.return3M * 0.2) / 100);
  const getScoreProgresivo = (f: FundISIN) => (f.scoreProgresivo !== undefined && f.scoreProgresivo !== null ? f.scoreProgresivo : (f.return1M * 0.4 + f.return3M * 0.3 + f.return6M * 0.2 + f.return12M * 0.1) / 100);

  const displayedFunds = useMemo(() => {
    return funds.filter(f => {
      if (showOnlyActive) return !f.isDisabled && !f.isBlank && f.isin;
      return true;
    });
  }, [funds, showOnlyActive]);

  // Rank Map by Fund ID for the 4 Score columns among risky active funds
  const { rankMap12M, rankMap12_1, rankMapEq, rankMapProg } = useMemo(() => {
    const activeRisky = displayedFunds.filter(f => !f.isSafeHaven && !f.isDisabled && !f.isBlank);

    const getRanks = (getter: (f: FundISIN) => number) => {
      const sorted = [...activeRisky].sort((a, b) => getter(b) - getter(a));
      const map = new Map<string, 1 | 2 | 3>();
      if (sorted[0]) map.set(sorted[0].id, 1);
      if (sorted[1]) map.set(sorted[1].id, 2);
      if (sorted[2]) map.set(sorted[2].id, 3);
      return map;
    };

    return {
      rankMap12M: getRanks(getScore12M),
      rankMap12_1: getRanks(getScore12_1),
      rankMapEq: getRanks(getScoreEquilibrado),
      rankMapProg: getRanks(getScoreProgresivo),
    };
  }, [displayedFunds]);

  const handleSort = (key: string) => {
    if (sortColumn === key) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(key);
      setSortDirection(key === 'slotNumber' || key === 'name' || key === 'code' ? 'asc' : 'desc');
    }
  };

  const sortedFunds = useMemo(() => {
    return [...displayedFunds].sort((a, b) => {
      let valA: any = 0;
      let valB: any = 0;

      switch (sortColumn) {
        case 'slotNumber':
          valA = a.slotNumber;
          valB = b.slotNumber;
          break;
        case 'name':
          valA = a.name;
          valB = b.name;
          break;
        case 'code':
          valA = a.ticker || a.isin;
          valB = b.ticker || b.isin;
          break;
        case 'currentNAV':
          valA = a.currentNAV;
          valB = b.currentNAV;
          break;
        case 'lastUpdated':
          valA = a.lastUpdated || '';
          valB = b.lastUpdated || '';
          break;
        case '12M':
          valA = getScore12M(a);
          valB = getScore12M(b);
          break;
        case '12-1':
          valA = getScore12_1(a);
          valB = getScore12_1(b);
          break;
        case 'Equil':
          valA = getScoreEquilibrado(a);
          valB = getScoreEquilibrado(b);
          break;
        case 'Progres':
          valA = getScoreProgresivo(a);
          valB = getScoreProgresivo(b);
          break;
        case 'ytd':
          valA = a.ytd ?? -999;
          valB = b.ytd ?? -999;
          break;
        case '1y':
          valA = a.return12M ?? -999;
          valB = b.return12M ?? -999;
          break;
        case '3y_anual':
          valA = a.ret3yAnnual ?? (a.return3YAnnualized / 100);
          valB = b.ret3yAnnual ?? (b.return3YAnnualized / 100);
          break;
        case '5y_anual':
          valA = a.ret5yAnnual ?? -999;
          valB = b.ret5yAnnual ?? -999;
          break;
        default:
          if (sortColumn.startsWith('R_')) {
            const p = sortColumn.substring(2);
            valA = a.periodReturns?.[p] ?? -999;
            valB = b.periodReturns?.[p] ?? -999;
          } else if (sortColumn.startsWith('P_')) {
            const p = sortColumn.substring(2);
            valA = a.periodPrices?.[p] ?? -999;
            valB = b.periodPrices?.[p] ?? -999;
          } else {
            valA = a.slotNumber;
            valB = b.slotNumber;
          }
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortDirection === 'asc' ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
    });
  }, [displayedFunds, sortColumn, sortDirection]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const formatPercent = (val: number | null | undefined, decimals = 2) => {
    if (val === null || val === undefined || isNaN(val)) return '—';
    const num = val * 100;
    const sign = num > 0 ? '+' : '';
    return `${sign}${num.toFixed(decimals)}%`;
  };

  const formatPrice = (val: number | null | undefined) => {
    if (val === null || val === undefined || isNaN(val)) return '—';
    if (val >= 1000) {
      return val.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
    }
    return val.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  };

  const formatTableDate = (isoStr?: string, formattedStr?: string) => {
    if (formattedStr && formattedStr.includes('/')) return formattedStr;
    if (!isoStr) return '—';
    const parts = isoStr.split('-');
    if (parts.length === 3) {
      const [yyyy, mm, dd] = parts;
      return `${dd}/${mm}/${yyyy.slice(-2)}`;
    }
    return isoStr;
  };

  const exportToCSV = () => {
    const headers = [
      'Slot', 'Nombre', 'Código', 'Precio', 'Fecha',
      '12M', '12-1', 'Equil.', 'Progres.',
      'YTD', '1y', '3y an.', '5y an.',
      'R1d', 'R1w', 'R1m', 'R3m', 'R6m', 'R1y', 'R2y', 'R3y', 'R5y',
      'P1d', 'P1w', 'P1m', 'P3m', 'P6m', 'P1y', 'P2y', 'P3y', 'P5y'
    ];

    const rows = sortedFunds.map(f => {
      const code = f.ticker || f.isin;
      const rets = f.periodReturns || {};
      const prices = f.periodPrices || {};
      return [
        f.slotNumber,
        `"${f.name}"`,
        code,
        f.currentNAV,
        formatTableDate(f.lastUpdated, f.lastDateFormatted),
        formatPercent(getScore12M(f)),
        formatPercent(getScore12_1(f)),
        formatPercent(getScoreEquilibrado(f)),
        formatPercent(getScoreProgresivo(f)),
        formatPercent(f.ytd),
        formatPercent(f.return12M / 100),
        formatPercent(f.ret3yAnnual),
        formatPercent(f.ret5yAnnual),
        ...YAHOO_PERIODS.map(p => formatPercent(rets[p.label])),
        ...YAHOO_PERIODS.map(p => prices[p.label] !== null && prices[p.label] !== undefined ? prices[p.label] : '')
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `yahoo_finance_dual_momentum_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTop3Style = (rank: 1 | 2 | 3 | undefined) => {
    if (!rank) return '';
    if (rank === 1) return 'border-2 border-[#f1c232] bg-[#fff2cc] text-[#785b00] font-black shadow-sm';
    if (rank === 2) return 'border-2 border-[#9e9e9e] bg-[#f1f3f4] text-[#475569] font-black shadow-sm';
    if (rank === 3) return 'border-2 border-[#b87333] bg-[#fce8d5] text-[#7c2d12] font-black shadow-sm';
    return '';
  };

  const getReturnTextColor = (val: number | null | undefined) => {
    if (val === null || val === undefined || isNaN(val)) return 'text-slate-500';
    return val > 0 ? 'text-[#0d904f] dark:text-emerald-400 font-semibold' : val < 0 ? 'text-[#d93025] dark:text-rose-400 font-semibold' : 'text-slate-400';
  };

  const renderSortHeader = (key: string, label: string, bgClass: string = 'bg-[#1a73e8]', extraThClass: string = '') => {
    const isCur = sortColumn === key;
    return (
      <th 
        onClick={() => handleSort(key)}
        className={`py-2 px-2 text-center cursor-pointer select-none group hover:brightness-110 transition-all font-bold ${bgClass} ${extraThClass}`}
        title={`Ordenar por ${label}`}
      >
        <div className="inline-flex items-center justify-center gap-0.5">
          <span>{label}</span>
          <span className={`text-[9px] ${isCur ? 'text-amber-300 font-black' : 'opacity-40 group-hover:opacity-100'}`}>
            {isCur ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
          </span>
        </div>
      </th>
    );
  };

  return (
    <div className="space-y-4">
      {/* HEADER BAR & CONTROLS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-blue-400" />
                <span>Matriz Cuantitativa Oficial (Yahoo Finance)</span>
              </h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-mono bg-blue-950 text-blue-300 border border-blue-500/30">
                29 Columnas · {displayedFunds.length} Slots
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Datos puros extraídos exclusivamente de <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded font-mono">/v8/finance/chart</code> de Yahoo Finance. Cálculos exactos sin inventar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowOnlyActive(!showOnlyActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                showOnlyActive 
                  ? 'bg-blue-600/20 text-blue-300 border-blue-500/40' 
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {showOnlyActive ? 'Mostrando Activos' : 'Mostrando Todos'}
            </button>

            <button
              onClick={() => onSyncAll()}
              disabled={isSyncing}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Consultando Yahoo...' : 'Actualizar Cotizaciones Yahoo'}</span>
            </button>

            <button
              onClick={exportToCSV}
              className="px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Descargar tabla completa en CSV"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>CSV</span>
            </button>
          </div>
        </div>

        {/* PODIUM LEGEND BADGES */}
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-mono font-bold text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Leyenda Podio Top 3 Resaltado (Entre Renta Variable):</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-[#f1c232] bg-[#fff2cc] text-[#785b00] font-black text-xs">
              <span className="w-2 h-2 rounded-full bg-[#f1c232]"></span>
              <span>1º Oro / Amarillo (#f1c232)</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-[#9e9e9e] bg-[#f1f3f4] text-[#475569] font-black text-xs">
              <span className="w-2 h-2 rounded-full bg-[#9e9e9e]"></span>
              <span>2º Gris Plata (#9e9e9e)</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-[#b87333] bg-[#fce8d5] text-[#7c2d12] font-black text-xs">
              <span className="w-2 h-2 rounded-full bg-[#b87333]"></span>
              <span>3º Cobre (#b87333)</span>
            </div>
          </div>
        </div>
      </div>

      {/* COMPACT TABLE (GOOGLE APPS SCRIPT MATRIX REPLICA) */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-xl scrollbar-thin scrollbar-thumb-slate-700">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            {/* Main Header Blue Strip (#1a73e8) */}
            <tr className="bg-[#1a73e8] text-white font-bold font-mono text-[11px] text-center border-b border-blue-600 select-none">
              <th 
                onClick={() => handleSort('name')}
                className="py-2.5 px-3 text-left sticky left-0 bg-[#1a73e8] z-20 cursor-pointer hover:brightness-110 min-w-[200px]"
              >
                Nombre {sortColumn === 'name' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              {renderSortHeader('code', 'Código')}
              {renderSortHeader('currentNAV', 'Precio')}
              {renderSortHeader('lastUpdated', 'Fecha')}

              {/* 4 Momentum Scores */}
              {renderSortHeader('12M', '12M', 'bg-[#1557b0]', 'border-l border-r border-blue-400/40 font-black')}
              {renderSortHeader('12-1', '12-1', 'bg-[#1557b0]', 'border-r border-blue-400/40 font-black')}
              {renderSortHeader('Equil', 'Equil.', 'bg-[#1557b0]', 'border-r border-blue-400/40 font-black')}
              {renderSortHeader('Progres', 'Progres.', 'bg-[#1557b0]', 'border-r border-blue-400/40 font-black')}

              {/* Annualized & Benchmark returns */}
              {renderSortHeader('ytd', 'YTD')}
              {renderSortHeader('1y', '1y')}
              {renderSortHeader('3y_anual', '3y an.')}
              {renderSortHeader('5y_anual', '5y an.')}

              {/* Period Returns (R1d to R5y) */}
              {YAHOO_PERIODS.map(p => renderSortHeader(`R_${p.label}`, `R${p.label}`, 'bg-[#0d47a1] text-sky-200'))}

              {/* Period Historical Prices (P1d to P5y) */}
              {YAHOO_PERIODS.map(p => renderSortHeader(`P_${p.label}`, `P${p.label}`, 'bg-slate-900 text-slate-300'))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
            {sortedFunds.map((fund, idx) => {
              const code = fund.ticker || fund.isin;
              const dateDisplay = formatTableDate(fund.lastUpdated, fund.lastDateFormatted);
              const s12M = getScore12M(fund);
              const s12_1 = getScore12_1(fund);
              const sEq = getScoreEquilibrado(fund);
              const sProg = getScoreProgresivo(fund);

              const rank12M = rankMap12M.get(fund.id);
              const rank12_1 = rankMap12_1.get(fund.id);
              const rankEq = rankMapEq.get(fund.id);
              const rankProg = rankMapProg.get(fund.id);

              const rets = fund.periodReturns || {};
              const prices = fund.periodPrices || {};

              return (
                <tr 
                  key={fund.id || idx}
                  className={`hover:bg-slate-900/90 transition-colors ${
                    fund.isSafeHaven ? 'bg-sky-950/20' : fund.isDisabled ? 'opacity-50 bg-slate-950/80' : ''
                  }`}
                >
                  {/* Nombre */}
                  <td className="py-2.5 px-3 text-left font-sans font-semibold text-slate-100 max-w-[240px] truncate sticky left-0 bg-slate-950/95 z-10 border-r border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-mono text-[9px] shrink-0">
                        #{fund.slotNumber}
                      </span>
                      <span className="truncate" title={fund.name}>
                        {fund.name}
                      </span>
                    </div>
                  </td>

                  {/* Código */}
                  <td className="py-2.5 px-2 text-center text-slate-300 font-bold whitespace-nowrap">
                    <a
                      href={fund.yahooUrl || `https://finance.yahoo.com/quote/${encodeURIComponent(code)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-blue-400 hover:underline flex items-center justify-center gap-0.5"
                      title="Abrir cotización oficial en Yahoo Finance"
                    >
                      <span>{code}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </td>

                  {/* Precio */}
                  <td className="py-2.5 px-2.5 text-right font-bold text-slate-200 whitespace-nowrap">
                    {formatPrice(fund.currentNAV)}
                  </td>

                  {/* Fecha */}
                  <td className="py-2.5 px-2 text-center text-slate-400 whitespace-nowrap">
                    {dateDisplay}
                  </td>

                  {/* Score 12M */}
                  <td className={`py-2 px-2 text-center transition-all ${getTop3Style(rank12M)}`}>
                    <div className="flex flex-col items-center">
                      <span className={rank12M ? 'font-black' : getReturnTextColor(s12M)}>
                        {formatPercent(s12M)}
                      </span>
                      {rank12M && (
                        <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-90">
                          {TOP_3_STYLES[rank12M].label.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Score 12-1 */}
                  <td className={`py-2 px-2 text-center transition-all ${getTop3Style(rank12_1)}`}>
                    <div className="flex flex-col items-center">
                      <span className={rank12_1 ? 'font-black' : getReturnTextColor(s12_1)}>
                        {formatPercent(s12_1)}
                      </span>
                      {rank12_1 && (
                        <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-90">
                          {TOP_3_STYLES[rank12_1].label.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Score Equilibrado */}
                  <td className={`py-2 px-2 text-center transition-all ${getTop3Style(rankEq)}`}>
                    <div className="flex flex-col items-center">
                      <span className={rankEq ? 'font-black' : getReturnTextColor(sEq)}>
                        {formatPercent(sEq)}
                      </span>
                      {rankEq && (
                        <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-90">
                          {TOP_3_STYLES[rankEq].label.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Score Progresivo */}
                  <td className={`py-2 px-2 text-center transition-all ${getTop3Style(rankProg)}`}>
                    <div className="flex flex-col items-center">
                      <span className={rankProg ? 'font-black' : getReturnTextColor(sProg)}>
                        {formatPercent(sProg)}
                      </span>
                      {rankProg && (
                        <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-90">
                          {TOP_3_STYLES[rankProg].label.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* YTD */}
                  <td className={`py-2.5 px-2 text-center ${getReturnTextColor(fund.ytd)}`}>
                    {formatPercent(fund.ytd)}
                  </td>

                  {/* 1y */}
                  <td className={`py-2.5 px-2 text-center ${getReturnTextColor(s12M)}`}>
                    {formatPercent(s12M)}
                  </td>

                  {/* 3y an. */}
                  <td className={`py-2.5 px-2 text-center ${getReturnTextColor(fund.ret3yAnnual)}`}>
                    {formatPercent(fund.ret3yAnnual)}
                  </td>

                  {/* 5y an. */}
                  <td className={`py-2.5 px-2 text-center ${getReturnTextColor(fund.ret5yAnnual)}`}>
                    {formatPercent(fund.ret5yAnnual)}
                  </td>

                  {/* Period Returns R1d to R5y */}
                  {YAHOO_PERIODS.map(p => (
                    <td key={`r-${p.label}`} className={`py-2.5 px-1.5 text-center ${getReturnTextColor(rets[p.label])}`}>
                      {formatPercent(rets[p.label])}
                    </td>
                  ))}

                  {/* Period Historical Prices P1d to P5y */}
                  {YAHOO_PERIODS.map(p => (
                    <td key={`p-${p.label}`} className="py-2.5 px-1.5 text-center text-slate-400">
                      {formatPrice(prices[p.label])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
