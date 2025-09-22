"use client";

import React from "react";
import Ballpit from "@/3dcomponents/Ballpit";
import TextPressure from "@/3dcomponents/TextPressure";
import { Link } from "lucide-react";

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
        <div className="w-[120%] max-w-[800px] mb-8 sm:mb-12">
          <TextPressure
            text="LinklyHub"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={150} // slightly smaller on mobile
          />
        </div>

        {/* Tagline - hidden on mobile */}
        <p className="hidden md:block text-2xl md:text-3xl font-bold mb-4 tracking-wide">
          Seamlessly connect, organize & share your digital world <Link className="inline-block ml-2" size={24} />
        </p>

        {/* Sub text / description - hidden on mobile */}
        <p className="hidden md:block text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed italic">
          LinklyHub empowers creators and teams to manage all their links,
          resources, and digital tools in one powerful hub — beautifully simple,
          endlessly flexible.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full bg-[#00FFFF] text-black font-semibold hover:bg-[#33FFFF] transition transform hover:scale-105">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
