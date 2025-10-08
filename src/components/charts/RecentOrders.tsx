"use client";

import React from "react";

const orders = [
  { id: "#ORD-1023", product: "Wireless Earbuds", amount: "$120", status: "Delivered", date: "Oct 6, 2025" },
  { id: "#ORD-1022", product: "Smartwatch Pro X", amount: "$250", status: "Pending", date: "Oct 5, 2025" },
  { id: "#ORD-1021", product: "Gaming Mouse", amount: "$80", status: "Cancelled", date: "Oct 4, 2025" },
  { id: "#ORD-1020", product: "Laptop Stand", amount: "$45", status: "Delivered", date: "Oct 3, 2025" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-green-900/30 text-green-400",
  Shipped: "bg-blue-900/30 text-blue-400",
  Pending: "bg-yellow-900/30 text-yellow-400",
  Cancelled: "bg-red-900/30 text-red-400",
};

const RecentOrders: React.FC = () => {
  return (
    <div className=" rounded-xl border border-gray-700/40 p-6 shadow-xl w-full hover:border-gray-600 transition-all duration-300 h-full">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Recent Orders</h3>
          <p className="text-sm text-gray-400">Latest transactions and order activity</p>
        </div>
        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase text-gray-400 border-b border-gray-700/60">
            <tr>
              <th scope="col" className="px-4 py-3">Order ID</th>
              <th scope="col" className="px-4 py-3">Product</th>
              <th scope="col" className="px-4 py-3">Amount</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-700/40 hover:bg-gray-800/50 transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-200">{order.id}</td>
                <td className="px-4 py-3">{order.product}</td>
                <td className="px-4 py-3">{order.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
