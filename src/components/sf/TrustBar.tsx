import React from 'react';
import { Users, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const companies = [
    { name: 'Salesforce', color: 'text-sky-700 bg-sky-50 border-sky-200' },
    { name: 'Deloitte', color: 'text-emerald-800 bg-emerald-50 border-emerald-200' },
    { name: 'Accenture', color: 'text-purple-800 bg-purple-50 border-purple-200' },
    { name: 'Cognizant', color: 'text-blue-800 bg-blue-50 border-blue-200' },
    { name: 'TCS', color: 'text-rose-800 bg-rose-50 border-rose-200' },
    { name: 'Amazon', color: 'text-amber-800 bg-amber-50 border-amber-200' },
    { name: 'Google', color: 'text-teal-800 bg-teal-50 border-teal-200' },
    { name: 'Microsoft', color: 'text-indigo-800 bg-indigo-50 border-indigo-200' },
  ];

  return (
    <section className="py-12 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Stats */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-600 uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Trusted Worldwide</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Trusted by 1,15,000+ Salesforce Professionals
            </h3>

            <p className="text-xs text-slate-600">
              Developers, Admins & Architects who cracked interviews at global tech leaders and Top Consulting Firms.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-soft">
                <span className="font-heading font-extrabold text-xl text-brand-600">1,500+</span>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Questions</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-soft">
                <span className="font-heading font-extrabold text-xl text-emerald-600">7</span>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Free Courses</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-soft">
                <span className="font-heading font-extrabold text-xl text-amber-600">2,244</span>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">MCQs</p>
              </div>
            </div>
          </div>

          {/* Right Companies Grid */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-card">
            <p className="text-xs font-mono font-semibold text-slate-500 mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <Building2 className="w-3.5 h-3.5 text-brand-600" />
              <span>Our Readers & Alumni Work At:</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {companies.map((c) => (
                <div
                  key={c.name}
                  className={`p-3 rounded-xl border flex items-center justify-center text-center font-heading font-bold text-xs tracking-wide shadow-soft ${c.color}`}
                >
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
