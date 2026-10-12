import React from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { Sparkles, Heart, Feather, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Our Mission & Fabric Promise
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy">
            Crafting Soft Smiles for Growing Kids
          </h1>
          <p className="text-sm sm:text-base text-slate leading-relaxed">
            LittleThreads India was born out of a simple struggle familiar to every Indian parent: finding boutique-quality, 100% breathable cotton clothing at honest prices (₹499 – ₹1,499).
          </p>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy">Tagless Comfort</h3>
              <p className="text-xs text-slate">No scratchy neck tags or harsh synthetic threads touching sensitive kid skin.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy">100% Organic Cotton</h3>
              <p className="text-xs text-slate">Pre-washed airflow weaves that stay soft and non-fading even after 50+ washes.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy">Honest Pricing</h3>
              <p className="text-xs text-slate">Direct-to-parent pricing without 3X middleman boutique markups.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
