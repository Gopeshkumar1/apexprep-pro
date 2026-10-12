import React from 'react';
import Link from 'next/link';

export const ShopByAge: React.FC = () => {
  const ageGroups = [
    { title: '0–12 Months', subtitle: 'Infant & Baby Onesies', href: '/baby', icon: '🍼', color: 'bg-amber-50 border-amber-200' },
    { title: '1–2 Years', subtitle: 'Toddler Soft Sets', href: '/shop?age=1-2Y', icon: '🧸', color: 'bg-emerald-50 border-emerald-200' },
    { title: '2–4 Years', subtitle: 'Playful Dresses & Shirts', href: '/shop?age=2-4Y', icon: '🎨', color: 'bg-rose-50 border-rose-200' },
    { title: '4–6 Years', subtitle: 'Festive & Party Wear', href: '/shop?age=4-6Y', icon: '✨', color: 'bg-blue-50 border-blue-200' },
    { title: '6–8 Years', subtitle: 'Trendy Casuals & Ethnic', href: '/shop?age=6-8Y', icon: '🚀', color: 'bg-purple-50 border-purple-200' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
            Shop by Age Group
          </h2>
          <p className="text-xs sm:text-sm text-slate mt-1">
            Exact sizing designed specifically for growing Indian children
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ageGroups.map((age) => (
            <Link
              key={age.title}
              href={age.href}
              className={`p-5 rounded-2xl border ${age.color} text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col items-center justify-center`}
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {age.icon}
              </span>
              <h3 className="font-heading font-extrabold text-base text-navy group-hover:text-primary transition-colors">
                {age.title}
              </h3>
              <p className="text-[11px] text-slate font-medium mt-0.5">
                {age.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
