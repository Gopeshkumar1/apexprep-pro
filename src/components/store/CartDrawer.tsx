'use client';

import React from 'react';
import Link from 'next/link';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';
import { Price } from '@/components/ui/Price';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/Toast';

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ product: Product; size: string; quantity: number }>;
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemoveItem: (id: string, size: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const { showToast } = useToast();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 999;
  const missingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 70;
  const total = subtotal + shippingFee;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Your Shopping Bag 🛍️">
      <div className="flex flex-col h-full space-y-4">
        {/* Free Shipping Progress Indicator */}
        <div className="bg-primary-light/60 p-3 rounded-2xl border border-primary/20 text-xs">
          {missingForFreeShipping > 0 ? (
            <p className="font-semibold text-navy">
              Add <strong className="text-primary">₹{missingForFreeShipping}</strong> more for{' '}
              <strong className="text-primary">FREE Shipping</strong>!
            </p>
          ) : (
            <p className="font-bold text-emerald-700 flex items-center gap-1">
              🎉 Congratulations! You have unlocked FREE Express Shipping!
            </p>
          )}
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate/40 mx-auto" />
              <p className="font-bold text-navy">Your bag is empty!</p>
              <p className="text-xs text-slate">
                Explore our soft organic collection for your little ones.
              </p>
              <Button size="sm" onClick={onClose} className="mt-2 font-bold">
                Start Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex items-center gap-3 p-3 bg-cream/60 rounded-2xl border border-gray-100"
              >
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.title}
                  className="w-16 h-20 object-cover rounded-xl shrink-0"
                />
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-navy truncate">
                    {item.product.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate font-semibold">
                    <span>Size: <strong className="text-navy">{item.size}</strong></span>
                    <span>•</span>
                    <Price amount={item.product.price} mrp={item.product.mrp} size="sm" showBadge={false} />
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-cream rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-navy">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-cream rounded-r-lg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.size)}
                      className="p-1 text-slate hover:text-discount transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-gray-100 space-y-3 bg-white">
            <div className="space-y-1.5 text-xs text-slate">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-navy">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-bold text-navy">
                  {shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-navy pt-2 border-t border-gray-100">
                <span>Total Amount</span>
                <span className="text-primary font-heading">₹{total}</span>
              </div>
            </div>

            <Link href="/checkout" onClick={onClose} className="block w-full">
              <Button size="lg" fullWidth className="font-bold shadow-float">
                Proceed to Checkout <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>Safe & Encrypted 256-Bit Razorpay Checkout</span>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};
