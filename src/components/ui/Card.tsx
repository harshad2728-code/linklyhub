import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-lg">
      {children}
    </div>
  );
}
// bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-lg