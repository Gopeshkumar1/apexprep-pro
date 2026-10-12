'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { ProductGrid } from '@/components/store/ProductGrid';
import { CartDrawer } from '@/components/store/CartDrawer';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/Toast';

export default function PartyWearPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; size: string; quantity: number }>
  >([]);

  const { showToast } = useToast();

  const partyProducts = MOCK_PRODUCTS.filter(
    (p) => p.categorySlug === 'party-wear' || p.title.toLowerCase().includes('party') || p.title.toLowerCase().includes('tulle')
  );

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => [...prev, { product, size, quantity: 1 }]);
    showToast(`Added ${product.title} (${size}) to bag! 🛍️`, 'success');
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
            Special Occasion Magic
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-1">
            Birthday & Party Wear Collection
          </h1>
          <p className="text-xs sm:text-sm text-slate max-w-lg mx-auto mt-2">
            Sparkling birthday dresses, tux-style sets, and soft tulle gowns lined with 100% breathable cotton.
          </p>
        </div>
      </div>

      <div className="flex-1 py-8">
        <ProductGrid products={partyProducts} onAddToCart={handleAddToCart} />
      </div>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    </main>
  );
}
