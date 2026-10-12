import React from 'react';
import { BookOpen, CheckSquare, GraduationCap, Building, Users, RefreshCw } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: '1,500+ Questions',
      subtitle: 'Interview Questions and Answers',
      desc: 'Topic-wise Q&A with deep explanations, code snippets, and interview-ready one-liners across 25+ topics.',
      icon: BookOpen,
      color: 'text-brand-600 bg-brand-50 border-brand-200',
    },
    {
      title: '2,244 MCQs',
      subtitle: 'Practice Zone',
      desc: '27 quizzes covering every topic. 5 free, 22 premium with progress tracking and timed mode.',
      icon: CheckSquare,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      title: '7 Courses',
      subtitle: 'Structured Free Courses',
      desc: 'Admin, Agentforce, Data Cloud, LWC, BA, DevOps and Headless 360 — zero to hero, module by module, 100% free.',
      icon: GraduationCap,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: 'Company Wise',
      subtitle: 'Company & Product Prep',
      desc: 'Interview questions specific to TCS, Cognizant, Accenture, Deloitte, Amazon, Google, and Microsoft.',
      icon: Building,
      color: 'text-amber-800 bg-amber-50 border-amber-200',
    },
    {
      title: 'Community',
      subtitle: 'Mock Interview Community',
      desc: 'Practice with peers, get real feedback, and build interview confidence before the real thing.',
      icon: Users,
      color: 'text-rose-700 bg-rose-50 border-rose-200',
    },
    {
      title: 'Updated Regularly',
      subtitle: 'Latest Release Notes',
      desc: "Summer '26 and Winter '27 breakdowns so your prep stays aligned with the current platform.",
      icon: RefreshCw,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
    },
  ];

  return (
    <section className="py-20 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
            ⚡ Platform Features
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            One platform. Every edge you need.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From your first question to a signed offer letter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all shadow-card group"
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${f.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {f.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-600 mt-0.5 font-semibold">
                      {f.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                  Explore →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
