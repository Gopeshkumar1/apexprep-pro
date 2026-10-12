import React from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl text-navy">
            Privacy Policy 🔒
          </h1>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-4 text-xs text-slate leading-relaxed">
          <h3 className="font-heading font-bold text-base text-navy">Data Privacy & Security</h3>
          <p>LittleThreads India respects your privacy. We collect customer names, phone numbers, and delivery addresses solely for order fulfillment and SMS dispatch tracking.</p>
          <p>We do not store payment card numbers or UPI PINs. All financial transactions are processed through 256-bit encrypted Razorpay PCI-DSS compliant infrastructure.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
