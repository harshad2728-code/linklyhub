"use client";

import { Bell, Search, ChevronDown, Menu, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


const DashboardNavbar: React.FC<{
    onToggleSidebar?: () => void;
    collapsed?: boolean;
}> = ({ onToggleSidebar, collapsed }) => {
    const [openProfile, setOpenProfile] = useState(false);
    const [imgError, setImgError] = useState(false);
    const profilePic = "https://randomuser.me/api/portraits/men/75.jpg";
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between h-20 w-full border-b border-white/10 px-5 text-gray-100 shadow-md">

            {/* Left Section */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onToggleSidebar}
                    className="lg:hidden rounded-md p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition"
                >
                    <Menu className="h-5 w-5" />
                </button>
                <h1 className="text-lg font-semibold tracking-tight text-blue-400">
                    Dashboard
                </h1>
            </div>

            {/* Middle Section - Search */}
            <div className="hidden md:flex items-center relative w-1/3">
                <Search className="absolute left-3 h-4 w-4 text-slate-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-slate-700 text-sm rounded-full pl-10 pr-3 py-2 text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
            </div>

            {/* Right Section - Notifications + Profile */}
            <div className="flex items-center gap-4">
                {/* Notification */}
                <button className="relative rounded-full p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                </button>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-2 rounded-full hover:bg-slate-700 transition text-slate-400 hover:text-yellow-400"
                >
                    <motion.div
                        key={theme} // smooth icon transition
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === "light" ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        )}
                    </motion.div>
                </button>


                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setOpenProfile(!openProfile)}
                        className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-700 transition"
                    >
                        {!imgError ? (
                            <Image
                                src={profilePic}
                                alt="User"
                                width={36}
                                height={36}
                                className="rounded-full object-cover"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <User className="h-8 w-8 text-blue-400" />
                        )}

                        {!collapsed && (
                            <div className="hidden md:flex flex-col text-left">
                                <p className="text-sm font-medium text-white">Harshad</p>
                                <p className="text-xs text-slate-400">Admin</p>
                            </div>
                        )}
                        <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform ${openProfile ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {openProfile && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-md shadow-lg overflow-hidden z-50"
                            >
                                {["Profile", "Settings", "Logout"].map((item, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white transition`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
