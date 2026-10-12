import React from 'react';
import Link from 'next/link';

export const CategoryGrid: React.FC = () => {
  const categories = [
    {
      title: 'Girls Collection',
      tag: 'Soft Dresses, Sets & Tops',
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
      href: '/girls',
      cols: 'sm:col-span-6 lg:col-span-3',
    },
    {
      title: 'Boys Collection',
      tag: 'Smart Shirts & Denim Sets',
      image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
      href: '/boys',
      cols: 'sm:col-span-6 lg:col-span-3',
    },
    {
      title: 'Ethnic & Festive Wear',
      tag: 'Diwali Kurtas & Lehengas',
      image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80',
      href: '/ethnic-wear',
      cols: 'sm:col-span-6 lg:col-span-3',
    },
    {
      title: 'Baby (0-2 Yrs)',
      tag: 'Organic Onesies & Rompers',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      href: '/baby',
      cols: 'sm:col-span-6 lg:col-span-3',
    },
  ];

  return (
    <section className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Explore Our Collections
            </h2>
            <p className="text-xs sm:text-sm text-slate mt-1">
              Curated for style, durability, and comfort
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs font-extrabold text-primary hover:text-primary-dark uppercase tracking-wider underline decoration-accent"
          >
            View All Categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`${cat.cols} relative rounded-3xl overflow-hidden group shadow-soft border border-gray-100/80 aspect-[4/3] bg-white`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  {cat.tag}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl mt-0.5">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
