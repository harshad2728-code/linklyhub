"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  DollarSign,
  Heart,
  Shield,
  Clock,
  Rocket,
  Users,
  Trophy,
} from "lucide-react";

// Benefit data remains the same
const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "No Tech Experience Needed",
    description: "If you can use WhatsApp, you can use LinklyHub. We designed it for simplicity, requiring zero coding skills.",
    stat: "Zero coding required",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Affordable Plans for Growth",
    description: "Start for free and grow affordably. Our plans are designed to scale only when your sales and business do.",
    stat: "Free to start",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Own Your Customer Base",
    description: "No hidden fees or marketplaces taking your data. Build direct, lasting relationships with your customers.",
    stat: "100% data ownership",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Hours Every Week",
    description: "Our smart automations handle orders, inventory, and messages, giving you valuable time back for your craft.",
    stat: "10+ hours saved weekly",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Bank-Level Security",
    description: "We protect your payments and customer data with end-to-end encryption and 99.9% uptime reliability.",
    stat: "99.9% uptime",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Scale at Your Own Pace",
    description: "From a weekend side-hustle to a full-time business, LinklyHub provides the tools you need to grow.",
    stat: "Unlimited growth potential",
  },
];

export default function BenefitsSectionRedesigned(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-24 px-6">
      {/* Aurora Glow */}
      <div className="absolute top-0 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900 via-transparent to-transparent rounded-full opacity-30 filter blur-3xl" />
      
      {/* Heading */}
      <div className="text-center mb-16 max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-6xl font-semibold mb-6">
          An All-In-One Toolkit{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Built For You
          </span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed font-italic">
          We focus on the features that actually matter for micro-businesses, without the clutter.
        </p>
      </div>

      {/* Interactive Tabs Section */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {/* Tab Buttons (Left Column) */}
        <div className="flex flex-col space-y-2">
          {benefits.map((b, index) => (
            <button
              key={b.title}
              onClick={() => setSelectedTab(index)}
              className={`relative w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                selectedTab === index
                  ? "bg-white/10"
                  : "bg-transparent hover:bg-white/5"
              }`}
            >
              <div className="flex items-center">
                <div className="mr-4 text-purple-400">{b.icon}</div>
                <span className="font-semibold text-white">{b.title}</span>
              </div>
              {selectedTab === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: '100%' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content (Right Column) */}
        <div className="lg:col-span-2 min-h-[300px] bg-white/5 rounded-2xl border border-white/10 p-8 lg:p-12 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {benefits[selectedTab].title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base flex-grow ">
                {benefits[selectedTab].description}
              </p>
              <div className="mt-6">
                 <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white">
                   {benefits[selectedTab].stat}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

       {/* Integrated CTA and Social Proof */}
       <div className="mt-24 text-center max-w-6xl mx-auto relative z-10">
         <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-3xl p-10 border border-white/10 backdrop-blur-md shadow-2xl">
           <h3 className="text-3xl font-bold mb-4">
             Ready to Transform Your Business?
           </h3>
           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
             Join a community of over <span className="text-white font-semibold">10,000+</span> entrepreneurs, rated <span className="text-white font-semibold">4.9/5</span> stars for simplicity and growth.
           </p>
           <a
             href="#"
             className="inline-block rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
           >
             <Rocket className="h-6 w-6 inline-block mr-2" /> Start Your Free Store Today
           </a>
         </div>
       </div>
    </section>
  );
}