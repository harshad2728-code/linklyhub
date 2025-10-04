"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, DollarSign, Heart, Shield, Clock, Rocket } from "lucide-react";
import { Button } from "./ui";

const benefits = [
    {
        icon: <Zap />,
        title: "Instant Setup, No Code",
        description:
            "Go from idea to live store in minutes. If you can use WhatsApp, you can use LinklyHub. It's that simple.",
        stat: "Zero coding required",
    },
    {
        icon: <DollarSign />,
        title: "Affordable Growth",
        description:
            "Start with a generous free plan. Our pricing scales with your success, not ahead of it.",
        stat: "Free to start",
    },
    {
        icon: <Heart />,
        title: "Direct Customer Relationships",
        description:
            "You own your customer data, always. Build your brand without a marketplace getting in the way.",
        stat: "100% your customers",
    },
    {
        icon: <Clock />,
        title: "Automate & Save Time",
        description:
            "Let our system handle order tracking, inventory, and communications so you can focus on your products.",
        stat: "10+ hours saved weekly",
    },
    {
        icon: <Shield />,
        title: "Secure & Reliable",
        description:
            "With bank-level security for all payments and a 99.9% uptime guarantee, your business is in safe hands.",
        stat: "99.9% uptime",
    },
    {
        icon: <Rocket />,
        title: "Scale Without Limits",
        description:
            "From your first sale to your thousandth, our platform provides the tools you need to grow.",
        stat: "Unlimited growth",
    },
];

export default function BenefitsSectionRedesigned(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-cycle through benefits
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % benefits.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-black text-white py-24 px-6">
            {/* Aurora Glow */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
            </div>

            {/* Heading */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
                    The{" "}
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        LinklyHub
                    </span>{" "}
                    Advantage
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    We've built a platform that works for you, not the other way around.
                    Explore the benefits that set us apart.
                </p>
            </div>

            {/* Interactive Hub */}
            <div className="relative max-w-5xl mx-auto min-h-[450px] lg:min-h-[400px]">
                {/* Central Content Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md text-center p-10 rounded-3xl 
                            bg-gradient-to-b from-gray-900/90 to-black/90 
                            border border-white/10 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                {benefits[activeIndex].title}
                            </h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                {benefits[activeIndex].description}
                            </p>
                            <Button 
                            variant="outline"
                            className="inline-block text-sm font-medium px-5 py-2 shadow-md">
                                {benefits[activeIndex].stat}
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Orbiting Icons */}
                {benefits.map((b, index) => {
                    const radius =
                        typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 220;
                    const angle = (index / benefits.length) * 2 * Math.PI;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`absolute w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
                ${activeIndex === index
                                    ? "bg-gradient-to-r from-orange-400 to-red-500 shadow-[0_0_25px_rgba(251,146,60,0.8)] scale-110"
  : "bg-white/10 border border-white/20 hover:bg-white/20"
                                }`}
                            initial={{ x: 0, y: 0, scale: 0 }}
                            animate={{ x: [0, x], y: [0, y], scale: [0, 1] }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            style={{
                                top: "50%",
                                left: "50%",
                                marginTop: "-28px",
                                marginLeft: "-28px",
                            }}
                        >
                            <div className="text-white h-6 w-6">{b.icon}</div>
                        </motion.button>
                    );
                })}
            </div>
        </section>
    );
}
