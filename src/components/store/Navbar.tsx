'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, User, Sparkles } from 'lucide-react';
import { MobileNav } from './MobileNav';

export interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 2,
  onOpenCart,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Girls', href: '/girls' },
    { name: 'Boys', href: '/boys' },
    { name: 'Baby (0-2Y)', href: '/baby' },
    { name: 'Party Wear', href: '/party-wear' },
    { name: 'Ethnic Wear', href: '/ethnic-wear' },
    { name: 'Sale 🔥', href: '/sale', highlight: true },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 text-navy hover:bg-cream rounded-full transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-navy">
                  LittleThreads<span className="text-primary">.in</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate -mt-1 hidden sm:block">
                  Pure Cotton • Kids Fashion
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    link.highlight
                      ? 'text-discount font-bold hover:text-red-700'
                      : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons: Search, Wishlist, Account, Cart */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search Toggle */}
              <div className="relative">
                {isSearchOpen ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (searchQuery.trim()) {
                        window.location.href = `/shop?query=${encodeURIComponent(
                          searchQuery
                        )}`;
                      }
                    }}
                    className="flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Search dresses, kurtas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-44 sm:w-60 text-xs sm:text-sm pl-3 pr-8 py-1.5 rounded-full border border-primary bg-cream focus:outline-none focus:ring-2 focus:ring-primary/20"
                      autoFocus
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    />
                    <button
                      type="submit"
                      className="absolute right-2 text-primary hover:text-primary-dark"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-navy hover:text-primary hover:bg-cream rounded-full transition-colors"
                    aria-label="Search products"
                  >
                    <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="hidden sm:flex p-2 text-navy hover:text-primary hover:bg-cream rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>

              {/* Account (Optional for guest MVP) */}
              <Link
                href="/admin"
                className="p-2 text-navy hover:text-primary hover:bg-cream rounded-full transition-colors hidden sm:flex"
                title="Admin Portal"
                aria-label="Admin Portal"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>

              {/* Cart Counter Trigger */}
              <button
                onClick={onOpenCart}
                className="p-2 text-navy hover:text-primary hover:bg-cream rounded-full transition-colors relative flex items-center gap-1 bg-cream/70"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-discount text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
