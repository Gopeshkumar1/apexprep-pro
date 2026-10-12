'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Price } from '@/components/ui/Price';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/types/product';
import { Trash2, ArrowRight, ShieldCheck, ShoppingBag, Tag } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; size: string; quantity: number }>
  >([
    { product: MOCK_PRODUCTS[0], size: '2-4Y', quantity: 1 },
    { product: MOCK_PRODUCTS[1], size: '4-6Y', quantity: 1 },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const { showToast } = useToast();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'FIRST100' || couponCode.toUpperCase() === 'LITTLE100') {
      setDiscountAmount(100);
      showToast('🎉 Coupon FIRST100 applied! ₹100 discount added.', 'success');
    } else {
      showToast('Invalid promo code. Try FIRST100 for ₹100 Off!', 'error');
    }
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
    showToast('Item removed from shopping bag', 'info');
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 70;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} />

      <div className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-extrabold text-3xl text-navy">
            Your Shopping Bag 🛍️
          </h1>
          <p className="text-xs text-slate mt-1">Review your items before proceeding to checkout</p>
        </div>
      </div>

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-soft max-w-lg mx-auto space-y-4">
              <ShoppingBag className="w-16 h-16 text-slate/40 mx-auto" />
              <h3 className="font-heading font-bold text-xl text-navy">Your bag is empty</h3>
              <p className="text-xs text-slate">Looks like you haven't added any kidswear yet.</p>
              <Link href="/shop">
                <Button size="md" className="font-bold">Browse Catalog</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Item List */}
              <div className="lg:col-span-8 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="p-4 bg-white rounded-3xl border border-gray-100 shadow-soft flex flex-col sm:flex-row items-center gap-4"
                  >
                    <img
                      src={item.product.images[0]?.url}
                      alt={item.product.title}
                      className="w-24 h-28 object-cover rounded-2xl shrink-0"
                    />

                    <div className="flex-1 space-y-1 text-center sm:text-left">
                      <h3 className="font-heading font-bold text-base text-navy">
                        {item.product.title}
                      </h3>
                      <p className="text-xs text-slate">
                        Fabric: <strong className="text-navy">{item.product.fabric}</strong> | Size: <strong className="text-primary">{item.size}</strong>
                      </p>
                      <Price amount={item.product.price} mrp={item.product.mrp} size="md" />
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-xl bg-white">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.size, -1)}
                          className="px-3 py-1 text-sm font-bold hover:bg-cream rounded-l-xl"
                        >
                          -
                        </button>
                        <span className="px-3 text-sm font-bold text-navy">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.size, 1)}
                          className="px-3 py-1 text-sm font-bold hover:bg-cream rounded-r-xl"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.product.id, item.size)}
                        className="p-2 text-slate hover:text-discount transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Summary Card */}
              <div className="lg:col-span-4 space-y-4">
                {/* Coupon Form */}
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy">
                    <Tag className="w-4 h-4 text-primary" />
                    <span>Have a Coupon Code?</span>
                  </div>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <Input
                      placeholder="Try FIRST100"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="text-xs uppercase"
                    />
                    <Button type="submit" size="sm" variant="secondary" className="shrink-0 font-bold">
                      Apply
                    </Button>
                  </form>
                </div>

                {/* Order Calculation */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
                  <h3 className="font-heading font-extrabold text-lg text-navy pb-3 border-b border-gray-100">
                    Order Summary
                  </h3>

                  <div className="space-y-2 text-xs text-slate font-medium">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-navy">₹{subtotal}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Promo Discount (FIRST100)</span>
                        <span>- ₹{discountAmount}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Shipping Fee</span>
                      <span className="font-bold text-navy">
                        {shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingFee}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-lg font-extrabold text-navy pt-3 border-t border-gray-100">
                      <span>Total Amount</span>
                      <span className="text-primary font-heading">₹{total}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="block w-full">
                    <Button size="lg" fullWidth className="font-bold shadow-float py-3.5">
                      Proceed to Checkout <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                    <span>Guaranteed Safe & Encrypted Razorpay Checkout</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
