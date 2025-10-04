"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4" style={{ width: "100%", maxWidth: "90vw" }}>
      <div
        className="
          relative flex items-center
          px-6 py-3 md:px-8 md:py-4
          rounded-full
          bg-white/5 border border-white/10 
          shadow-lg
          backdrop-blur-md
        "
        style={{ minWidth: "320px", maxWidth: "90vw" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 z-10">
          <Image
            src="/images/logo1.png"
            alt="Workflow"
            width={210}
            height={210}
          />
        </div>

        {/* Navigation Links (Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-6 text-white text-opacity-80 font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Docs</a>
        </div>

        {/* Call to Action Buttons */}
        <div className="ml-auto hidden md:flex items-center space-x-4 z-10">
          <button
          onClick={() => router.push("/login")}
            className="px-4 py-2 border border-white/30 text-white text-opacity-80 rounded-full hover:bg-white/10 transition"
          >
            Sign In
          </button>
          <a
            href="#"
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
