import React from 'react';
import { Feather, RefreshCw, Lock, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Feather,
      title: '100% Breathable Cotton',
      desc: 'Soft organic feel with tagless neck labels so your kids never scratch or itch.',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: RefreshCw,
      title: '7-Day Easy Returns',
      desc: 'Size mismatch? No problem! Doorstep doorstep pickup with instant refund.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Lock,
      title: 'Safe UPI & COD',
      desc: 'Pay safely via Google Pay, PhonePe, Cards or Cash on Delivery at doorstep.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Zap,
      title: 'Fast 24-Hour Dispatch',
      desc: 'Dispatched directly from our Indian hub with real-time SMS tracking updates.',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
            Why Parents Love Us
          </h2>
          <p className="text-xs sm:text-sm text-slate mt-1">
            Built by parents, crafted for comfort, trusted by families across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="p-6 rounded-3xl bg-cream/60 border border-gray-100 space-y-3 text-center sm:text-left hover:shadow-soft transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${r.color} flex items-center justify-center mx-auto sm:mx-0 shadow-xs`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-navy">
                  {r.title}
                </h3>
                <p className="text-xs text-slate leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
