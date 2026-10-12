'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MessageCircle, Mail, MapPin, PhoneCall } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' });
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent! Our support team will WhatsApp/call you back shortly.', 'success');
    setFormData({ name: '', phone: '', query: '' });
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
            Contact & WhatsApp Support 💬
          </h1>
          <p className="text-xs sm:text-sm text-slate">We are always here to help you pick the perfect fit for your child</p>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-6">
            <h3 className="font-heading font-bold text-lg text-navy">Direct Support Channels</h3>
            
            <div className="space-y-4 text-xs text-navy">
              <div className="flex items-center gap-3 p-3 bg-emerald-50 text-emerald-800 rounded-2xl">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold">WhatsApp Sizing Expert</p>
                  <p className="text-[11px]">+91 98765 43210 (Instant reply 9 AM - 9 PM)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-cream rounded-2xl">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-bold">Email Support</p>
                  <p className="text-[11px] text-slate">care@littlethreads.in</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-cream rounded-2xl">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p className="font-bold">Dispatch Hub</p>
                  <p className="text-[11px] text-slate">Indiranagar, Bengaluru, Karnataka - 560038</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
            <h3 className="font-heading font-bold text-lg text-navy">Send Us a Message</h3>
            
            <Input
              label="Your Name"
              required
              placeholder="e.g. Priya"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              label="WhatsApp Mobile Number"
              required
              placeholder="10-digit mobile"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                Your Query or Order ID
              </label>
              <textarea
                required
                rows={4}
                placeholder="How can we help you?"
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>

            <Button type="submit" fullWidth className="font-bold">
              Submit Query
            </Button>
          </form>

        </div>
      </div>

      <Footer />
    </main>
  );
}
