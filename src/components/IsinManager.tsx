import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Edit3, 
  CheckCircle, 
  Shield, 
  AlertCircle, 
  ArrowUpDown,
  RefreshCw,
  Eye,
  EyeOff,
  Calendar,
  Lock,
  Award,
  Layers
} from 'lucide-react';
import { FundISIN, MomentumScoreResult } from '../types';
import { MomentumMode } from '../utils/momentumEngine';
import { formatDateDisplay } from './Header';

interface IsinManagerProps {
  funds: FundISIN[];
  momentumScores: MomentumScoreResult[];
  momentumMode?: MomentumMode;
  activeFundId: string;
  onSelectActiveFund: (id: string) => void;
  onEditFund: (fund: FundISIN) => void;
  onSaveFund?: (fund: FundISIN) => void;
  onDeleteFund?: (fundId: string) => void;
  onClearBlankFund?: (fundId: string) => void;
  onToggleDisableFund?: (fundId: string) => void;
  onAddSlot?: () => void;
  onResetToDefaults: () => void;
  onSyncRealMarketData?: () => void;
  isSyncing?: boolean;
  lastUpdated?: string;
}

export const IsinManager: React.FC<IsinManagerProps> = ({
  funds,
  momentumScores,
  momentumMode = 'COMPOSITE_BLENDED',
  activeFundId,
  onSelectActiveFund,
  onEditFund,
  onToggleDisableFund,
  onResetToDefaults,
  onSyncRealMarketData,
  isSyncing = false,
  lastUpdated = '2026-09-24',
}) => {
  const [copiedIsin, setCopiedIsin] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [sortKey, setSortKey] = useState<string>('slotNumber');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir(key === 'slotNumber' || key === 'name' || key === 'category' ? 'asc' : 'desc');
    }
  };

  const renderSortHeader = (key: string, label: React.ReactNode, align: 'left' | 'center' | 'right' = 'left', extraClass: string = '') => {
    const isCurrent = sortKey === key;
    return (
      <th 
        onClick={() => handleSort(key)}
        className={`py-3 px-3.5 cursor-pointer select-none group hover:text-white transition-colors ${
          align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'
        } ${extraClass}`}
        title={`Clic para ordenar por ${typeof label === 'string' ? label : key} (${isCurrent && sortDir === 'asc' ? 'descendente' : 'ascendente'})`}
      >
        <div className={`inline-flex items-center gap-1.5 ${
          align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : 'justify-start'
        }`}>
          <span>{label}</span>
          <span className={`inline-flex items-center transition-opacity ${isCurrent ? 'text-emerald-400 font-bold opacity-100' : 'opacity-30 group-hover:opacity-75'}`}>
            {isCurrent ? (sortDir === 'asc' ? '▲' : '▼') : <ArrowUpDown className="w-3 h-3" />}
          </span>
        </div>
      </th>
    );
  };

  const copyToClipboard = (isin: string) => {
    navigator.clipboard.writeText(isin);
    setCopiedIsin(isin);
    setTimeout(() => setCopiedIsin(null), 2000);
  };

  const getScoreResult = (fundId: string) => {
    return momentumScores.find(s => s.fund.id === fundId);
  };

  const filteredFunds = funds.filter(fund => {
    const matchesSearch = 
      fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.isin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (fund.ticker && fund.ticker.toLowerCase().includes(searchTerm.toLowerCase())) ||
      fund.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterCategory === 'ALL') return matchesSearch;
    if (filterCategory === 'SAFE') return matchesSearch && fund.isSafeHaven;
    if (filterCategory === 'EQUITY') return matchesSearch && !fund.isSafeHaven;
    if (filterCategory === 'DISABLED') return matchesSearch && fund.isDisabled;
    return matchesSearch;
  });

  const sortedFunds = [...filteredFunds].sort((a, b) => {
    let valA: any = 0;
    let valB: any = 0;

    switch (sortKey) {
      case 'slotNumber':
        valA = a.slotNumber;
        valB = b.slotNumber;
        break;
      case 'isin':
        valA = a.ticker || a.isin || '';
        valB = b.ticker || b.isin || '';
        break;
      case 'name':
        valA = a.name || '';
        valB = b.name || '';
        break;
      case 'category':
        valA = a.categoryLabel || '';
        valB = b.categoryLabel || '';
        break;
      case 'currentNAV':
        valA = a.currentNAV || 0;
        valB = b.currentNAV || 0;
        break;
      case 'score': {
        const scoreA = getScoreResult(a.id)?.relativeMomentumScore ?? a.return12M ?? -999;
        const scoreB = getScoreResult(b.id)?.relativeMomentumScore ?? b.return12M ?? -999;
        valA = scoreA;
        valB = scoreB;
        break;
      }
      case 'sharpeRatio':
        valA = a.sharpeRatio || 0;
        valB = b.sharpeRatio || 0;
        break;
      case 'jensenAlpha':
        valA = a.jensenAlpha || 0;
        valB = b.jensenAlpha || 0;
        break;
      case 'capital':
        valA = (a.sharesHeld || 0) * (a.currentNAV || 0);
        valB = (b.sharesHeld || 0) * (b.currentNAV || 0);
        break;
      default:
        valA = a.slotNumber;
        valB = b.slotNumber;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortDir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortDir === 'asc' ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 shadow-lg">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>11 Slots Fijos del Sistema (Yahoo Finance Oficial)</span>
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-blue-950/80 text-blue-300 border border-blue-500/30">
              11 Activos Seleccionados
            </span>
            <span 
              id="isin-manager-online-update-badge"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/40"
              title={`Fecha y hora de última actualización efectiva de cotizaciones online: ${lastUpdated}`}
            >
              <Calendar className="w-3 h-3 text-emerald-400" />
              <span className="text-slate-400 text-[11px]">Actualización online:</span>
              <strong className="text-emerald-400 font-bold">{formatDateDisplay(lastUpdated)}</strong>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Los 11 slots están fijados con sus códigos de cotización oficiales de Yahoo Finance para garantizar rescates limpios, fiabilidad cuantitativa total y ordenación de podio.
          </p>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs">
            <button
              onClick={() => setFilterCategory('ALL')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'ALL' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todos ({funds.length})
            </button>
            <button
              onClick={() => setFilterCategory('EQUITY')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'EQUITY' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Renta Variable ({funds.filter(f => !f.isSafeHaven).length})
            </button>
            <button
              onClick={() => setFilterCategory('SAFE')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'SAFE' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Refugios / Bonos ({funds.filter(f => f.isSafeHaven).length})
            </button>
            {funds.some(f => f.isDisabled) && (
              <button
                onClick={() => setFilterCategory('DISABLED')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterCategory === 'DISABLED' ? 'bg-amber-950/60 text-amber-300 font-medium border border-amber-800/50' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                En Gris ({funds.filter(f => f.isDisabled).length})
              </button>
            )}
          </div>

          {onSyncRealMarketData && (
            <button
              onClick={onSyncRealMarketData}
              disabled={isSyncing}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-500/40 bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow"
              title="Consultar cotizaciones oficiales en Yahoo Finance API"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Consultando Yahoo...' : 'Actualizar Cotizaciones Yahoo'}</span>
            </button>
          )}

          <button
            onClick={onResetToDefaults}
            className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
            title="Restablecer los fondos predeterminados oficiales"
          >
            Restaurar {funds.length} Slots
          </button>
        </div>
      </div>

      {/* Table of the 11 Slots */}
      <div className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/60">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] bg-slate-950/90 uppercase tracking-wider">
              {renderSortHeader('slotNumber', 'Slot', 'left')}
              {renderSortHeader('name', 'Fondo & Categoría', 'left')}
              {renderSortHeader('isin', 'Ticker Yahoo', 'center')}
              {renderSortHeader('currentNAV', 'VL (€)', 'right')}
              {renderSortHeader('score', (
                <div className="flex flex-col items-center">
                  <span>
                    {momentumMode === 'MOMENTUM_12_MINUS_1'
                      ? 'Score 12m-1m (Inst.)'
                      : momentumMode === 'PROGRESSIVE_STEPPED'
                      ? 'Score Progresivo'
                      : momentumMode === 'COMPOSITE_BLENDED'
                      ? 'Score Equilibrado'
                      : 'Score 12M Puro'}
                  </span>
                  <span className="text-[9px] text-slate-500 font-normal normal-case">
                    {momentumMode === 'MOMENTUM_12_MINUS_1'
                      ? 'MSCI/AQR · Sin mes t-1'
                      : momentumMode === 'PROGRESSIVE_STEPPED'
                      ? '40% 1M · 30% 3M · 20% 6M · 10% 12M'
                      : momentumMode === 'COMPOSITE_BLENDED'
                      ? '50% 12M · 30% 6M · 20% 3M'
                      : '100% Gary Antonacci'}
                  </span>
                </div>
              ), 'center')}
              {renderSortHeader('sharpeRatio', 'Sharpe (1Y)', 'center')}
              {renderSortHeader('jensenAlpha', 'Alfa (α)', 'center')}
              <th className="py-3 px-3.5 text-center">Mom. Absoluto</th>
              <th className="py-3 px-3.5 text-center">Yahoo Finance</th>
              {renderSortHeader('capital', 'Cartera (€)', 'right')}
              <th className="py-3 px-3.5 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {sortedFunds.map((fund, index) => {
              const scoreResult = getScoreResult(fund.id);
              const isCurrentHeld = fund.id === activeFundId;
              const isSlotDisabled = !!fund.isDisabled;
              const isRankOne = scoreResult?.relativeRank === 1 && !fund.isSafeHaven && !isSlotDisabled;
              const capitalValue = (fund.sharesHeld * fund.currentNAV).toFixed(2);
              const ticker = fund.ticker || fund.isin;

              return (
                <tr 
                  key={`${fund.id}-${fund.slotNumber || index}`}
                  className={`transition-colors ${
                    isSlotDisabled
                      ? 'bg-slate-950/80 opacity-60 text-slate-500 border-l-4 border-l-slate-700'
                      : isCurrentHeld 
                      ? 'bg-emerald-950/20 border-l-4 border-l-emerald-500 hover:bg-slate-900/80' 
                      : isRankOne 
                      ? 'bg-amber-950/10 hover:bg-slate-900/80' 
                      : 'hover:bg-slate-900/80'
                  }`}
                >
                  {/* Slot Number */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs ${
                        isSlotDisabled 
                          ? 'bg-slate-800 text-slate-500' 
                          : isRankOne
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        #{fund.slotNumber}
                      </span>
                      {isCurrentHeld && (
                        <span className="inline-block text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                          En Cartera
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Fund Name & Category */}
                  <td className="py-3 px-3.5 max-w-[320px] 2xl:max-w-[450px]">
                    <div className={`font-semibold truncate ${isSlotDisabled ? 'text-slate-500' : 'text-slate-100'}`} title={fund.name}>
                      {fund.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSlotDisabled
                          ? 'bg-slate-800 text-slate-500'
                          : fund.isSafeHaven 
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20' 
                          : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                      }`}>
                        {fund.categoryLabel}
                      </span>
                      {fund.isSafeHaven && !isSlotDisabled && (
                        <span className="text-[10px] text-sky-400 font-mono flex items-center gap-0.5">
                          <Shield className="w-2.5 h-2.5" /> Refugio
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Yahoo Ticker */}
                  <td className="py-3 px-3.5 text-center font-mono font-bold whitespace-nowrap text-blue-300">
                    <div className="flex items-center justify-center gap-1">
                      <span>{ticker}</span>
                      <button
                        onClick={() => copyToClipboard(ticker)}
                        className="text-slate-500 hover:text-emerald-400 transition-colors p-0.5"
                        title="Copiar código Yahoo"
                      >
                        {copiedIsin === ticker ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </td>

                  {/* NAV (€) */}
                  <td className="py-3 px-3.5 text-right font-mono font-semibold text-slate-200 whitespace-nowrap">
                    {`${fund.currentNAV.toFixed(fund.currentNAV > 1000 ? 1 : 2)} €`}
                  </td>

                  {/* Momentum Score */}
                  <td className="py-3 px-3.5 text-center whitespace-nowrap">
                    <div className="inline-flex flex-col items-center">
                      {(() => {
                        const scoreVal = scoreResult ? scoreResult.relativeMomentumScore : fund.return12M;
                        return (
                          <>
                            <span className={`font-mono font-bold text-sm ${
                              scoreVal > 0 ? 'text-emerald-400' : 'text-rose-400'
                            }`}>
                              {scoreVal > 0 ? `+${scoreVal}%` : `${scoreVal}%`}
                            </span>
                            {momentumMode === 'COMPOSITE_BLENDED' && (
                              <span className="text-[9px] font-mono text-slate-500">
                                (12M: {fund.return12M}%)
                              </span>
                            )}
                          </>
                        );
                      })()}
                      {scoreResult && !fund.isSafeHaven && scoreResult.relativeRank !== 999 && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold mt-0.5 ${
                          scoreResult.relativeRank === 1 
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                            : 'text-slate-400'
                        }`}>
                          Rank #{scoreResult.relativeRank}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Sharpe Ratio */}
                  <td className="py-3 px-3.5 text-center font-mono whitespace-nowrap">
                    {isSlotDisabled ? (
                      <span className="text-slate-600 text-xs">—</span>
                    ) : (
                      <span className={`px-2 py-0.5 rounded font-semibold text-xs ${
                        fund.sharpeRatio >= 1.5 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : fund.sharpeRatio >= 1.0 
                          ? 'bg-teal-500/20 text-teal-300' 
                          : fund.sharpeRatio >= 0.5 
                          ? 'bg-slate-800 text-slate-300' 
                          : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {fund.sharpeRatio.toFixed(2)}
                      </span>
                    )}
                  </td>

                  {/* Jensen's Alpha */}
                  <td className="py-3 px-3.5 text-center font-mono whitespace-nowrap">
                    {isSlotDisabled ? (
                      <span className="text-slate-600 text-xs">—</span>
                    ) : (
                      <span className={`font-semibold ${
                        fund.jensenAlpha > 0 ? 'text-emerald-400' : fund.jensenAlpha < 0 ? 'text-rose-400' : 'text-slate-400'
                      }`}>
                        {fund.jensenAlpha > 0 ? `+${fund.jensenAlpha.toFixed(2)}%` : `${fund.jensenAlpha.toFixed(2)}%`}
                      </span>
                    )}
                  </td>

                  {/* Absolute Momentum Check */}
                  <td className="py-3 px-3.5 text-center whitespace-nowrap">
                    {isSlotDisabled ? (
                      <span className="text-slate-500 text-[11px] font-mono">En Gris</span>
                    ) : scoreResult?.absoluteMomentumPositive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" />
                        Apto (&gt; €STR)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                        <AlertCircle className="w-3 h-3" />
                        Bajo Hurdle
                      </span>
                    )}
                  </td>

                  {/* Yahoo Link */}
                  <td className="py-3 px-3.5 text-center whitespace-nowrap">
                    <a
                      href={fund.yahooUrl || `https://finance.yahoo.com/quote/${encodeURIComponent(ticker)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-950/60 text-blue-300 hover:bg-blue-900 hover:text-white border border-blue-500/40 transition-colors inline-flex items-center gap-1"
                      title="Ver cotización oficial en Yahoo Finance"
                    >
                      <span>Yahoo</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </td>

                  {/* Portfolio Capital */}
                  <td className="py-3 px-3.5 text-right font-mono whitespace-nowrap">
                    {fund.sharesHeld > 0 ? (
                      <div>
                        <div className="font-bold text-slate-200">{Number(capitalValue).toLocaleString('es-ES')} €</div>
                        <div className="text-[10px] text-slate-400">{fund.sharesHeld} part.</div>
                      </div>
                    ) : (
                      <span className="text-slate-600 font-mono">0,00 €</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-3.5 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      {/* Toggle Disabled (En gris) */}
                      {onToggleDisableFund && (
                        <button
                          onClick={() => onToggleDisableFund(fund.id)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isSlotDisabled
                              ? 'text-amber-400 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40'
                              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800'
                          }`}
                          title={isSlotDisabled ? 'Activar fondo (quitar de gris)' : 'Dejar en gris (fondo visible pero excluido del algoritmo)'}
                        >
                          {isSlotDisabled ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      )}

                      {/* Edit */}
                      <button
                        onClick={() => onEditFund(fund)}
                        className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="Editar participaciones y parámetros de este slot"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {/* Asignar como activo */}
                      {!isCurrentHeld && !isSlotDisabled && (
                        <button
                          onClick={() => onSelectActiveFund(fund.id)}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                          title="Fijar como fondo actual en cartera"
                        >
                          Asignar
                        </button>
                      )}
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Info note */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2 pt-1 border-t border-slate-800/60">
        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            Estructura de 11 slots fijos optimizada para Dual Momentum (Gary Antonacci / Meb Faber) con datos en tiempo real de Yahoo Finance.
          </span>
        </div>
        <span className="font-mono text-slate-500 text-[11px]">
          1º Amarillo (#f1c232) • 2º Plata (#9e9e9e) • 3º Cobre (#b87333)
        </span>
      </div>

    </div>
  );
};
