"use client";

import React from "react";
import Image from "next/image";
import { Zap, Package, ArrowUpCircle } from "lucide-react"; // Importing icons for a cleaner look

interface Product {
  id: string;
  name: string;
  image: string;
  stock: number;
}

// Helper component for the stock level pill
const StockPill: React.FC<{ stock: number }> = ({ stock }) => {
  let colorClass = "";
  let text = `${stock} in Stock`;

  if (stock <= 2) {
    // Critical (stock <= 2)
    colorClass = "bg-red-500/20 text-red-500 border-red-500";
  } else if (stock <= 5) {
    // Low (2 < stock <= 5)
    colorClass = "bg-amber-500/20 text-amber-500 border-amber-500";
  } else {
    // Watch (stock > 5) - Can be used if you expand the data
    colorClass = "bg-green-500/20 text-green-500 border-green-500";
    text = `${stock} left`; // Adjusting text slightly
  }
  
  // Note: For this specific dataset, stock will only be <= 5, so the green case won't be hit.

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorClass}`}
    >
      <Package className="w-3 h-3" />
      {text}
    </span>
  );
};

const LowStockProducts: React.FC = () => {
  const lowStockItems: Product[] = [
    {
      id: "1",
      name: "Wireless Mouse (Ergo-X)",
      image: "/images/mouse.jpg",
      stock: 3, // Low
    },
    {
      id: "2",
      name: "Aura Smartwatch v3",
      image: "/images/watch.jpg",
      stock: 2, // Critical
    },
    {
      id: "3",
      name: "Premium Cotton T-Shirt (M)",
      image: "/images/shirt.jpg",
      stock: 5, // Low
    },
    {
      id: "4",
      name: "USB-C Fast Charger (65W)",
      image: "/images/charger.jpg",
      stock: 1, // Critical
    },
  ];
  
  // Sort items by stock level for immediate attention
  const sortedItems = lowStockItems.sort((a, b) => a.stock - b.stock);

  return (
    <div className=" rounded-xl border border-gray-700/40 p-6 shadow-xl w-full md:w-[550px] lg:w-[100%] hover:border-gray-600 transition-all duration-300">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 flex items-center gap-2">
          <Zap className="w-5 h-5 text-red-500" />
          Urgent Restock Alert
        </h2>
        <span className="text-sm font-medium text-red-500 dark:text-red-400">
          {lowStockItems.length} Products
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* Table Header (Optional but good for structure) */}
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="py-2 pr-3">Product</th>
              <th className="py-2 px-3 text-center">Stock</th>
              <th className="py-2 pl-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {sortedItems.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-[#253049] transition duration-150">
                
                {/* Product Info Cell */}
                <td className="py-3 pr-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover border border-gray-200 dark:border-gray-600 shadow-sm"
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate max-w-[150px]">
                      {product.name}
                    </span>
                  </div>
                </td>
                
                {/* Stock Level Cell */}
                <td className="py-3 px-3 whitespace-nowrap text-center">
                  <StockPill stock={product.stock} />
                </td>

                {/* Action Button Cell */}
                <td className="py-3 pl-3 whitespace-nowrap text-right">
                  <button className="inline-flex items-center gap-1 text-xs bg-blue-600 text-white font-medium px-3 py-1.5 rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/20 dark:shadow-none">
                    <ArrowUpCircle className="w-3.5 h-3.5" />
                    Restock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer/Summary Action */}
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
        <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">
          View All Inventory →
        </button>
      </div>
    </div>
  );
};

export default LowStockProducts;