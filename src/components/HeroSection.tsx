"use client";

import React from "react";
import Ballpit from "@/3dcomponents/Ballpit";
import TextPressure from "@/3dcomponents/TextPressure";
import { Button } from "./ui";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Ballpit Fullscreen */}
      <Ballpit
        className="absolute inset-0 w-full h-full"
        backgroundColor="#000000"
        count={100}
        gravity={0.1}
        friction={1}
        wallBounce={0.95}
        followCursor={false}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Logo/Heading */}
        <div className="w-[120%] max-w-[800px] mb-8 sm:mb-12 mt-16">
          <TextPressure
            text="DireQtKart"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={150}
          />
        </div>

        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          Empower Your <span className="text-lime-400">Micro-Business</span>{" "}
          with LinklyHub
        </h1>

      

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Get Started
          </button>
          <Button
          variant="primary"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
