import React from 'react';
import { formatPrice, calculateDiscount, cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface PriceProps {
  amount: number;
  mrp?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  amount,
  mrp,
  size = 'md',
  showBadge = true,
  className,
}) => {
  const discount = mrp ? calculateDiscount(amount, mrp) : 0;

  const sizeClasses = {
    sm: 'text-sm font-semibold',
    md: 'text-base font-bold',
    lg: 'text-lg font-bold',
    xl: 'text-2xl font-extrabold',
  };

  const mrpSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  };

  return (
    <div className={cn('inline-flex items-center gap-2 flex-wrap', className)}>
      <span className={cn('text-navy font-heading', sizeClasses[size])}>
        {formatPrice(amount)}
      </span>
      {mrp && mrp > amount && (
        <span
          className={cn(
            'text-slate/70 line-through font-normal',
            mrpSizeClasses[size]
          )}
        >
          {formatPrice(mrp)}
        </span>
      )}
      {showBadge && discount > 0 && (
        <Badge variant="sale" className="text-[10px] px-2 py-0.5">
          {discount}% OFF
        </Badge>
      )}
    </div>
  );
};
