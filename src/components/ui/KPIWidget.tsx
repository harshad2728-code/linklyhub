// components/KPIWidget.tsx
"use client";

import React, { useMemo } from "react";
// Import Chart.js essentials
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  // CORRECT IMPORTS for a filled Line/Area Chart
  LineElement, 
  PointElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  // CORRECT REGISTRATIONS
  LineElement, 
  PointElement,
);

interface KPIWidgetProps {
  title: string;
  value: string | number;
  delta: number;
  trendColor: "green" | "red" | "blue";
  timeframe: string;
}

// Updated color scheme for a softer, more modern dark theme
const colorMap = {
  green: {
    stroke: "#4ade80", // Brighter green-400
    fill: "rgba(74, 222, 128, 0.15)", // Softer fill (green-400 opacity)
    badge: "bg-green-700/30 text-green-400", // Pill-style badge
  },
  red: {
    stroke: "#f87171", // Brighter red-400
    fill: "rgba(248, 113, 113, 0.15)", // Softer fill (red-400 opacity)
    badge: "bg-red-700/30 text-red-400",
  },
  blue: {
    stroke: "#93c5fd", // Light blue/sky for better contrast
    fill: "rgba(147, 197, 253, 0.15)", // Softer fill (sky-300 opacity)
    badge: "bg-sky-700/30 text-sky-300",
  },
};

// LOGIC REMAINS IDENTICAL
const generateTrendData = (delta: number) => {
  const baseValue = 50;
  const variation = Math.abs(delta) * 0.8; 
  
  if (delta > 0) {
    return [
      { value: baseValue - variation },
      { value: baseValue - variation * 0.8 },
      { value: baseValue - variation * 0.5 },
      { value: baseValue - variation * 0.2 },
      { value: baseValue },
      { value: baseValue + variation * 0.3 },
      { value: baseValue + variation },
    ].map(d => d.value); // Chart.js expects an array of numbers
  } else if (delta < 0) {
    return [
      { value: baseValue + variation },
      { value: baseValue + variation * 0.7 },
      { value: baseValue + variation * 0.3 },
      { value: baseValue },
      { value: baseValue - variation * 0.2 },
      { value: baseValue - variation * 0.6 },
      { value: baseValue - variation },
    ].map(d => d.value);
  } else {
    return [
      { value: baseValue },
      { value: baseValue + 2 },
      { value: baseValue - 1 },
      { value: baseValue + 1 },
      { value: baseValue - 1 },
      { value: baseValue + 1 },
      { value: baseValue },
    ].map(d => d.value);
  }
};

// Chart.js Options for a sparkline
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: true,
  scales: {
    x: {
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
      beginAtZero: false,
    },
  },
  elements: {
    point: {
      radius: 0, // Hide points/dots
    },
    line: {
      borderCapStyle: 'round', // Match the Recharts rounded stroke
    }
  },
  plugins: {
    tooltip: {
      enabled: false, // Hide tooltips for a simple sparkline
    },
  },
  layout: {
    padding: 0,
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
  const colors = colorMap[trendColor];

  // Function to create the gradient fill
  const getGradient = (chart: ChartJS) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return null;

    // Create a smooth linear gradient from top to bottom
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    
    // Gradient stops to match the desired visual effect (fading out at the bottom)
    gradient.addColorStop(0, colors.fill.replace('0.15', '0'));   // 0% opacity at the bottom
    gradient.addColorStop(0.3, colors.fill);                      // 30% mark for full color area
    gradient.addColorStop(1, colors.fill.replace('0.15', '0.4')); // 100% mark (top line)

    return gradient;
  };

  // Memoize the chart data
  const chartData = useMemo(() => ({
    labels: Array(trendData.length).fill(''), // Empty labels for sparkline
    datasets: [
      {
        data: trendData,
        backgroundColor: (context: any) => getGradient(context.chart),
        borderColor: colors.stroke,
        borderWidth: 3,
        fill: 'start', // Fill from the line down to the axis
        tension: 0.4, // Provides a smooth curve (like 'monotone')
        pointRadius: 0,
        pointHitRadius: 0,
      },
    ],
  }), [trendData, colors]);
  
  return (
    // Styling remains identical
    <div className="bg-gray-850 p-6 rounded-xl w-full shadow-2xl flex flex-col justify-between min-w-[250px] border border-gray-700/50 hover:border-gray-600 transition duration-300">
      <div className="flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            {/* Title */}
            <div className="text-gray-400 text-sm font-medium mb-1">{title}</div>
            
            {/* Value */}
            <div className="text-4xl text-white font-extrabold tabular-nums tracking-tight">
              {value}
            </div>
          </div>
          
          {/* Delta/Badge */}
          <div
            className={`ml-3 flex items-center rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
          >
            {delta >= 0 ? (
              <ArrowUpRight size={16} className="mr-0.5" />
            ) : (
              <ArrowDownRight size={16} className="mr-0.5" />
            )}
            <span className="tabular-nums">
              {delta > 0 ? "+" : ""}
              {delta}%
            </span>
          </div>
        </div>

        {/* Timeframe */}
        <div className="text-xs text-gray-500 mt-2">{timeframe}</div>
      </div>
      
      {/* Chart.js Area Chart */}
      <div className="h-14 mt-4 -mx-1">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

// Dashboard wrapper (Identical to previous)
export default function DashboardKPIRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
      <KPIWidget
        title="Users"
        value="14k"
        delta={25}
        trendColor="green"
        timeframe="Last 30 days"
      />
      <KPIWidget
        title="Conversions"
        value="325"
        delta={-25}
        trendColor="red"
        timeframe="Last 30 days"
      />
      <KPIWidget
        title="Event Count"
        value="200k"
        delta={5}
        trendColor="blue"
        timeframe="Last 30 days"
      />
      {/* Static Card */}
      <div className="bg-gray-850 p-6 rounded-xl w-full shadow-2xl flex flex-col justify-between min-w-[250px] border border-gray-700/50">
        <div className="text-white font-extrabold text-xl mb-2">Explore Data Insights</div>
        <div className="text-gray-400 text-sm mb-6">
          Uncover hidden performance and visitor insights with our data wizardry.
        </div>
        <button className="rounded-lg bg-white/10 text-white font-semibold py-2 mt-auto hover:bg-white/20 transition hover:shadow-lg hover:shadow-sky-500/20">
          Get insights &rarr;
        </button>
      </div>
    </div>
  );
}