'use client';

import React, { useState, useMemo } from 'react';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { ProductGrid } from '@/components/store/ProductGrid';
import { FilterPanel, FilterState } from '@/components/store/FilterPanel';
import { CartDrawer } from '@/components/store/CartDrawer';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/Toast';
import { Sparkles, Search } from 'lucide-react';

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    ageGroup: 'all',
    gender: 'all',
    minPrice: '499',
    maxPrice: '2199',
    sortBy: 'popular',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; size: string; quantity: number }>
  >([]);

  const { showToast } = useToast();

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => {
      // Text search
      if (
        searchQuery &&
        !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      // Category filter
      if (filters.category !== 'all' && p.categorySlug !== filters.category) {
        return false;
      }
      // Age group filter
      if (filters.ageGroup !== 'all' && p.ageGroup !== filters.ageGroup) {
        return false;
      }
      // Price filter
      if (p.price > parseInt(filters.maxPrice || '2199', 10)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      return b.rating - a.rating; // default popular
    });
  }, [filters, searchQuery]);

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    showToast(`Added ${product.title} (${size}) to bag! 🛍️`, 'success');
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as Array<{
        product: Product;
        size: string;
        quantity: number;
      }>
    );
  };

  const handleRemoveItem = (id: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === id && item.size === size))
    );
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      ageGroup: 'all',
      gender: 'all',
      minPrice: '499',
      maxPrice: '2199',
      sortBy: 'popular',
    });
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 100% Breathable Cotton
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-1">
                All Children's Clothing Catalog
              </h1>
            </div>

            {/* Direct Search Bar */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search dresses, kurtas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 rounded-full border border-gray-200 bg-cream focus:outline-none focus:border-primary"
              />
              <Search className="w-4 h-4 text-slate absolute left-3 top-3" />
            </div>
          </div>

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            totalResults={filteredProducts.length}
          />
        </div>
      </div>

      {/* Product Results */}
      <div className="flex-1 py-8">
        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </main>
  );
}
