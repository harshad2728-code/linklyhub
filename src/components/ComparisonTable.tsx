"use client";

import React from "react";
import { CheckCircle, XCircle, TrendingUp, DollarSign, Users, Zap, ChevronDown } from "lucide-react";

// --- Data (Moved outside for clarity) ---
const platforms = [
  { name: "LinklyHub", key: "linkly", style: "text-purple-300" },
  { name: "Shopify", key: "shopify", style: "text-gray-300" },
  { name: "Gumroad", key: "gumroad", style: "text-gray-300" },
  { name: "Amazon Seller", key: "amazon", style: "text-gray-300" },
];

const features = [
  {
    feature: "Target Users",
    icon: <Users size={20} className="text-purple-400" />,
    linkly: "Micro-businesses, creators, small sellers",
    shopify: "Small to large businesses",
    gumroad: "Digital creators & artists",
    amazon: "Sellers wanting marketplace access",
  },
  {
    feature: "Ease of Use",
    icon: <Zap size={20} className="text-purple-400" />,
    linkly: "Extremely simple, mobile-first",
    shopify: "Moderate complexity",
    gumroad: "Very simple, easy setup",
    amazon: "Complex, many tools",
  },
  {
    feature: "Payments & Logistics",
    icon: <DollarSign size={20} className="text-purple-400" />,
    linkly: "Integrated UPI, COD automation",
    shopify: "Multiple gateways & fulfillment",
    gumroad: "Integrated payments",
    amazon: "FBA or seller-managed",
  },
  {
    feature: "Marketing Tools",
    icon: <TrendingUp size={20} className="text-purple-400" />,
    linkly: "AI-driven local promotions",
    shopify: "Full suite: SEO, ads, email",
    gumroad: "Basic analytics",
    amazon: "Amazon ads & promotions",
  },
];

const uniqueFeatures = [
    { title: "AI-Powered Local Demand", desc: "Know what's trending in your city to sell smarter." },
    { title: "Automated COD", desc: "Reduce manual errors and improve your cash flow effortlessly." },
    { title: "Deep WhatsApp Integration", desc: "Automate orders and updates directly on WhatsApp." },
    { title: "Mobile-First Simplicity", desc: "Set up and manage your entire business from your phone." },
];


// --- Main Component ---
const ComparisonSection = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- Heading --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            The Clear Choice for Indian Sellers
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            A side-by-side look at why LinklyHub is uniquely built for the challenges micro-businesses face in India.
          </p>
        </div>

        {/* --- Responsive Comparison --- */}
        {/* Desktop Table: Appears on lg screens and up */}
        <DesktopTable />
        {/* Mobile Accordion: Appears on screens smaller than lg */}
        <MobileAccordion />

        {/* --- Unique Features CTA --- */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">
            Features Designed for India 🇮🇳
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {uniqueFeatures.map((item) => (
              <div key={item.title} className="bg-gray-900/50 border border-purple-800/50 p-6 rounded-2xl hover:border-purple-600 hover:bg-gray-900 transition-all duration-300 shadow-lg">
                <h4 className="font-semibold text-purple-300 mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-components for Responsive Layouts ---

const DesktopTable = () => (
  <div className="hidden lg:block bg-gray-900/50 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="w-1/4 px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-300">Feature</th>
          {platforms.map(p => (
            <th key={p.key} className={`w-1/5 px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider ${p.style}`}>{p.name}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {features.map((f, idx) => (
          <tr key={f.feature} className="hover:bg-gray-800/60 transition-colors duration-200">
            <td className="px-6 py-4 font-medium text-gray-200 flex items-center gap-4">
              {f.icon}
              {f.feature}
            </td>
            {platforms.map(p => {
              const value = f[p.key as keyof typeof f];
              const isLinkly = p.key === 'linkly';
              return (
                <td key={p.key} className={`px-6 py-4 text-sm ${isLinkly ? 'text-white font-medium' : 'text-gray-400'}`}>
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MobileAccordion = () => (
  <div className="lg:hidden space-y-4">
    {features.map(f => (
        <details key={f.feature} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <div className="flex items-center gap-3 text-gray-200">
                    {f.icon}
                    {f.feature}
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"/>
            </summary>
            <div className="mt-4 space-y-3 pl-2 border-l border-gray-700 ml-3">
                {platforms.map(p => {
                    const value = f[p.key as keyof typeof f];
                    const isLinkly = p.key === 'linkly';
                    return (
                        <div key={p.key} className="pl-4">
                            <p className={`font-semibold text-sm ${p.style}`}>{p.name}</p>
                            <p className={`text-sm ${isLinkly ? 'text-white' : 'text-gray-400'}`}>{value}</p>
                        </div>
                    );
                })}
            </div>
        </details>
    ))}
  </div>
);

export default ComparisonSection;