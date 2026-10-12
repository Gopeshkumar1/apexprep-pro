import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, PackageCheck, Users, Tag, ArrowLeft, Sparkles } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-body">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-navy text-white p-6 space-y-6 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-extrabold text-lg text-white">
              Admin Portal
            </span>
          </div>
        </div>

        <nav className="space-y-1 text-xs font-semibold text-slate-300">
          <Link
            href="/admin"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-4 h-4 text-primary" />
            <span>Dashboard Overview</span>
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-accent" />
            <span>Manage Products</span>
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
          >
            <PackageCheck className="w-4 h-4 text-secondary-light" />
            <span>Orders & Fulfillment</span>
          </Link>
          <Link
            href="/admin/inventory"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
          >
            <Tag className="w-4 h-4 text-emerald-400" />
            <span>Inventory Stock</span>
          </Link>
          <Link
            href="/admin/customers"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span>Customer Insights</span>
          </Link>
        </nav>

        <div className="pt-6 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Storefront</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Body Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
