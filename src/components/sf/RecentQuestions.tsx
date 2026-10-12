import React from 'react';
import { ArrowRight } from 'lucide-react';

export const RecentQuestions: React.FC<{ onOpenQuestion: () => void }> = ({
  onOpenQuestion,
}) => {
  const recentItems = [
    {
      title: 'Salesforce Admin Zero to Hero - Module 25: Capstone Project',
      tag: 'New',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      category: 'Admin',
    },
    {
      title: 'Salesforce Admin Zero to Hero - Module 24: Advanced Security',
      tag: 'Updated',
      badgeColor: 'bg-brand-50 text-brand-700 border-brand-200',
      category: 'Security',
    },
    {
      title: 'Salesforce Admin Zero to Hero - Module 23: Change Management & Deployment',
      tag: 'Live',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      category: 'DevOps',
    },
    {
      title: 'Salesforce Admin Zero to Hero - Module 22: Lightning Experience & Mobile',
      tag: 'Live',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      category: 'Platform',
    },
  ];

  return (
    <section className="py-16 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
              Fresh From LinkedIn & MNC Drives
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-1">
              Recently Added Interview Questions & Scenarios
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 font-medium">
            Curated daily from real Deloitte, Accenture, TCS & Cognizant candidate documents
          </span>
        </div>

        <div className="space-y-3">
          {recentItems.map((item) => (
            <div
              key={item.title}
              onClick={onOpenQuestion}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 cursor-pointer flex items-center justify-between gap-4 transition-all hover:bg-brand-50/20 group shadow-soft"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-brand-700 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  Q
                </span>
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${item.badgeColor}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-800 group-hover:text-brand-600 transition-colors truncate">
                    {item.title} | ApexPrep Pro
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-mono font-bold text-brand-600 shrink-0 group-hover:translate-x-1 transition-transform">
                <span className="hidden sm:inline">Read Full Answer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
