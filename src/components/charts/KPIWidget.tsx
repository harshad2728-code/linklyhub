// components/charts/KPIWidget.tsx
"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  LineElement,
  PointElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, Tooltip, Filler, LineElement, PointElement);

interface KPIWidgetProps {
  title: string;
  value: string | number;
  delta: number;
  trendColor: "green" | "red" | "blue";
  timeframe: string;
}

const colorMap = {
  // FIXED: Using standard Tailwind red color code
  green: {
    stroke: "#34D399", // Green-400
    fill: "rgba(52, 211, 153, 0.15)",
    badge: "bg-green-700/30 text-green-400",
  },
  red: {
    stroke: "#F87171", // Red-400 (This fixes the primary rendering issue)
    fill: "rgba(248, 113, 113, 0.15)",
    badge: "bg-red-700/30 text-red-400",
  },
  blue: {
    stroke: "#93c5fd",
    fill: "rgba(147, 197, 253, 0.15)",
    badge: "bg-sky-700/30 text-sky-300",
  },
};

const generateTrendData = (delta: number) => {
// ... (Your existing data generation logic is fine)
  const base = 50;
  const variation = Math.abs(delta) * 0.8;
  if (delta > 0) {
    return [base - variation, base - variation * 0.8, base, base + variation * 0.5];
  } else if (delta < 0) {
    return [base + variation, base, base - variation * 0.6, base - variation];
  } else {
    return [base, base + 1, base - 1, base];
  }
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    point: { radius: 0 },
    line: { borderCapStyle: "round" },
  },
  plugins: { 
    tooltip: { enabled: false },
    // FIX: Add legend display false to prevent 'undefined' label
    legend: { display: false }, 
  },
};

export const KPIWidget: React.FC<KPIWidgetProps> = ({
  title,
  value,
  delta,
  trendColor,
  timeframe,
}) => {
  const trendData = generateTrendData(delta);
  const colors = colorMap[trendColor] || colorMap.blue; // fallback to blue

  const getGradient = (chart: ChartJS) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return null;
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, colors.fill.replace("0.15", "0"));
    gradient.addColorStop(0.3, colors.fill);
    gradient.addColorStop(1, colors.fill.replace("0.15", "0.4"));
    return gradient;
  };

  const chartData = useMemo(
    () => ({
      labels: Array(trendData.length).fill(""),
      datasets: [
        {
          // Add a non-empty label to the dataset as a safeguard
          label: "Trend", 
          data: trendData,
          backgroundColor: (ctx: any) => getGradient(ctx.chart),
          borderColor: colors.stroke,
          borderWidth: 3,
          fill: "start",
          tension: 0.4,
        },
      ],
    }),
    [trendData, colors]
  );

  return (
// ... (The rest of the component JSX remains the same)
    <div className="bg-gray-850 p-5 rounded-xl w-full shadow-xl flex flex-col justify-between min-w-[220px] border border-gray-700/40 hover:border-gray-600 transition duration-300">
      <div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white text-sm font-medium mb-2">{title}</p>
            <h3 className="text-2xl text-white font-extrabold">{value}</h3>
          </div>
          <div
            className={`ml-2 flex items-center rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
          >
            {delta >= 0 ? (
              <ArrowUpRight size={14} className="mr-1" />
            ) : (
              <ArrowDownRight size={14} className="mr-1" />
            )}
            {delta > 0 ? "+" : ""}
            {delta}%
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">{timeframe}</p>
      </div>
      <div className="h-10 mt-3">
        {/* Changed type="line" to generic Chart component */}
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};