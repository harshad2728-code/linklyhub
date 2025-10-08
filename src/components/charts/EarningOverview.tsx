"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Changed to BarElement
  Tooltip,
  Legend, // Added Legend
} from "chart.js";
import { Bar } from "react-chartjs-2"; // Changed to Bar component
import { TrendingUp, DollarSign } from "lucide-react"; // Icons for flair

// Register necessary components for a Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Mock data: Now representing Revenue and Costs for comparison
const monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  revenue: [24000, 28000, 35000, 29000, 42000, 48000, 45000, 52000, 58000],
  costs: [12000, 13000, 17000, 15000, 19000, 22000, 21000, 24000, 26000],
};

const EarningOverview: React.FC = () => {
  const chartData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: "Revenue",
        data: monthlyData.revenue,
        backgroundColor: "#22C55E", // Green-500
        borderRadius: 4,
      },
      {
        label: "Costs",
        data: monthlyData.costs,
        backgroundColor: "#F97316", // Orange-500
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows flexible height
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#E2E8F0", // text-gray-200
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.95)", // slate-900
        titleColor: "#FFF",
        bodyColor: "#CBD5E1", // slate-300
        padding: 12,
        cornerRadius: 6,
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: "#94A3B8" }, // slate-400
        grid: { display: false },
      },
      y: {
        stacked: true,
        ticks: { color: "#94A3B8", callback: (v: any) => `₹${v / 1000}k` },
        grid: { color: "rgba(148,163,184,0.1)" }, // Light grid lines
      },
    },
  };

  const latestRevenue = monthlyData.revenue[monthlyData.revenue.length - 1];
  const previousRevenue = monthlyData.revenue[monthlyData.revenue.length - 2];
  const percentageChange = (
    ((latestRevenue - previousRevenue) / previousRevenue) *
    100
  ).toFixed(1);

  return (
    <div className="p-6 rounded-2xl shadow-2xl border border-gray-700/60 w-full min-h-[350px]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-50 tracking-wide flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            Monthly Financial Summary
          </h3>
          <p className="text-sm text-gray-400 mt-1">Revenue vs. Operational Costs</p>
        </div>
        <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-full hover:bg-indigo-700 transition shadow-md shadow-indigo-500/30">
          Analyze Report
        </button>
      </div>

      {/* Stats Block */}
      <div className="mb-6 flex items-baseline gap-4">
        <span className="text-4xl font-extrabold text-white">
          ₹{latestRevenue.toLocaleString()}
        </span>
        <span
          className={`text-sm font-semibold flex items-center ${
            parseFloat(percentageChange) >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          <TrendingUp className="w-4 h-4 mr-1" />
          {percentageChange}%
        </span>
        <span className="text-sm text-gray-400">vs. last month</span>
      </div>

      {/* Bar Chart Container */}
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
        <p className="text-xs text-gray-500">
          Last updated: Sep {new Date().getFullYear()} data
        </p>
      </div>
    </div>
  );
};

export default EarningOverview;