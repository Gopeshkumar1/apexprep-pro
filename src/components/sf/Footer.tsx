import React from 'react';
import Link from 'next/link';
import { Zap, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-heading font-black text-xl text-white">
                ApexPrep <span className="text-brand-500">Pro</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Free Salesforce interview prep, structured zero-to-hero courses, and practice quizzes. Built by working Salesforce developers — no paywalls, no signup required.
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              © 2026 ApexPrep Pro · Independent community platform for Salesforce professionals worldwide.
            </p>
          </div>

          {/* Courses */}
          <div className="space-y-3 font-mono">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Headless 360</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Agentforce & AI</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Data Cloud</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">LWC Zero to Hero</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Business Analyst</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Salesforce DevOps</a></li>
            </ul>
          </div>

          {/* Interview Prep */}
          <div className="space-y-3 font-mono">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Interview Prep
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">LWC Questions</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Apex & Triggers</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">SOQL & Indexes</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Integration & REST</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Company-Wise Tracks</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Practice Zone MCQs</a></li>
            </ul>
          </div>

          {/* Popular Searches & Site */}
          <div className="space-y-3 font-mono">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Site & Community
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Governor Limits</a></li>
              <li><a href="#topics" className="hover:text-brand-500 transition-colors">Record Sharing & OWD</a></li>
              <li><a href="#sessions" className="hover:text-brand-500 transition-colors">1:1 Mock Interviews</a></li>
              <li><a href="#advertise" className="hover:text-brand-500 transition-colors">Advertise With Us</a></li>
              <li><Link href="/privacy-policy" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>
            Crafted for Salesforce developers aiming for high packages at product companies and tier-1 MNCs.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
