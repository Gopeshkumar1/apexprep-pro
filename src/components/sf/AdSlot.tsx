import React from 'react';

export interface AdSlotProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'in-feed';
  label?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  format = 'horizontal',
  label = 'Sponsored Advertisement • Google AdSense',
}) => {
  return (
    <div className="w-full my-6 flex flex-col items-center">
      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1.5 font-mono">
        {label}
      </span>
      <div
        className={`w-full rounded-2xl border border-dashed border-slate-300 bg-white/70 flex flex-col items-center justify-center p-4 text-center transition-colors hover:border-brand-500/60 shadow-soft ${
          format === 'horizontal'
            ? 'h-24 sm:h-28 max-w-4xl'
            : format === 'rectangle'
            ? 'h-64 max-w-sm'
            : 'h-36 max-w-3xl'
        }`}
      >
        <div className="flex items-center gap-2 text-slate-600 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>High-CPC Salesforce Tech Ad Placement ({format})</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Google AdSense responsive banner unit automatically injected here upon account approval
        </p>
      </div>
    </div>
  );
};
