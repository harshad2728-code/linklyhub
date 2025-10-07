"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RevenuePieChart() {
  const data = {
    labels: ["Electronics", "Clothing", "Home Decor", "Accessories", "Others"],
    datasets: [
      {
        data: [40000, 25000, 15000, 10000, 5000],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",   // blue
          "rgba(34, 197, 94, 0.8)",    // green
          "rgba(249, 115, 22, 0.8)",   // orange
          "rgba(168, 85, 247, 0.8)",   // purple
          "rgba(244, 63, 94, 0.8)",    // pink
        ],
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#d1d5db" },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `₹${context.parsed.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-850 rounded-xl border border-gray-700/40 hover:border-gray-600 transition">
      <h3 className="text-white font-semibold text-lg mb-4">Revenue Breakdown</h3>
      <Pie data={data} options={options} />
    </div>
  );
}
