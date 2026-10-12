import React from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl text-navy">
            Shipping & Delivery Policy 🚚
          </h1>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-4 text-xs text-slate leading-relaxed">
          <h3 className="font-heading font-bold text-base text-navy">1. Dispatch Timeline</h3>
          <p>All orders placed on LittleThreads India are dispatched from our Bengaluru warehouse within 24 business hours.</p>

          <h3 className="font-heading font-bold text-base text-navy">2. Shipping Charges</h3>
          <p><strong>FREE Shipping</strong> is applicable on all orders above ₹999. For orders under ₹999, a nominal flat express shipping fee of ₹70 is charged.</p>

          <h3 className="font-heading font-bold text-base text-navy">3. Delivery Timelines</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Metro Cities (Bengaluru, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata): 2–3 business days</li>
            <li>Rest of India: 3–5 business days</li>
          </ul>

          <h3 className="font-heading font-bold text-base text-navy">4. Order Tracking</h3>
          <p>Once dispatched, you will receive an automated SMS with courier tracking link (Bluedart, Delhivery, DTDC).</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
