'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  ChevronDown,
  BookOpen,
  Calendar,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface NavbarProps {
  onOpenBooking?: () => void;
  onOpenMCQ?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMCQ }) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isPrepOpen, setIsPrepOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courseItems = [
    { name: 'Admin Zero to Hero', tag: '25 Modules', icon: '🛡️', href: '#courses' },
    { name: 'LWC Zero to Hero', tag: '15 Modules', icon: '💻', href: '#courses' },
    { name: 'Agentforce & AI (2026)', tag: 'Hot', icon: '🤖', href: '#courses' },
    { name: 'Salesforce Data Cloud', tag: '15 Modules', icon: '☁️', href: '#courses' },
    { name: 'Headless 360 (Claude + MCP)', tag: 'New', icon: '🧠', href: '#courses' },
    { name: 'Business Analyst (BA)', tag: '15 Modules', icon: '📋', href: '#courses' },
    { name: 'Salesforce DevOps & CI/CD', tag: 'In Progress', icon: '⚙️', href: '#courses' },
  ];

  const prepItems = [
    { name: '31 Most Asked Questions (Ranked)', badge: 'Must Read', href: '#topics' },
    { name: '100 Real-Time Scenarios', badge: 'Popular', href: '#topics' },
    { name: 'Apex Triggers & Handlers', badge: 'Core', href: '#topics' },
    { name: 'LWC Architecture & Hooks', badge: 'Core', href: '#topics' },
    { name: 'Company-Wise (Deloitte, TCS, Amazon)', badge: 'MNC', href: '#topics' },
    { name: 'Agentforce & Generative AI Actions', badge: '2026', href: '#topics' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-sky-400 flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 flex items-center gap-1">
                ApexPrep <span className="text-brand-600">Pro</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 hidden sm:block -mt-1 font-mono">
                Salesforce Career & Interview Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-600 transition-colors py-2">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-surface-border rounded-2xl shadow-lift p-3 space-y-1 animate-fade-in z-50">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1 font-mono">
                    7 Free Structured Paths
                  </div>
                  {courseItems.map((c) => (
                    <a
                      key={c.name}
                      href={c.href}
                      onClick={() => setIsCoursesOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{c.icon}</span>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        {c.tag}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Interview Prep Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPrepOpen(true)}
              onMouseLeave={() => setIsPrepOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-600 transition-colors py-2">
                <span>Interview Prep</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {isPrepOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-surface-border rounded-2xl shadow-lift p-3 space-y-1 animate-fade-in z-50">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1 font-mono">
                    1,500+ Curated Guides
                  </div>
                  {prepItems.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      onClick={() => setIsPrepOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                        {p.badge}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Practice Zone (MCQs) */}
            <button
              onClick={onOpenMCQ}
              className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 text-emerald-600 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practice Zone</span>
            </button>

            <a href="#mock-interviews" className="hover:text-brand-600 transition-colors">
              Mock Interview
            </a>

            <a href="#sessions" className="hover:text-brand-600 transition-colors">
              1:1 Sessions
            </a>

            <a href="#advertise" className="hover:text-slate-800 transition-colors text-slate-400 text-xs">
              Advertise
            </a>
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={onOpenBooking}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-soft hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle mobile navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border p-5 space-y-4 animate-fade-in text-sm font-medium">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="#courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 bg-surface-muted rounded-xl border border-surface-border flex items-center gap-2 text-slate-800"
            >
              <span>🎓</span> Free Courses
            </a>
            <a
              href="#topics"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 bg-surface-muted rounded-xl border border-surface-border flex items-center gap-2 text-slate-800"
            >
              <span>📝</span> 1,500+ Q&As
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMCQ?.();
              }}
              className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-emerald-700 text-left"
            >
              <span>🔥</span> 2,244 MCQs
            </button>
            <a
              href="#mock-interviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 bg-surface-muted rounded-xl border border-surface-border flex items-center gap-2 text-slate-800"
            >
              <span>🤝</span> Mock Interviews
            </a>
          </div>

          <Button
            size="md"
            fullWidth
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking?.();
            }}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold"
          >
            Book a 1:1 Mock Session →
          </Button>
        </div>
      )}
    </header>
  );
};
