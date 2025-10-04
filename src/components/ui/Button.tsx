"use client";

import React from "react";
import { cn } from "@/lib/utils"; // utility for merging classes

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-all duration-300",
        // Primary → Orange to Red gradient (your requested style)
        variant === "primary" &&
          "inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-10 py-4 shadow-lg hover:scale-105 transition-transform duration-300",
        // Secondary → lime accent
        variant === "secondary" &&
          "px-6 py-3 bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_15px_rgba(163,230,53,0.6)]",
        // Outline → glassy white border
        variant === "outline" &&
          "px-6 py-3 border border-white/30 text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
        // Glass → translucent dark button
        variant === "glass" &&
          "px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
        className
      )}
      {...props}
    />
  );
}
