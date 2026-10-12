'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Sparkles, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export const WhatsAppCTA: React.FC = () => {
  const [phone, setPhone] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    showToast('🎉 You are subscribed! ₹100 Off coupon code sent to your WhatsApp.', 'success');
    setPhone('');
  };

  return (
    <section className="py-12 bg-navy text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 backdrop-blur-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Parent VIP Circle</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Get <span className="text-accent">₹100 OFF</span> Your First Order
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Subscribe for secret seasonal flash sales, festive launch drops, and instant sizing guidance directly on WhatsApp.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <Input
              type="tel"
              placeholder="Enter your 10-digit WhatsApp number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/90 text-navy border-none font-medium placeholder:text-slate"
              required
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto shrink-0 bg-accent text-navy hover:bg-amber-400 font-bold"
            >
              Get Discount Code
            </Button>
          </form>

          <p className="text-[10px] text-slate-400">
            No spam guaranteed. Unsubscribe anytime with 1 click.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Quick Support Icon at bottom right */}
      <a
        href="https://wa.me/919876543210?text=Hi%20LittleThreads,%20I%20want%20to%20know%20more%20about%20your%20kidswear!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
        aria-label="Contact WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp Us
        </span>
      </a>
    </section>
  );
};
