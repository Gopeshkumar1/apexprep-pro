'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Question } from '@/lib/sf-data';
import { Check, Copy, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export interface QuestionDetailModalProps {
  question: Question | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
  question,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  if (!question) return null;

  const handleCopy = () => {
    if (question.codeSnippet) {
      navigator.clipboard.writeText(question.codeSnippet.code);
      setCopied(true);
      showToast('Apex / JS Code copied to clipboard! 📋', 'success');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${question.topicName} • Interview Guide`}
      className="max-w-3xl bg-white text-slate-900"
    >
      <div className="space-y-6">
        
        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2 pb-1">
          <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
            {question.level}
          </span>
          {question.company && (
            <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 flex items-center gap-1">
              <Building2 className="w-3 h-3 text-amber-600" /> Asked at: {question.company}
            </span>
          )}
        </div>

        {/* Question Title */}
        <h2 className="font-heading font-black text-lg sm:text-xl text-slate-900 leading-snug">
          {question.question}
        </h2>

        {/* One Liner Quick Answer Box */}
        <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-1.5 shadow-soft">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-800 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>The 30-Second Interview One-Liner Answer</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-sans">
            "{question.oneLiner}"
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-1.5">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
            Deep Architectural Explanation
          </h4>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-sans bg-surface-canvas p-4 rounded-2xl border border-slate-200">
            {question.answer}
          </div>
        </div>

        {/* Code Snippet Box (VS Code Dark Slate) */}
        {question.codeSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="font-semibold">Production Code Pattern ({question.codeSnippet.language})</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-4 shadow-card">
              <pre className="text-xs text-sky-200 font-mono overflow-x-auto leading-relaxed">
                <code>{question.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Key Takeaways */}
        {question.keyTakeaways.length > 0 && (
          <div className="space-y-2 pt-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
              Key Interview Takeaways
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {question.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </Modal>
  );
};
