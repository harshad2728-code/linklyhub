
"use client";

import React, { useState } from "react";
import {
  Home,
  Settings,
  User,
  BarChart2,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: <Home className="h-5 w-5" />, href: "#" },
  { name: "Analytics", icon: <BarChart2 className="h-5 w-5" />, href: "#" },
  { name: "Profile", icon: <User className="h-5 w-5" />, href: "#" },
  { name: "Settings", icon: <Settings className="h-5 w-5" />, href: "#" },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            LinklyHub
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col space-y-2 px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 w-full px-4">
          <button className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

