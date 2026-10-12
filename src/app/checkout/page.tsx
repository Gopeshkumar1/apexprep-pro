'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnnouncementBar } from '@/components/store/AnnouncementBar';
import { Navbar } from '@/components/store/Navbar';
import { Footer } from '@/components/store/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { PaymentMethod } from '@/types/order';
import { ShieldCheck, Truck, Lock, CreditCard, Smartphone, Banknote, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export default function CheckoutPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    streetAddress: '',
    landmark: '',
    city: '',
    state: 'Karnataka',
    pincode: '',
    paymentMethod: 'UPI' as PaymentMethod,
  });

  const [isLoading, setIsLoading] = useState(false);

  const indianStates = [
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Delhi', label: 'Delhi NCR' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'West Bengal', label: 'West Bengal' },
  ];

  const subtotal = 699 + 899; // Sample checkout cart subtotal (₹1598)
  const shippingFee = 0; // Free above ₹999
  const discount = 100;
  const total = subtotal - discount + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.streetAddress || !formData.pincode) {
      showToast('Please fill in all required shipping address fields', 'error');
      return;
    }
    if (formData.mobile.length < 10 || formData.pincode.length !== 6) {
      showToast('Please enter a valid 10-digit mobile number & 6-digit pincode', 'error');
      return;
    }

    setIsLoading(true);

    // Simulate order placement
    setTimeout(() => {
      setIsLoading(false);
      const randomOrderSeq = Math.floor(10000 + Math.random() * 90000);
      const orderId = `KDS-2026-${randomOrderSeq}`;
      showToast('🎉 Order placed successfully!', 'success');
      router.push(`/order-success/${orderId}`);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <div className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-secondary flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" /> 256-Bit SSL Encrypted Checkout
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-1">
            Guest Checkout
          </h1>
        </div>
      </div>

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Shipping Address & Payment Selection */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shipping Address Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <Truck className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-base text-navy">
                    1. Shipping & Contact Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />

                  <Input
                    label="Mobile Number (for SMS & Delivery)"
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    maxLength={10}
                  />

                  <div className="sm:col-span-2">
                    <Input
                      label="Email Address (Optional)"
                      type="email"
                      placeholder="For digital invoice receipt"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Input
                      label="House No, Flat, Street Address"
                      required
                      placeholder="e.g. Flat 302, Green Acres Apartment, Indiranagar"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Landmark (Optional)"
                    placeholder="e.g. Near HDFC Bank"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  />

                  <Input
                    label="City / Town"
                    required
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />

                  <Select
                    label="State"
                    required
                    options={indianStates}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  />

                  <Input
                    label="Pincode"
                    required
                    placeholder="6-digit Pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    maxLength={6}
                  />
                </div>
              </div>

              {/* Payment Method Selection Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-base text-navy">
                    2. Select Payment Method
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* UPI */}
                  <label
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'UPI'
                        ? 'border-primary bg-primary-light/50 shadow-xs'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="UPI"
                        checked={formData.paymentMethod === 'UPI'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'UPI' })}
                        className="accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-bold text-sm text-navy block">
                            Instant Instant UPI (GPay, PhonePe, Paytm, BHIM)
                          </span>
                          <span className="text-xs text-slate">Fastest 1-tap mobile payment</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </label>

                  {/* Cards */}
                  <label
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'CARD'
                        ? 'border-primary bg-primary-light/50 shadow-xs'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="CARD"
                        checked={formData.paymentMethod === 'CARD'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'CARD' })}
                        className="accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-secondary" />
                        <div>
                          <span className="font-bold text-sm text-navy block">
                            Credit / Debit Cards (Visa, MasterCard, RuPay)
                          </span>
                          <span className="text-xs text-slate">Secure 3D-Authentication</span>
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* COD */}
                  <label
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'COD'
                        ? 'border-primary bg-primary-light/50 shadow-xs'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="COD"
                        checked={formData.paymentMethod === 'COD'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                        className="accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-amber-600" />
                        <div>
                          <span className="font-bold text-sm text-navy block">
                            Cash on Delivery (COD)
                          </span>
                          <span className="text-xs text-slate">Pay cash to courier agent upon doorstep delivery</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary & Place Order */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-4 sticky top-24">
                <h3 className="font-heading font-extrabold text-lg text-navy pb-3 border-b border-gray-100">
                  Order Breakdown (2 Items)
                </h3>

                {/* Mini Item List */}
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={MOCK_PRODUCTS[0].images[0].url}
                      alt={MOCK_PRODUCTS[0].title}
                      className="w-12 h-14 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex-1 text-xs">
                      <p className="font-bold text-navy truncate">{MOCK_PRODUCTS[0].title}</p>
                      <p className="text-slate">Size: 2-4Y • Qty: 1</p>
                      <p className="font-bold text-navy">₹699</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={MOCK_PRODUCTS[1].images[0].url}
                      alt={MOCK_PRODUCTS[1].title}
                      className="w-12 h-14 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex-1 text-xs">
                      <p className="font-bold text-navy truncate">{MOCK_PRODUCTS[1].title}</p>
                      <p className="text-slate">Size: 4-6Y • Qty: 1</p>
                      <p className="font-bold text-navy">₹899</p>
                    </div>
                  </div>
                </div>

                {/* Calculation */}
                <div className="space-y-2 text-xs text-slate font-medium pt-3 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-navy">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Coupon Discount</span>
                    <span>- ₹{discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Delivery</span>
                    <span className="font-bold text-emerald-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-extrabold text-navy pt-3 border-t border-gray-100">
                    <span>Payable Amount</span>
                    <span className="text-primary font-heading">₹{total}</span>
                  </div>
                </div>

                {/* Place Order CTA */}
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isLoading}
                  fullWidth
                  className="font-bold shadow-float py-4 bg-primary text-base"
                >
                  Pay ₹{total} & Confirm Order
                </Button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                  <span>Razorpay Verified Merchant • 100% Purchase Guarantee</span>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
