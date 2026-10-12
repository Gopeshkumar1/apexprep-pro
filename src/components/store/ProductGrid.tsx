import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

export interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  onAddToCart?: (product: Product, size: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
  onAddToCart,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-xl mx-auto mb-8">
            {title && (
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate mt-1">{subtitle}</p>
            )}
          </div>
        )}

        {products.length === 0 ? (
          <div className="text-center py-12 bg-cream/50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-sm font-semibold text-slate">
              No products found matching criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
