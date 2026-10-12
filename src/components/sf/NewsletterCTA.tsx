'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('🎉 Subscribed! We sent the "Top 100 Scenario Questions PDF" to your inbox.', 'success');
    setEmail('');
  };

  return (
    <section className="py-16 bg-white border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-bold">
          <Mail className="w-3.5 h-3.5" />
          <span>Weekly Newsletter & Question Drops</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
          Get New Interview Questions Delivered Weekly
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          Fresh real-time scenarios asked at Deloitte, Accenture & Google, plus release notes updates. No spam, 1-click unsubscribe.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your work or personal email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-surface-canvas border border-slate-300 text-slate-900 text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            required
          />
          <Button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-soft"
          >
            Subscribe Free
          </Button>
        </form>

        <p className="text-[11px] font-mono text-slate-400">
          🔒 Join 35,000+ Salesforce developers receiving weekly architectural breakdowns.
        </p>
      </div>
    </section>
  );
};
