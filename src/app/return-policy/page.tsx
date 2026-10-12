import React from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl text-navy">
            7-Day Easy Return & Exchange Policy 🔄
          </h1>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-4 text-xs text-slate leading-relaxed">
          <h3 className="font-heading font-bold text-base text-navy">1. 7-Day Hassle-Free Window</h3>
          <p>We accept returns & size exchanges within 7 days from the date of order delivery.</p>

          <h3 className="font-heading font-bold text-base text-navy">2. Condition for Return</h3>
          <p>Garments must be unworn, unwashed, and in their original packaging with intact brand tags.</p>

          <h3 className="font-heading font-bold text-base text-navy">3. Doorstep Reverse Pickup</h3>
          <p>Once you initiate a return via WhatsApp (+91 98765 43210), our logistics partner will collect the parcel from your doorstep.</p>

          <h3 className="font-heading font-bold text-base text-navy">4. Instant Refund</h3>
          <p>Refunds are initiated directly to your original UPI account or Bank account within 24 hours of quality inspection.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
