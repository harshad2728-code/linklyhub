"use client";

import React from "react";
import { UserPlus, Upload, Link, Package } from "lucide-react";
import SpotlightingCard from "@/3dcomponents/SpotLightingCard";

const steps = [
  {
    id: 1,
    step: "01",
    icon: <UserPlus className="w-7 h-7" />,
    title: "Sign up in seconds",
    description:
      "Create your free account with just your email. No complex setup or technical knowledge required.",
    time: "30 seconds",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    step: "02",
    icon: <Upload className="w-7 h-7" />,
    title: "Upload photos and product details",
    description:
      "Add your products directly from your phone. Take photos, add descriptions, and set prices easily.",
    time: "2 minutes",
    gradient: "bg-gradient-to-r from-pink-500 to-red-400",
  },
  {
    id: 3,
    step: "03",
    icon: <Link className="w-7 h-7" />,
    title: "Link your social media and start selling",
    description:
      "Connect Instagram, WhatsApp, and Facebook. Share your store link and start receiving orders immediately.",
    time: "1 minute",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-400",
  },
  {
    id: 4,
    step: "04",
    icon: <Package className="w-7 h-7" />,
    title: "Manage orders and deliveries effortlessly",
    description:
      "Track orders, communicate with customers, and manage deliveries all from one simple dashboard.",
    time: "Ongoing",
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
];

export default function HowItWorksSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Get your business online in just a few simple steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s) => (
          <SpotlightingCard
            key={s.id}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition transform duration-300 group"
          >
            {/* Step Number */}
            <span className="absolute top-4 right-6 text-5xl font-extrabold text-white/10 group-hover:text-white/20 transition">
              {s.step}
            </span>

            {/* Icon */}
            <div className="shrink-0 mb-6">
              <div
                className={`h-14 w-14 flex items-center justify-center rounded-xl ${s.gradient} text-white shadow-lg`}
              >
                {s.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

            {/* Description */}
            <p className="text-gray-300 mb-4">{s.description}</p>

            {/* Time Badge */}
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-200">
              ⏱ {s.time}
            </span>
          </SpotlightingCard>
        ))}
      </div>
    </section>
  );
}
