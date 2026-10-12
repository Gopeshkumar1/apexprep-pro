'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>New Festive & Daily Collection (0–8 Yrs)</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.15]">
              Pure Soft Cotton.{' '}
              <span className="text-primary underline decoration-accent decoration-wavy decoration-2">
                Pure Joy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Boutique-quality, skin-safe clothing for Indian kids aged 0 to 8 years. Designed for sensitive skin, double-stitched for active play, delivered at honest prices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/girls" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto font-bold shadow-float">
                  Shop Girls (0–8Y) <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link href="/boys" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto font-bold shadow-sm"
                >
                  Shop Boys (0–8Y)
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200/80 text-center lg:text-left">
              <div>
                <p className="font-heading font-extrabold text-navy text-lg sm:text-xl">100%</p>
                <p className="text-xs text-slate">Breathable Cotton</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-navy text-lg sm:text-xl">₹499+</p>
                <p className="text-xs text-slate">Affordable Pricing</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-navy text-lg sm:text-xl">7 Days</p>
                <p className="text-xs text-slate">Hassle-Free Returns</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Circle Backdrops */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

              {/* Card Stack */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy Indian Girl in Soft Cotton Festive Dress"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-float border border-white/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Parent Favorite
                    </span>
                    <h4 className="text-sm font-bold text-navy font-heading">
                      Pastel Floral Cotton Dress
                    </h4>
                    <p className="text-xs font-extrabold text-navy">₹699 <span className="text-slate line-through text-[10px]">₹1,299</span></p>
                  </div>
                  <Link href="/girls">
                    <span className="p-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-dark transition-colors inline-block">
                      View
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
