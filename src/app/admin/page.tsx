'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { OrderStatus } from '@/types/order';
import { PackageCheck, ShoppingBag, TrendingUp, Users, ArrowUpRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState([
    {
      id: 'KDS-2026-00104',
      customer: 'Priya Sharma',
      mobile: '+91 98765 43210',
      total: 1498,
      status: 'CONFIRMED' as OrderStatus,
      itemsCount: 2,
      date: 'Today, 02:45 PM',
    },
    {
      id: 'KDS-2026-00103',
      customer: 'Anand Verma',
      mobile: '+91 91234 56789',
      total: 899,
      status: 'SHIPPED' as OrderStatus,
      itemsCount: 1,
      date: 'Yesterday, 06:15 PM',
    },
    {
      id: 'KDS-2026-00102',
      customer: 'Neha Kulkarni',
      mobile: '+91 99887 76655',
      total: 799,
      status: 'DELIVERED' as OrderStatus,
      itemsCount: 1,
      date: '08 Oct 2026',
    },
  ]);

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const getStatusBadgeClass = (status: OrderStatus) => {
    switch (status) {
      case 'CONFIRMED':
        return 'bg-amber-100 text-amber-800';
      case 'PACKED':
        return 'bg-blue-100 text-blue-800';
      case 'SHIPPED':
        return 'bg-purple-100 text-purple-800';
      case 'DELIVERED':
        return 'bg-emerald-100 text-emerald-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
            Store Overview & Metrics
          </h1>
          <p className="text-xs text-slate mt-1">
            Real-time management for LittleThreads India
          </p>
        </div>
        <Link href="/admin/products">
          <Button size="sm" className="font-bold">
            <Plus className="w-4 h-4 mr-1" /> Add New Product
          </Button>
        </Link>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-slate">
            <span className="text-xs font-bold uppercase tracking-wider">Total Sales</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading font-extrabold text-2xl text-navy">₹31,980</p>
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" /> +24% this month
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-slate">
            <span className="text-xs font-bold uppercase tracking-wider">Total Orders</span>
            <div className="p-2 bg-primary-light text-primary rounded-xl">
              <PackageCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading font-extrabold text-2xl text-navy">28</p>
          <span className="text-[10px] text-slate">4 orders pending packing</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-slate">
            <span className="text-xs font-bold uppercase tracking-wider">Active SKUs</span>
            <div className="p-2 bg-accent/20 text-navy rounded-xl">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading font-extrabold text-2xl text-navy">{MOCK_PRODUCTS.length}</p>
          <span className="text-[10px] text-slate">All 100% Cotton garments</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-slate">
            <span className="text-xs font-bold uppercase tracking-wider">Unique Customers</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="font-heading font-extrabold text-2xl text-navy">24</p>
          <span className="text-[10px] text-purple-700 font-bold">100% Indian Pincodes</span>
        </div>
      </div>

      {/* Orders Management Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-soft overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-heading font-bold text-base text-navy">Recent Customer Orders</h3>
          <span className="text-xs text-slate font-medium">Auto-synced</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-cream text-navy font-heading font-extrabold">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Update Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 font-medium">
                  <td className="p-4 font-mono font-bold text-primary">{order.id}</td>
                  <td className="p-4">
                    <p className="font-bold text-navy">{order.customer}</p>
                    <p className="text-[10px] text-slate">{order.mobile}</p>
                  </td>
                  <td className="p-4 font-bold text-navy">₹{order.total}</td>
                  <td className="p-4 text-slate">{order.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${getStatusBadgeClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value as OrderStatus)
                      }
                      className="text-xs bg-cream font-bold text-navy rounded-lg p-1 border border-gray-200 focus:outline-none"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="PACKED">PACKED</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
