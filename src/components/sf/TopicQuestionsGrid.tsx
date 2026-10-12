'use client';

import React, { useState } from 'react';
import { SF_TOPICS, Topic } from '@/lib/sf-data';
import { Sparkles, ArrowRight } from 'lucide-react';

export interface TopicQuestionsGridProps {
  onSelectTopic: (topic: Topic) => void;
  selectedCategory?: string;
}

export const TopicQuestionsGrid: React.FC<TopicQuestionsGridProps> = ({
  onSelectTopic,
  selectedCategory: initialCategory = 'All',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const categories = [
    'All',
    'Developer',
    'Admin',
    'AI & Agentforce',
    'Architecture',
    'Clouds',
    'Company Wise',
  ];

  const filteredTopics = SF_TOPICS.filter((t) => {
    if (activeCategory === 'All') return true;
    return t.category === activeCategory;
  });

  return (
    <section id="topics" className="py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
            📝 1,500+ Curated Interview Guides
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Interview Questions by Topic
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Filter by domain or pick any topic to jump directly into deep architectural Q&A, code snippets, and one-liners.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-soft border border-brand-600'
                  : 'bg-surface-canvas text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 32 Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="p-5 rounded-2xl bg-surface-canvas border border-slate-200/90 hover:border-brand-300 cursor-pointer flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-all group shadow-card"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{topic.icon}</span>
                  {topic.badge && (
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {topic.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {topic.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{topic.count}</span>
                <span className="text-brand-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Start Now →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
