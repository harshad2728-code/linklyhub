import {
  Home,
  ShoppingBag,
  Package,
  CreditCard,
  BarChart3,
  Users,
  Megaphone,
  Settings,
  HelpCircle,
} from "lucide-react";

export interface SidebarItem {
  label: string;
  icon?: any;
  url?: string;
  isMainMenu?: boolean;
  subItem?: { sublabel: string; link: string }[];
}

const SidebarData: SidebarItem[] = [
  { label: "Main Menu", isMainMenu: true },
  { label: "Home", icon: Home, url: "/dashboard" },
  { label: "Products", icon: ShoppingBag, url: "/dashboard/products" },
  { label: "Orders", icon: Package, url: "/dashboard/orders" },
  { label: "Payments", icon: CreditCard, url: "/payments" },
  { label: "Analytics", icon: BarChart3, url: "/analytics" },
  { label: "Customers", icon: Users, url: "/customers" },
  {
    label: "Marketing",
    icon: Megaphone,
    subItem: [
      { sublabel: "Referrals", link: "/marketing/referrals" },
      { sublabel: "Coupons", link: "/marketing/coupons" },
      { sublabel: "Campaigns", link: "/marketing/campaigns" },
    ],
  },
  { label: "Settings", icon: Settings, url: "/settings" },
  { label: "Help & Support", icon: HelpCircle, url: "/help" },
];

export default SidebarData;
