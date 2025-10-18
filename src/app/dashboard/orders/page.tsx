"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const orders = [
    {
      id: "ORD-1001",
      customer: "Harshad Shaik",
      date: "2025-10-18",
      total: "₹2,499",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
    },
    {
      id: "ORD-1002",
      customer: "Ananya Patel",
      date: "2025-10-17",
      total: "₹1,199",
      paymentStatus: "Pending",
      orderStatus: "Processing",
    },
    {
      id: "ORD-1003",
      customer: "Ravi Kumar",
      date: "2025-10-16",
      total: "₹899",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
    },
    {
      id: "ORD-1004",
      customer: "Priya Singh",
      date: "2025-10-15",
      total: "₹3,599",
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
    },
  ];

  const filteredOrders = orders
    .filter((o) => filter === "All" || o.orderStatus === filter)
    .filter(
      (o) =>
        o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const statusColors: Record<string, string> = {
    Delivered: "text-green-400 bg-green-500/10 border-green-400/30",
    Shipped: "text-blue-400 bg-blue-500/10 border-blue-400/30",
    Processing: "text-yellow-400 bg-yellow-500/10 border-yellow-400/30",
    Cancelled: "text-red-400 bg-red-500/10 border-red-400/30",
  };

  return (
    <div>
      <Breadcrumb />
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-1xl font-semibold text-white">
          Order Management
        </h1>

        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Order ID or Customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              filter === status
                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/80 hover:text-white"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-slate-800/50 border border-slate-700 rounded-lg">
        <table className="min-w-full divide-y divide-slate-700">
          <thead className="bg-slate-800/70">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-800 transition">
                <td className="px-6 py-3 text-sm text-gray-200 font-medium">{order.id}</td>
                <td className="px-6 py-3 text-sm text-gray-300">{order.customer}</td>
                <td className="px-6 py-3 text-sm text-gray-400">{order.date}</td>
                <td className="px-6 py-3 text-sm text-gray-200">{order.total}</td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                      order.paymentStatus === "Paid"
                        ? "text-green-400 bg-green-500/10 border-green-400/30"
                        : order.paymentStatus === "Pending"
                        ? "text-yellow-400 bg-yellow-500/10 border-yellow-400/30"
                        : "text-red-400 bg-red-500/10 border-red-400/30"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                      statusColors[order.orderStatus]
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <button className="p-2 rounded-md bg-slate-700/50 hover:bg-blue-600 transition text-slate-300 hover:text-white">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-10 text-slate-500 text-sm">No orders found.</div>
        )}
      </div>
    </div>
  );
}
