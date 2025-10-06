"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./DashboardNavbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#191d24]">
      <Sidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col">
        <Navbar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed(!collapsed)}
        />
        <main className="flex-1 p-6 bg-[#05070a] text-gray-100">{children}</main>
      </div>
    </div>
  );
}
