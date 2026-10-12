import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RatingProps {
  value: number;
  max?: number;
  count?: number;
  size?: 'sm' | 'md';
  showCount?: boolean;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  count,
  size = 'sm',
  showCount = true,
  className,
}) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.4;

  const starSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  for (let i = 1; i <= max; i++) {
    if (i <= fullStars) {
      stars.push(
        <Star
          key={i}
          className={cn(starSize, 'fill-amber-400 text-amber-400')}
        />
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <StarHalf
          key={i}
          className={cn(starSize, 'fill-amber-400 text-amber-400')}
        />
      );
    } else {
      stars.push(
        <Star key={i} className={cn(starSize, 'text-gray-200 fill-gray-100')} />
      );
    }
  }

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5">{stars}</div>
      {showCount && count !== undefined && (
        <span className="text-xs text-slate font-medium">({count})</span>
      )}
    </div>
  );
};
