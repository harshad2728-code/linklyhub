"use client";

import React from "react";
import SpotlightingCard from "@/3dcomponents/SpotLightingCard";
import {
  Smartphone,
  Share2,
  CreditCard,
  TrendingUp,
  Store,
  Users,
  CheckCircle,
} from "lucide-react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: <Smartphone className="w-6 h-6" />,
    title: "Instant Storefront",
    description:
      "Upload product photos from your phone, no website needed. Get your store online in minutes.",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media Integration",
    description:
      "Sell directly via Instagram, WhatsApp, and Facebook Shops. Reach customers where they are.",
    gradient: "bg-gradient-to-r from-pink-500 to-red-400",
  },
  {
    id: 3,
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payments & Logistics",
    description:
      "Trusted payment gateways and delivery partners included. Focus on selling, we handle the rest.",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-400",
  },
  {
    id: 4,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Tools",
    description:
      "One-click ads, referral programs, and sales tracking made simple. Grow your business easily.",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    icon: <Store className="w-6 h-6" />,
    title: "Marketplace Exposure",
    description:
      "Optional listing on the LinklyHub marketplace for more customers. Expand your reach instantly.",
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-400",
  },
  {
    id: 6,
    icon: <Users className="w-6 h-6" />,
    title: "Customer Management",
    description:
      "Keep direct relationships with your customers. Build loyalty and repeat business effortlessly.",
    gradient: "bg-gradient-to-r from-teal-500 to-cyan-400",
  },
];

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-24 px-6">
      {/* Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Built for <span className="text-purple-400">micro-businesses</span>
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Succeed Online
          </span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          LinklyHub gives you everything to sell online — simple, fast and
          mobile-first.  
        </p>
        <p className=" text-lg text-gray-300">
          Powerful features designed specifically for micro-businesses and solo entrepreneurs.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {features.map((f) => (
          <SpotlightingCard
            key={f.id}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="shrink-0 mb-5">
              <div
                className={`h-14 w-14 flex items-center justify-center rounded-full ${f.gradient} text-white shadow-lg`}
              >
                {f.icon}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-base text-gray-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          </SpotlightingCard>
        ))}
      </div>

      {/* Average Time to First Sale */}
      <div className="mt-20 max-w-6xl mx-auto bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-md shadow-xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3">
            Average Time to First Sale
          </h3>
          <div className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            24 Hours
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CheckCircle className="h-7 w-7 text-green-400 mr-2" />
              <span className="font-semibold">Setup Complete</span>
            </div>
            <p className="text-base text-gray-400">In under 5 minutes</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CheckCircle className="h-7 w-7 text-green-400 mr-2" />
              <span className="font-semibold">First Order</span>
            </div>
            <p className="text-base text-gray-400">
              Within 24 hours on average
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CheckCircle className="h-7 w-7 text-green-400 mr-2" />
              <span className="font-semibold">Growing Business</span>
            </div>
            <p className="text-base text-gray-400">Scale at your own pace</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl hover:opacity-95 transition-all duration-300"
          aria-label="Start your free store"
        >
          🚀 Start your free store
        </a>
      </div>
    </section>
  );
}
