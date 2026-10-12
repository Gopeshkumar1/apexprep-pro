'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, PackageCheck, Truck, Clock, MessageCircle, Home, ShieldCheck } from 'lucide-react';

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = (params?.id as string) || 'KDS-2026-00104';

  const orderTimeline = [
    { label: 'Order Confirmed', time: 'Just now', done: true, icon: CheckCircle2 },
    { label: 'Packed at Hub', time: 'Est. tomorrow morning', done: false, icon: PackageCheck },
    { label: 'Out for Delivery', time: 'Est. 2-3 business days', done: false, icon: Truck },
    { label: 'Delivered', time: 'Doorstep Delivery', done: false, icon: Clock },
  ];

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Payment Verified & Confirmed
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
            Thank You For Your Order! 🎉
          </h1>
          <p className="text-sm text-slate">
            Order Reference: <strong className="text-primary font-mono font-bold text-base">{orderId}</strong>
          </p>
          <p className="text-xs text-slate max-w-md mx-auto">
            We have sent order updates via SMS to your registered mobile number. Your pure cotton garments are being packed with love!
          </p>
        </div>
      </div>

      <div className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          
          {/* Order Status Tracking Timeline */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
            <h3 className="font-heading font-bold text-base text-navy pb-3 border-b border-gray-100">
              Live Order Tracker
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {orderTimeline.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className={`p-4 rounded-2xl border ${
                      step.done
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-gray-50 border-gray-100 text-slate'
                    } space-y-2`}
                  >
                    <Icon className={`w-6 h-6 mx-auto ${step.done ? 'text-emerald-600' : 'text-slate/40'}`} />
                    <h4 className="font-bold text-xs">{step.label}</h4>
                    <p className="text-[10px] opacity-80">{step.time}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customer Receipt Summary */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
            <h3 className="font-heading font-bold text-base text-navy pb-3 border-b border-gray-100">
              Delivery Receipt
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate">
              <div>
                <p className="font-bold text-navy uppercase text-[10px] tracking-wider">Delivery Address</p>
                <p className="font-semibold text-navy mt-1">Priya Sharma</p>
                <p>Flat 302, Green Acres Apartment, Indiranagar</p>
                <p>Bengaluru, Karnataka - 560038</p>
                <p>Mobile: +91 98765 43210</p>
              </div>

              <div>
                <p className="font-bold text-navy uppercase text-[10px] tracking-wider">Payment Summary</p>
                <p className="mt-1">Method: <strong className="text-navy">UPI Payment</strong></p>
                <p>Total Paid: <strong className="text-primary font-bold text-sm">₹1,498</strong></p>
                <p className="text-emerald-700 font-bold text-[11px] mt-1">Status: SUCCESS</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full font-bold">
                <Home className="w-4 h-4 mr-1" /> Continue Shopping
              </Button>
            </Link>
            <a
              href={`https://wa.me/919876543210?text=Hi%20LittleThreads,%20I%20have%20a%20question%20regarding%20Order%20${orderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="primary" className="w-full font-bold bg-emerald-600 hover:bg-emerald-700">
                <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp Support for Order
              </Button>
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
