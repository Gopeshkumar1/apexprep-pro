import React from 'react';
import { Rating } from '@/components/ui/Rating';
import { CheckCircle2 } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      city: 'Bengaluru',
      kidAge: 'Mother of 3Y Girl',
      rating: 5,
      title: 'Fabric is amazingly soft!',
      comment:
        'I bought the pastel floral cotton dress for my daughter’s 3rd birthday. She usually complains about itchiness in clothes, but she wore this all day happily!',
      product: 'Pastel Floral Cotton Dress',
    },
    {
      name: 'Anand Verma',
      city: 'Mumbai',
      kidAge: 'Father of 5Y Boy',
      rating: 5,
      title: 'Perfect fit & vibrant colors',
      comment:
        'The festive handloom kurta set was ideal for Diwali. Washed it twice already and zero color bleeding. Great job LittleThreads team!',
      product: 'Festive Handloom Kurta Pyjama Set',
    },
    {
      name: 'Neha Kulkarni',
      city: 'Pune',
      kidAge: 'Mother of 6M Baby',
      rating: 5,
      title: 'Best organic onesies for newborns',
      comment:
        'Super easy diaper snaps and super gentle on baby skin. Truly honest pricing compared to expensive mall brands.',
      product: 'Infant Organic Cotton Onesie 3-Pack',
    },
  ];

  return (
    <section className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Real Parent Testimonials
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-1">
            Loved by 5,000+ Indian Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <Rating value={rev.rating} count={5} showCount={false} size="md" />
                <h3 className="font-heading font-bold text-base text-navy">
                  "{rev.title}"
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-navy">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-slate">
                    {rev.city} • {rev.kidAge}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
