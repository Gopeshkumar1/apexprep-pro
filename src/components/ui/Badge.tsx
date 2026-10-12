import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sale' | 'new' | 'bestseller' | 'organic' | 'stock' | 'outline';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'sale',
  children,
  ...props
}) => {
  const variantStyles = {
    sale: 'bg-discount text-white font-bold',
    new: 'bg-primary text-white font-semibold',
    bestseller: 'bg-accent text-navy font-bold',
    organic: 'bg-secondary text-white font-medium',
    stock: 'bg-emerald-100 text-emerald-800 font-medium',
    outline: 'border border-slate/30 text-slate font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] tracking-wide uppercase shadow-xs',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
