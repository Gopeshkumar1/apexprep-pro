'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { ProductGrid } from '@/components/store/ProductGrid';
import { CartDrawer } from '@/components/store/CartDrawer';
import { SizeChartModal } from '@/components/store/SizeChartModal';
import { Price } from '@/components/ui/Price';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/Toast';
import {
  Heart,
  ShoppingBag,
  Truck,
  RefreshCw,
  ShieldCheck,
  Ruler,
  CheckCircle2,
  Share2,
  ChevronRight,
  Zap,
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const product =
    MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(
    product.images[0]?.url || ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0]?.size || '2-4Y'
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [deliveryResult, setDeliveryResult] = useState<string | null>(null);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; size: string; quantity: number }>
  >([]);

  const { showToast } = useToast();

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      showToast('Please enter a valid 6-digit Indian Pincode', 'error');
      return;
    }
    setDeliveryResult(`Express Delivery available to ${pincode} within 2–4 business days! 🚀`);
  };

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, { product, size: selectedSize, quantity }]);
    showToast(`Added ${quantity}x ${product.title} (${selectedSize}) to bag! 🛍️`, 'success');
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/checkout');
  };

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  );

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3 text-xs text-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 overflow-x-auto">
          <a href="/" className="hover:text-navy">Home</a>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <a href={`/${product.categorySlug}`} className="hover:text-navy capitalize">
            {product.categoryName}
          </a>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <span className="text-navy font-bold truncate max-w-xs">{product.title}</span>
        </div>
      </div>

      {/* Product Details Main Grid */}
      <div className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-soft">
                <img
                  src={selectedImage || product.images[0]?.url}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    showToast(!isWishlisted ? 'Saved to Wishlist ❤️' : 'Removed', 'info');
                  }}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-md backdrop-blur-md transition-transform hover:scale-110 ${
                    isWishlisted ? 'bg-discount text-white' : 'bg-white/80 text-navy'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
                  {product.images.map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImage(img.url)}
                      className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImage === img.url
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt={img.altText} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info & Purchase Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="organic">{product.fabric}</Badge>
                  {product.isSale && <Badge variant="sale">Clearance Sale</Badge>}
                  <span className="text-xs text-slate font-medium">Color: <strong className="text-navy">{product.color}</strong></span>
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mt-2">
                  <Rating value={product.rating} count={product.reviewCount} size="md" />
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    In Stock (Dispatch in 24 hrs)
                  </span>
                </div>
              </div>

              {/* Price Display */}
              <div className="p-4 bg-cream/70 rounded-2xl border border-gray-100 space-y-1">
                <Price amount={product.price} mrp={product.mrp} size="xl" />
                <p className="text-[11px] text-slate font-medium">Inclusive of all taxes. Free shipping on orders above ₹999.</p>
              </div>

              {/* Size Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy">
                    Select Kid Age Size: <span className="text-primary">{selectedSize}</span>
                  </label>
                  <button
                    onClick={() => setIsSizeChartOpen(true)}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <Ruler className="w-3.5 h-3.5" /> View Size Guide
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedSize(v.size)}
                      className={`p-3 rounded-2xl border-2 font-bold text-xs transition-all flex flex-col items-center justify-center gap-0.5 ${
                        selectedSize === v.size
                          ? 'border-primary bg-primary-light text-primary shadow-xs'
                          : 'border-gray-200 bg-white text-navy hover:border-gray-300'
                      }`}
                    >
                      <span>{v.size}</span>
                      <span className="text-[9px] text-slate font-normal">
                        {v.stock < 5 ? `${v.stock} left` : 'Available'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-navy">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2 font-bold text-navy hover:bg-cream rounded-l-xl"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-navy text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2 font-bold text-navy hover:bg-cream rounded-r-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                  fullWidth
                  className="font-bold py-4"
                >
                  <ShoppingBag className="w-5 h-5 mr-1" /> Add to Shopping Bag
                </Button>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleBuyNow}
                  fullWidth
                  className="font-bold py-4 shadow-float bg-primary"
                >
                  <Zap className="w-5 h-5 mr-1 fill-current" /> Buy Now (Fast Checkout)
                </Button>
              </div>

              {/* Pincode Delivery Checker */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Check Delivery Date & COD Availability</span>
                </div>
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <Input
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    maxLength={6}
                    className="bg-white text-xs"
                  />
                  <Button type="submit" size="sm" variant="secondary" className="shrink-0 font-bold">
                    Check
                  </Button>
                </form>
                {deliveryResult && (
                  <p className="text-xs text-emerald-700 font-bold animate-fade-in">
                    {deliveryResult}
                  </p>
                )}
              </div>

              {/* Product Specifications & Details */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-wider">
                  Product Details & Fabric Care
                </h4>
                <p className="text-xs text-slate leading-relaxed">{product.description}</p>
                <ul className="space-y-1.5 text-xs text-slate">
                  {product.details.map((d, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <ProductGrid
          title="You May Also Like"
          subtitle="Matching sets & customer favorites"
          products={relatedProducts}
          onAddToCart={(p, s) => {
            setCartItems((prev) => [...prev, { product: p, size: s, quantity: 1 }]);
            showToast(`Added ${p.title} to bag!`, 'success');
            setIsCartOpen(true);
          }}
        />
      )}

      <Footer />

      <SizeChartModal
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    </main>
  );
}
