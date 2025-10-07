"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BestSellingProducts: React.FC = () => {
  const labels = ["Wireless Earbuds", "Smartwatch", "Gaming Mouse", "Laptop Stand", "Bluetooth Speaker"];

  const data = {
    labels,
    datasets: [
      {
        label: "Units Sold",
        data: [3200, 2800, 2400, 1800, 1500],
        backgroundColor: [
          "rgba(59,130,246,0.9)",
          "rgba(16,185,129,0.9)",
          "rgba(249,115,22,0.9)",
          "rgba(234,179,8,0.9)",
          "rgba(147,51,234,0.9)",
        ],
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#E2E8F0",
        bodyColor: "#CBD5E0",
        borderColor: "#334155",
        borderWidth: 1,
        callbacks: {
          label: function (context: any) {
            return ` ${context.formattedValue} units`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#A0AEC0", font: { size: 12, weight: "500" } },
      },
      y: {
        grid: { color: "#1F2937" },
        ticks: {
          color: "#A0AEC0",
          stepSize: 500,
          callback: (value: number) => `${value}`,
        },
      },
    },
  };

  return (
    <div className=" rounded-xl border border-gray-700/40 p-6 shadow-xl w-full md:w-[550px] lg:w-[100%] hover:border-gray-600 transition-all duration-300">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Best Selling Products</h3>
          <p className="text-sm text-gray-400">Top products based on units sold</p>
        </div>
        <span className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">This Month</span>
      </div>

      <div className="h-[300px]">
        <Bar options={options} data={data} />
      </div>

      <div className="flex justify-between mt-4 text-gray-400 text-sm">
        <p>Total Sales: <span className="text-gray-100 font-semibold">11,700 units</span></p>
        <p>Compared to last month: <span className="text-green-400 font-semibold">+12%</span></p>
      </div>
    </div>
  );
};

export default BestSellingProducts;
