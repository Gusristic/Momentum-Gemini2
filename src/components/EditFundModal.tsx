import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  ExternalLink, 
  Shield, 
  Activity, 
  RefreshCw,
  Eye,
  EyeOff,
  CheckCircle2,
  Lock,
  Calendar
} from 'lucide-react';
import { FundISIN, FundCategory } from '../types';
import { lookupFundByIsinOrQuery } from '../utils/fundLookupClient';

interface EditFundModalProps {
  fund: FundISIN | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedFund: FundISIN) => void;
  onDelete?: (fundId: string) => void;
  onClearBlank?: (fundId: string) => void;
  onToggleDisable?: (fundId: string) => void;
}

export const EditFundModal: React.FC<EditFundModalProps> = ({
  fund,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen || !fund) return null;

  const [formData, setFormData] = useState<FundISIN>({ ...fund });
  const [isRefreshingLive, setIsRefreshingLive] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (fund) {
      setFormData({ ...fund });
      setStatusMessage(null);
    }
  }, [fund?.id]);

  const handleChange = (field: keyof FundISIN, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRefreshFromYahoo = async () => {
    const ticker = formData.ticker || formData.isin;
    setIsRefreshingLive(true);
    setStatusMessage(null);
    try {
      const data = await lookupFundByIsinOrQuery(ticker);
      setFormData(prev => ({
        ...prev,
        currentNAV: data.currentNAV || prev.currentNAV,
        return1M: data.return1M !== undefined ? data.return1M : prev.return1M,
        return3M: data.return3M !== undefined ? data.return3M : prev.return3M,
        return6M: data.return6M !== undefined ? data.return6M : prev.return6M,
        return12M: data.return12M !== undefined ? data.return12M : prev.return12M,
        return12Minus1M: data.return12Minus1M !== undefined ? data.return12Minus1M : prev.return12Minus1M,
        return3YAnnualized: data.return3YAnnualized !== undefined ? data.return3YAnnualized : prev.return3YAnnualized,
        score12M: data.score12M,
        score12_1: data.score12_1,
        scoreEquilibrado: data.scoreEquilibrado,
        scoreProgresivo: data.scoreProgresivo,
        volatility1Y: data.volatility1Y ?? prev.volatility1Y,
        sharpeRatio: data.sharpeRatio ?? prev.sharpeRatio,
        jensenAlpha: data.jensenAlpha ?? prev.jensenAlpha,
        lastUpdated: data.lastUpdated || prev.lastUpdated,
      }));
      setStatusMessage(`✅ Cotización de ${ticker} actualizada en vivo desde Yahoo Finance.`);
    } catch (err: any) {
      setStatusMessage(`❌ Error consultando Yahoo: ${err.message}`);
    } finally {
      setIsRefreshingLive(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 font-mono font-bold text-xs flex items-center justify-center border border-blue-500/30">
                #{formData.slotNumber}
              </span>
              <h3 className="text-base font-bold text-white">Slot Fijo #{formData.slotNumber} — Yahoo Finance</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Fondo fijo de la cartera: configura tus participaciones o actualiza cotizaciones.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs">
          
          {/* FUND IDENTIFIER CARD */}
          <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-300 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Identificador Fijo de Yahoo Finance</span>
              </span>
              <a
                href={formData.yahooUrl || `https://finance.yahoo.com/quote/${encodeURIComponent(formData.ticker || formData.isin)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[11px] text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1 font-bold"
              >
                <span>Abrir en Yahoo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-bold text-white">
                {formData.name}
              </div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">
                  Ticker: {formData.ticker || formData.isin}
                </span>
                <span className="text-slate-400">
                  {formData.categoryLabel}
                </span>
                {formData.isSafeHaven && (
                  <span className="px-1.5 py-0.2 rounded bg-sky-950 text-sky-400 border border-sky-800 flex items-center gap-1 text-[10px]">
                    <Shield className="w-2.5 h-2.5" /> Refugio
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>Última fecha de precio: <strong className="text-slate-200">{formData.lastUpdated}</strong></span>
              </div>
              <button
                type="button"
                onClick={handleRefreshFromYahoo}
                disabled={isRefreshingLive}
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-[11px] flex items-center gap-1 transition-all"
              >
                <RefreshCw className={`w-3 h-3 ${isRefreshingLive ? 'animate-spin' : ''}`} />
                <span>{isRefreshingLive ? 'Consultando...' : 'Actualizar Yahoo'}</span>
              </button>
            </div>

            {statusMessage && (
              <div className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-200 text-[11px] font-mono">
                {statusMessage}
              </div>
            )}
          </div>

          {/* USER HOLDINGS CONFIGURATION */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <span className="font-bold text-slate-200 font-mono text-xs uppercase tracking-wider block">
              Tus Participaciones en Cartera (Broker)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 text-[11px] font-mono mb-1">
                  Número de participaciones
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={formData.sharesHeld}
                  onChange={e => handleChange('sharesHeld', parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[11px] font-mono mb-1">
                  Precio medio adquisición (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.purchasePriceAvg}
                  onChange={e => handleChange('purchasePriceAvg', parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Capital estimado en este slot:</span>
              <strong className="text-emerald-400 text-sm">
                {(formData.sharesHeld * formData.currentNAV).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
              </strong>
            </div>
          </div>

          {/* QUICK TOGGLE DISABLED (EN GRIS) */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-slate-200 flex items-center gap-1.5">
                {formData.isDisabled ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{formData.isDisabled ? 'Slot en Gris (Excluido)' : 'Slot Activo en el Motor'}</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {formData.isDisabled ? 'El algoritmo ignora este fondo' : 'Participa en la rotación y ranking mensual'}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleChange('isDisabled', !formData.isDisabled)}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                formData.isDisabled
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {formData.isDisabled ? 'Reactivar' : 'Dejar en Gris'}
            </button>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1.5 transition-colors shadow-lg cursor-pointer"
            >
              <Save className="w-4 h-4" /> Guardar Cambios
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
