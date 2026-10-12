'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { SF_MCQS, MCQ } from '@/lib/sf-data';
import { CheckCircle2, XCircle, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

export interface MCQQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MCQQuizModal: React.FC<MCQQuizModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentMCQ: MCQ = SF_MCQS[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentMCQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < SF_MCQS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🔥 Practice Zone • 2,244 Salesforce MCQs">
      <div className="space-y-6 text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-3 border-b border-slate-200">
          <span className="flex items-center gap-1.5 text-brand-600 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Topic: {currentMCQ.topic}
          </span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Score: {score} / {currentIndex + (isAnswered ? 1 : 0)}
          </span>
        </div>

        {/* Question */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
            Question {currentIndex + 1} of {SF_MCQS.length}
          </span>
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-relaxed">
            {currentMCQ.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentMCQ.options.map((opt, idx) => {
            let optionStyles = 'border-slate-200 bg-surface-canvas hover:border-brand-400 text-slate-800';
            if (isAnswered) {
              if (idx === currentMCQ.correctIndex) {
                optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-400';
              } else if (idx === selectedOption) {
                optionStyles = 'border-rose-400 bg-rose-50 text-rose-900 ring-1 ring-rose-300';
              } else {
                optionStyles = 'border-slate-200/50 opacity-40';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelect(idx)}
                className={`w-full p-4 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between shadow-soft ${optionStyles}`}
              >
                <span>{opt}</span>
                {isAnswered && idx === currentMCQ.correctIndex && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isAnswered && idx === selectedOption && idx !== currentMCQ.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 space-y-1.5 animate-fade-in text-xs font-mono">
            <span className="font-bold text-brand-800 uppercase tracking-wider block">
              💡 Architectural Explanation:
            </span>
            <p className="text-slate-700 leading-relaxed font-sans text-xs">
              {currentMCQ.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button
            onClick={handleReset}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-mono"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Restart Quiz
          </button>

          {isAnswered && (
            <Button
              size="sm"
              onClick={handleNext}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-soft"
            >
              {currentIndex < SF_MCQS.length - 1 ? (
                <>Next Question <ArrowRight className="w-3.5 h-3.5 ml-1" /></>
              ) : (
                <>Complete Quiz 🎉</>
              )}
            </Button>
          )}
        </div>

      </div>
    </Modal>
  );
};
