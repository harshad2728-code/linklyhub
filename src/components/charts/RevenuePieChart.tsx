"use client";

import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RevenueDoughnutChart() {
  const data = {
    labels: ["Electronics", "Clothing", "Home Decor", "Accessories", "Others"],
    datasets: [
      {
        data: [40000, 25000, 15000, 10000, 5000],
        backgroundColor: [
          "rgba(59,130,246,0.9)", // blue-500
          "rgba(34,197,94,0.9)",  // green-500
          "rgba(249,115,22,0.9)", // orange-500
          "rgba(168,85,247,0.9)", // purple-500
          "rgba(244,63,94,0.9)",  // rose-500
        ],
        borderWidth: 4,
        borderColor: "#0f172a",
        cutout: "70%",
        hoverOffset: 12,
      },
    ],
  };

  // Calculate total dynamically
  const total = useMemo(
    () => data.datasets[0].data.reduce((a, b) => a + b, 0),
    []
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(30, 41, 59, 0.9)",
        titleColor: "#fff",
        bodyColor: "#e2e8f0",
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
        displayColors: true,
        callbacks: {
          label: (context: any) =>
            `₹${context.parsed.toLocaleString()} • ${context.label}`,
        },
      },
    },
  };

  return (
    <div className="border border-gray-700/40 rounded-2xl shadow-2xl p-6 transition hover:shadow-sky-500/10 hover:border-gray-600 h-full">
      <h3 className="text-gray-100 font-semibold text-lg mb-6 tracking-wide">
        Revenue by Category
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden">
        {/* Chart */}
        <div className="relative w-[220px] h-[220px] flex-shrink-0">
          <Doughnut data={data} options={options} />
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-white font-extrabold text-xl md:text-2xl tracking-tight text-center">
              ₹{total.toLocaleString()}
            </span>
            <span className="text-gray-400 text-xs mt-1 text-center">
              Total Revenue
            </span>
          </div>
        </div>

        {/* Custom Legend */}
        <div className="flex flex-col gap-3 w-full md:flex-1 text-sm overflow-hidden">
          {data.labels.map((label, idx) => (
            <div
              key={label}
              className="flex flex-wrap items-center justify-between text-gray-300 hover:text-white transition"
            >
              <div className="flex items-center gap-2 min-w-[120px] max-w-[150px] truncate">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[idx],
                  }}
                />
                <span className="font-medium truncate">{label}</span>
              </div>
              <span className="text-gray-400 font-medium whitespace-nowrap ml-2">
                ₹{data.datasets[0].data[idx].toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
