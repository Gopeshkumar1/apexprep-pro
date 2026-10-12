'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { Price } from '@/components/ui/Price';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0]?.size || '2-4Y'
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { showToast } = useToast();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, selectedSize);
    } else {
      showToast(`Added ${product.title} (${selectedSize}) to cart! 🛍️`, 'success');
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    showToast(
      !isWishlisted ? 'Saved to Wishlist ❤️' : 'Removed from Wishlist',
      'info'
    );
  };

  const primaryImage = product.images[0]?.url || 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80';
  const secondaryImage = product.images[1]?.url || primaryImage;

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-float transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer">
        <Link href={`/product/${product.slug}`}>
          <img
            src={isHovered ? secondaryImage : primaryImage}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isSale && <Badge variant="sale">Clearance</Badge>}
          {product.isNewArrival && <Badge variant="new">New</Badge>}
          {product.isBestSeller && <Badge variant="bestseller">Best Seller</Badge>}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform hover:scale-110 active:scale-90 ${
            isWishlisted
              ? 'bg-discount text-white'
              : 'bg-white/80 text-navy hover:bg-white'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Size Selector Pills on Hover */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center justify-between gap-1">
          <span className="text-[10px] font-bold text-slate uppercase pl-1">
            Size:
          </span>
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSize(v.size);
                }}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-lg transition-colors ${
                  selectedSize === v.size
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-navy hover:bg-gray-200'
                }`}
              >
                {v.size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate font-medium">
            <span>{product.categoryName}</span>
            <span className="text-secondary font-bold">{product.fabric}</span>
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-heading font-bold text-sm text-navy line-clamp-2 hover:text-primary transition-colors mt-1">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="pt-2 space-y-3">
          <Rating value={product.rating} count={product.reviewCount} size="sm" />

          <div className="flex items-center justify-between">
            <Price amount={product.price} mrp={product.mrp} size="md" />

            <Button
              size="sm"
              variant="outline"
              onClick={handleQuickAdd}
              className="p-2 sm:px-3 sm:py-1.5 text-xs font-bold shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:mr-1" />
              <span className="hidden sm:inline">Add</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
