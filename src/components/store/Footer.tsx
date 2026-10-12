import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                LittleThreads<span className="text-primary">.in</span>
              </span>
            </Link>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              India's trusted destination for boutique-quality 100% breathable cotton clothing for kids aged 0 to 8 years. Honest prices, tagless comfort, fast pan-India delivery.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>📍 Managed from: Bengaluru, Karnataka, India</p>
              <p>✉️ Support: care@littlethreads.in | 📞 WhatsApp: +91 98765 43210</p>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-accent uppercase tracking-wider">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/girls" className="hover:text-white transition-colors">
                  Girls Collection
                </Link>
              </li>
              <li>
                <Link href="/boys" className="hover:text-white transition-colors">
                  Boys Collection
                </Link>
              </li>
              <li>
                <Link href="/baby" className="hover:text-white transition-colors">
                  Baby Wear (0-2 Yrs)
                </Link>
              </li>
              <li>
                <Link href="/party-wear" className="hover:text-white transition-colors">
                  Birthday Party Dresses
                </Link>
              </li>
              <li>
                <Link href="/ethnic-wear" className="hover:text-white transition-colors">
                  Ethnic Festive Wear
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-discount font-bold hover:text-red-400 transition-colors">
                  Special Clearance Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-accent uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/tracking" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Size Guide & FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Shipping Rates & Delivery
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-white transition-colors">
                  7-Day Return Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-accent uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Fabric Quality
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors text-slate-400">
                  Store Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} LittleThreads India. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold text-slate-500">
              100% Secure Payments via Razorpay:
            </span>
            <div className="flex items-center gap-2 font-bold text-slate-300 text-[11px]">
              <span className="px-2 py-0.5 bg-white/10 rounded">UPI (GPay / PhonePe)</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">Cards</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">Net Banking</span>
              <span className="px-2 py-0.5 bg-emerald-900/60 text-emerald-300 rounded">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
