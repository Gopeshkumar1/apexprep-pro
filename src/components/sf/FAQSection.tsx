'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Which course should I start with?',
      a: 'If you are starting your Salesforce journey or preparing for Admin certs, start with "Salesforce Admin Zero to Hero". If you already know Apex or have web dev experience, jump straight into "LWC Zero to Hero". If you are looking at 2026/2027 enterprise demands, dive into "Salesforce Agentforce & AI" and "Data Cloud".',
    },
    {
      q: 'Is this platform really 100% free?',
      a: 'Yes, 100% free! Every interview question, code snippet, and structured course is accessible with zero paywalls, zero subscription tiers, and zero forced sign-ups.',
    },
    {
      q: 'How often are questions updated?',
      a: 'We update the question bank weekly based on real feedback from candidates interviewing at Deloitte, Accenture, Salesforce, and Cognizant, as well as every major Salesforce release (Summer & Winter).',
    },
    {
      q: 'Can I download the questions and code offline?',
      a: 'Yes! You can copy any code snippet directly to your clipboard, and you can download our curated "Top 100 Scenario Questions & Code Guide" PDF for offline practice.',
    },
    {
      q: 'How does the Practice Zone MCQs work?',
      a: 'Practice Zone contains 2,244 multiple-choice questions organized across 27 topics. You can practice with instant feedback, time tracking, and deep architectural explanations.',
    },
    {
      q: 'Who runs ApexPrep Pro?',
      a: 'Built and maintained by working senior Salesforce developers and architects who actively interview candidates for MNCs and product companies.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
            ❓ Frequently Asked Questions
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Everything you need to know about ApexPrep Pro
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-surface-canvas border border-slate-200 overflow-hidden transition-colors shadow-soft"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/80 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
