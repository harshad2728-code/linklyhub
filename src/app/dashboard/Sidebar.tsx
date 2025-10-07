"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, UserCircle, ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SidebarData from "./SideBarData";

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [imgError, setImgError] = useState(false);
  const profilePic = "https://randomuser.me/api/portraits/men/40.jpg";

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 240 }} // 20*4=80px, 64*4=256px
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 flex flex-col h-screen border-r border-slate-800 bg-[#0c1017] text-gray-100 shadow-lg"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between h-15 border-b border-white/10 px-5 bg-white/5">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo1.png"
            alt="DireQtKart Logo"
            width={collapsed ? 1 : 150}
            height={40}
            className="transition-all duration-200"
          />
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-2 text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin scrollbar-thumb-blue-600/40 scrollbar-track-transparent">
        {SidebarData.map((item, idx) => {
          const isOpen = openMenus[item.label];
          const activeSub = item.subItem?.some((sub: any) =>
            pathname.startsWith(sub.link)
          );

          return (
            <div key={idx}>
              {item.isMainMenu ? (
                !collapsed && (
                  <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400/70">
                    {item.label}
                  </div>
                )
              ) : item.subItem ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200 ${isOpen || activeSub
                        ? "bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-400"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <item.icon
                          className={`h-5 w-5 ${isOpen || activeSub ? "text-blue-400" : "text-slate-500"
                            }`}
                        />
                      )}
                      {!collapsed && <span className="text-sm">{item.label}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-180 text-blue-400" : "text-slate-500"
                          }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {!collapsed && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 pl-8 space-y-1"
                      >
                        {item.subItem.map((sub: any, i: number) => {
                          const isSubActive = pathname === sub.link;
                          return (
                            <button
                              key={i}
                              onClick={() => handleNavigation(sub.link)}
                              className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-all ${isSubActive
                                  ? "bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-400"
                                  : "text-slate-400 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                              {sub.sublabel}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => item.url && handleNavigation(item.url)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all ${pathname === item.url
                      ? "bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-400"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {item.icon && (
                    <item.icon
                      className={`h-5 w-5 ${pathname === item.url ? "text-blue-400" : "text-slate-500"
                        }`}
                    />
                  )}
                  {!collapsed && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer / Profile */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!imgError ? (
              <Image
                src={profilePic}
                alt="Profile"
                width={42}
                height={42}
                className="rounded-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <UserCircle className="h-8 w-8 text-blue-400" />
            )}

            {/* Smooth fade when collapsing */}
            <motion.div
              initial={{ opacity: 1, width: "auto" }}
              animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : "auto" }}
              className="overflow-hidden"
            >
              <p className="text-sm font-semibold text-white">Harshad</p>
              <p className="text-xs text-blue-300/80">Seller</p>
            </motion.div>
          </div>

          <button className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-blue-400 transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

    </motion.aside>
  );
};

export default Sidebar;
