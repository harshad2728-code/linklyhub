"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SidebarData from "@/app/dashboard/SideBarData";

interface BreadcrumbProps {
  baseLabel?: string;
  baseHref?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  baseLabel = "Dashboard",
  baseHref = "/dashboard",
}) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Skip the first segment ("dashboard") so breadcrumb starts from subpage
  const visibleSegments = segments[0] === "dashboard" ? segments.slice(1) : segments;

  const getLabelFromSidebar = (segment: string): string => {
    for (const item of SidebarData) {
      if (item.url && item.url.includes(segment)) return item.label;
      if (item.subItem) {
        const sub = item.subItem.find((s) => s.link.includes(segment));
        if (sub) return sub.sublabel;
      }
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const trail = visibleSegments.map((seg, idx) => ({
    label: getLabelFromSidebar(seg),
    href: baseHref + "/" + visibleSegments.slice(0, idx + 1).join("/"),
  }));

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
      {/* Base label (Dashboard) */}
      <Link
        href={baseHref}
        className="text-gray-500 hover:text-blue-400 font-medium transition-colors"
      >
        {baseLabel}
      </Link>

      {trail.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          {idx === trail.length - 1 ? (
            <span className="text-gray-300 font-semibold">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
