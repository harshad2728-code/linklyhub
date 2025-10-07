"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesOverviewChart: React.FC = () => {
  const labels = ["Apr 1", "Apr 5", "Apr 10", "Apr 15", "Apr 20", "Apr 25", "Apr 30"];

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Returning Sessions",
        data: [1000, 2500, 4580, 3500, 6999, 11000, 14000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderWidth: 2,
      },
      {
        label: "New Sessions",
        data: [1000, 1500, 2000, 3000, 4000, 5500, 8000],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: "origin", // safer than "-1"
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#2D3748",
        titleColor: "#E2E8F0",
        bodyColor: "#CBD5E0",
        borderColor: "#4A5568",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 4,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.parsed.y ?? 0;
            return `${label}: ${new Intl.NumberFormat("en-US").format(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, borderColor: "#4A5568" },
        ticks: { color: "#A0AEC0" },
      },
      y: {
        grid: { color: "#2D3748", borderColor: "#4A5568" },
        ticks: {
          color: "#A0AEC0",
          callback: function (value) {
            return new Intl.NumberFormat("en-US").format(Number(value));
          },
        },
      },
    },
  };

  return (
    <div className=" rounded-xl border border-gray-700/40 p-6 shadow-xl w-full md:w-[550px] lg:w-[100%] hover:border-gray-600 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Sessions</h3>
          <p className="text-3xl font-bold text-white leading-none">
            13,277 <span className="text-green-500 text-base font-normal">+35%</span>
          </p>
          <p className="text-sm text-gray-400">Sessions per day for the last 30 days</p>
        </div>
      </div>
      <div className="h-[250px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SalesOverviewChart;
