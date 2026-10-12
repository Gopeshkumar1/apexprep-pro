'use client';

import React, { useState } from 'react';
import { Truck, ShieldCheck, X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-navy text-white py-2 px-4 text-xs font-medium relative z-40 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-6 overflow-hidden text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 shrink-0">
            <Truck className="w-3.5 h-3.5 text-accent animate-bounce" />
            <span>
              <strong>FREE EXPRESS SHIPPING</strong> on orders above ₹999 across India!
            </span>
          </div>
          <div className="hidden md:inline-flex items-center gap-1.5 shrink-0 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary-light" />
            <span>100% Breathable Cotton • 7-Day Easy Returns</span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-0.5 transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
