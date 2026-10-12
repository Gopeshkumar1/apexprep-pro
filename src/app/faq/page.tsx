import React from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';

export default function FAQPage() {
  const faqs = [
    {
      q: 'How do I choose the correct size for my child?',
      a: 'We provide age-recommendation tags (0-12M, 1-2Y, 2-4Y, 4-6Y, 6-8Y) calibrated to standard Indian body measurements. If your child is between sizes or tall, pick 1 size higher.',
    },
    {
      q: 'Are your fabrics safe for newborn & sensitive skin?',
      a: 'Yes! 100% of our fabrics are pure breathable cotton with zero harsh synthetic dyes. All neck labels are tagless to avoid scratchiness.',
    },
    {
      q: 'What is your return & exchange policy?',
      a: 'We offer a 7-day hassle-free return policy from delivery date. If the size does not fit, we arrange doorstep pickup and send the replacement size or refund.',
    },
    {
      q: 'How long does delivery take across India?',
      a: 'We dispatch all orders within 24 hours. Metros receive delivery in 2–3 days; Tier 2/3 cities take 3–5 business days.',
    },
    {
      q: 'Do you offer Cash on Delivery (COD)?',
      a: 'Yes, Cash on Delivery is available across 25,000+ Indian pincodes.',
    },
  ];

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
            Frequently Asked Questions ❓
          </h1>
          <p className="text-xs text-slate mt-1">Everything you need to know about sizing, fabric & delivery</p>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-2">
              <h3 className="font-heading font-bold text-base text-navy">{faq.q}</h3>
              <p className="text-xs text-slate leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
