import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div
        className="
          flex items-center justify-between
          px-6 py-3 md:px-8 md:py-4
          rounded-full
          bg-white/5 border border-white/10 
          shadow-lg
          backdrop-blur-md
        "
        style={{ minWidth: "320px", maxWidth: "90vw" }} // responsive min/max width
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
          </svg>
          <span className="text-white text-lg font-semibold whitespace-nowrap">
            LinklyHub
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-white text-opacity-80 font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Docs</a>
        </div>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="px-4 py-2 border border-white/30 text-white text-opacity-80 rounded-full hover:bg-white/10 transition"
          >
            Sign In
          </a>
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
