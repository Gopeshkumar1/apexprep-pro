'use client';

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface HeroSectionProps {
  onSearch: (query: string) => void;
  onSelectRole: (role: string) => void;
  onOpenMCQ: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onSelectRole,
  onOpenMCQ,
}) => {
  const [query, setQuery] = useState('');

  const starterChips = [
    { label: "I'm a Developer", icon: '👨💻', value: 'Developer' },
    { label: "I'm an Admin", icon: '🛡️', value: 'Admin' },
    { label: '1,500+ Questions', icon: '📝', value: 'Questions' },
    { label: 'AI & Agentforce', icon: '🤖', value: 'AI & Agentforce' },
    { label: 'Practice 2,244 MCQs', icon: '🔥', value: 'MCQ' },
    { label: 'Choose Your Cloud', icon: '☁️', value: 'Clouds' },
    { label: 'Free Courses', icon: '🌐', value: 'Courses' },
    { label: 'For Experienced (5+ Yrs)', icon: '🏆', value: 'Experienced' },
    { label: "I'm a Fresher (0-2 Yrs)", icon: '🌱', value: 'Fresher' },
    { label: '10-Day Project Sprint', icon: '🚀', value: 'Sprint' },
    { label: 'Crack Any Company', icon: '🎯', value: 'Company Wise' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-surface-border bg-gradient-to-b from-white via-surface-canvas to-surface-canvas">
      {/* Soft background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-brand-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider font-mono shadow-soft">
          <Zap className="w-3.5 h-3.5 fill-current text-brand-600" />
          <span>Daily Curated Salesforce Interview Documents & Guides</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-slate-900 leading-[1.15]">
            Master Salesforce.{' '}
            <span className="text-brand-600 underline decoration-sky-300 decoration-wavy decoration-2">
              Crack Interviews.
            </span>
          </h1>

          <p className="text-sm sm:text-base font-mono font-semibold text-slate-600">
            Daily LinkedIn Q&A • 7 Comprehensive Handbooks • 2,244 Practice MCQs
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Real questions compiled daily from LinkedIn & MNC drives (Deloitte, Accenture, TCS, Cognizant). Pure text cheat sheets, one-liner answers, and production code — no 20-hour video dragging.
          </p>
        </div>

        {/* Live Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-2xl mx-auto relative flex items-center group shadow-card rounded-2xl"
        >
          <div className="absolute left-4 text-slate-400 group-focus-within:text-brand-600 transition-colors pointer-events-none">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder='Search interview guides... e.g. "batch apex", "lwc lifecycle", "sharing rules"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100 transition-all"
          />
          <button
            type="submit"
            className="absolute right-2.5 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-all shadow-soft"
          >
            Search 🔍
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#topics">
            <Button
              size="md"
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-soft px-5 py-3"
            >
              Browse Interview Questions →
            </Button>
          </a>
          <Button
            size="md"
            variant="secondary"
            onClick={onOpenMCQ}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl px-5 py-3 shadow-soft"
          >
            <Flame className="w-4 h-4 mr-1 text-amber-200" />
            Practice 2,244 MCQs →
          </Button>
          <a href="#sessions">
            <Button
              size="md"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-white text-xs rounded-xl px-5 py-3"
            >
              Book 1:1 Session →
            </Button>
          </a>
        </div>

        {/* Role starter chips */}
        <div className="pt-10 border-t border-slate-200 max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-center gap-2 font-mono">
            <span>🎯</span> Where do you want to start?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {starterChips.map((chip) => (
              <button
                key={chip.label}
                onClick={() => {
                  if (chip.value === 'MCQ') {
                    onOpenMCQ();
                  } else {
                    onSelectRole(chip.value);
                  }
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-xs font-medium text-slate-700 hover:text-brand-700 transition-all shadow-soft hover:-translate-y-0.5"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
