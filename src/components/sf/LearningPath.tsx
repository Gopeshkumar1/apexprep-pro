import React from 'react';
import { ArrowRight } from 'lucide-react';

export const LearningPath: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Start as a Fresher',
      desc: 'Core concepts, data models, standard objects — no prior experience needed.',
      tag: 'Step 1',
      color: 'border-emerald-200 text-emerald-700 bg-emerald-50',
    },
    {
      step: '2',
      title: 'Pick a Free Course',
      desc: 'Dev, Admin, BA, Data Cloud, Agentforce or DevOps with continuous project code.',
      tag: 'Step 2',
      color: 'border-sky-200 text-brand-700 bg-brand-50',
    },
    {
      step: '3',
      title: 'Practice with MCQs',
      desc: '2,244 questions across 27 quizzes with timer mode & deep explanations.',
      tag: 'Step 3',
      color: 'border-amber-200 text-amber-800 bg-amber-50',
    },
    {
      step: '4',
      title: 'Go Deep on Interviews',
      desc: '1,500+ Q&A, company-specific tracks (Deloitte, Accenture, TCS, Amazon).',
      tag: 'Step 4',
      color: 'border-purple-200 text-purple-700 bg-purple-50',
    },
    {
      step: '5',
      title: 'Mock Interview',
      desc: 'Practice live with peer developers and get constructive honest feedback.',
      tag: 'Step 5',
      color: 'border-rose-200 text-rose-700 bg-rose-50',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
            🗺️ Your Proven Roadmap
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            A simple road from your first question to a signed offer letter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-surface-canvas border border-slate-200/90 flex flex-col justify-between space-y-4 hover:border-brand-300 hover:shadow-card transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center font-heading font-extrabold text-sm ${s.color}`}
                  >
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-sans">{s.desc}</p>
              </div>

              <div className="pt-2 flex items-center text-xs font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
                <span>Start</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
