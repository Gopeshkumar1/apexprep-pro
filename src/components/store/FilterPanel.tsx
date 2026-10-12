'use client';

import React from 'react';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { AgeGroup, GenderTarget } from '@/types/product';
import { Filter, X, RefreshCw } from 'lucide-react';

export interface FilterState {
  category: string;
  ageGroup: string;
  gender: string;
  minPrice: string;
  maxPrice: string;
  sortBy: 'popular' | 'newest' | 'price-low' | 'price-high';
}

export interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const ageOptions = [
    { value: 'all', label: 'All Ages (0-8 Yrs)' },
    { value: '0-12M', label: '0–12 Months' },
    { value: '1-2Y', label: '1–2 Years' },
    { value: '2-4Y', label: '2–4 Years' },
    { value: '4-6Y', label: '4–6 Years' },
    { value: '6-8Y', label: '6–8 Years' },
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'girls', label: 'Girls Collection' },
    { value: 'boys', label: 'Boys Collection' },
    { value: 'baby', label: 'Baby Wear (0-2Y)' },
    { value: 'party-wear', label: 'Party Wear' },
    { value: 'ethnic-wear', label: 'Ethnic & Festive Wear' },
    { value: 'sale', label: 'Clearance Sale' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 font-heading font-extrabold text-navy text-base">
          <Filter className="w-4 h-4 text-primary" />
          <span>Filters & Sort</span>
          <span className="text-xs text-slate font-medium bg-cream px-2 py-0.5 rounded-full">
            {totalResults} items
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-xs font-bold text-slate hover:text-primary flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Selector */}
        <Select
          label="Category"
          value={filters.category}
          options={categoryOptions}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
        />

        {/* Age Selector */}
        <Select
          label="Age Recommendation"
          value={filters.ageGroup}
          options={ageOptions}
          onChange={(e) => onChange({ ...filters, ageGroup: e.target.value })}
        />

        {/* Sort By */}
        <Select
          label="Sort By"
          value={filters.sortBy}
          options={sortOptions}
          onChange={(e) =>
            onChange({
              ...filters,
              sortBy: e.target.value as FilterState['sortBy'],
            })
          }
        />

        {/* Price Range Filter */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
            Max Price (₹)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="499"
              max="2199"
              step="100"
              value={filters.maxPrice || '2199'}
              onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
              className="w-full accent-primary cursor-pointer"
            />
            <span className="text-xs font-bold text-navy shrink-0 w-14 text-right">
              ≤ ₹{filters.maxPrice || '2199'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
