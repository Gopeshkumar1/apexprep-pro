import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Aditya K.',
      role: 'Salesforce Admin @ MNC',
      text: 'No signup, no paywall. The Apex Trigger recursion series alone got me through two technical rounds at Cognizant.',
    },
    {
      name: 'Riya M.',
      role: 'LWC Developer',
      text: 'LWC Zero to Hero is more practical than any paid course I found on Udemy. Tied directly to real bugs and async patterns.',
    },
    {
      name: 'Sneha N.',
      role: 'Salesforce Consultant @ Accenture',
      text: 'Company-wise Accenture interview prep was scarily accurate. The scenario questions on Flow vs Triggers came up directly.',
    },
    {
      name: 'Vikram R.',
      role: 'Data Cloud Consultant',
      text: 'Explains identity resolution and calculated insights better than official Trailhead documentation.',
    },
    {
      name: 'Mohit K.',
      role: 'Salesforce Developer @ Deloitte',
      text: 'Started preparing 3 weeks before notice period ended. Cracked two offers thanks to the 100 scenario questions.',
    },
    {
      name: 'Priya S.',
      role: 'Business Analyst',
      text: 'Practice Zone MCQs matched my actual interview difficulty almost exactly. Highly recommended for every SF professional.',
    },
  ];

  return (
    <section className="py-20 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
            ★★★★★ Real Candidate Feedback
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Loved by Developers Cracking Top Offers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-card hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {t.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">
                    {t.role}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified Offer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
