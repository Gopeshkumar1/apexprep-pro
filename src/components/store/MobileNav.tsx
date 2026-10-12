'use client';

import React from 'react';
import Link from 'next/link';
import { Drawer } from '@/components/ui/Drawer';
import { Sparkles, PhoneCall, ShieldCheck, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const categories = [
    { name: '🔥 All Products', href: '/shop', desc: 'Browse complete catalog' },
    { name: '👗 Girls Fashion', href: '/girls', desc: 'Dresses, Tops & Sets (0-8Y)' },
    { name: '👕 Boys Fashion', href: '/boys', desc: 'Shirts, Shorts & Sets (0-8Y)' },
    { name: '👶 Baby Care & Wear', href: '/baby', desc: 'Onesies, Rompers & Bodysuits' },
    { name: '✨ Party Wear', href: '/party-wear', desc: 'Birthday & Special Occasions' },
    { name: '🪔 Ethnic Wear', href: '/ethnic-wear', desc: 'Festive Kurtas & Lehengas' },
    { name: '💥 Special Sale', href: '/sale', desc: 'Up to 50% OFF' },
  ];

  const quickInfo = [
    { name: 'About Brand', href: '/about' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: 'Shipping Rates', href: '/shipping-policy' },
    { name: 'FAQ & Sizing', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="left">
      <div className="flex flex-col h-full space-y-6">
        {/* Header Branding */}
        <div className="flex items-center gap-3 p-3 bg-primary-light rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-navy">LittleThreads India</h4>
            <p className="text-xs text-slate">100% Breathable Soft Cotton</p>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate px-2">
            Categories
          </p>
          <div className="space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-cream transition-colors group"
              >
                <div>
                  <span className="text-sm font-bold text-navy group-hover:text-primary transition-colors">
                    {cat.name}
                  </span>
                  <p className="text-[11px] text-slate">{cat.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Quick Customer Links */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate px-2">
            Help & Info
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-navy">
            {quickInfo.map((info) => (
              <Link
                key={info.href}
                href={info.href}
                onClick={onClose}
                className="p-2.5 rounded-lg bg-gray-50 hover:bg-primary-light hover:text-primary transition-colors"
              >
                {info.name}
              </Link>
            ))}
          </div>
        </div>

        {/* WhatsApp direct customer support banner */}
        <div className="mt-auto pt-4">
          <a
            href="https://wa.me/919876543210?text=Hi%20LittleThreads,%20I%20have%20a%20question%20about%20kid%20sizing!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-emerald-600 text-white font-bold rounded-2xl text-xs hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Chat with Sizing Expert on WhatsApp
          </a>
        </div>
      </div>
    </Drawer>
  );
};
