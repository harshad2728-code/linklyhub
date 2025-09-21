"use client";

import React from "react";
import Ballpit from "@/3dcomponents/Ballpit";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Ballpit Fullscreen */}
      <Ballpit
        className="absolute inset-0 w-full h-full"
        backgroundColor="#1a1a1a"
        count={100}
        gravity={0.1}
        friction={1}
        wallBounce={0.95}
        followCursor={false}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* // Before */}
        <h1 className="text-5xl md:text-7xl font-heading-main">
          Welcome to LinklyHub
        </h1>

        <p className="text-lg md:text-2xl font-italic font-extrabold">
          A seamless way to connect, organize, and share your digital world.
        </p>

        <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
