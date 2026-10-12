export type AgeGroup = '0-12M' | '1-2Y' | '2-4Y' | '4-6Y' | '6-8Y';
export type GenderTarget = 'girls' | 'boys' | 'unisex' | 'baby';
export type CategorySlug = 'girls' | 'boys' | 'baby' | 'party-wear' | 'ethnic-wear' | 'sale';

export interface ProductVariant {
  id: string;
  productId: string;
  size: AgeGroup | string;
  sku: string;
  priceOverride?: number;
  stock: number;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isPrimary?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  userCity?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  isVerifiedPurchase: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  mrp: number;
  fabric: string;
  color: string;
  ageGroup: AgeGroup;
  gender: GenderTarget;
  categorySlug: CategorySlug;
  categoryName: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
  details: string[];
  careInstructions: string[];
}
