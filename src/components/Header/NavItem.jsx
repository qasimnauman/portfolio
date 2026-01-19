"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ label, path, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`flex items-center justify-center gap-2 px-3 py-3 md:px-4 md:py-2 rounded-xl transition-all duration-300 min-w-[44px] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50 ${
        isActive
          ? "bg-white/20 text-white"
          : "text-white/70 hover:text-white hover:bg-white/10"
      }`}
    >
      {icon}
      <span className="hidden md:inline font-poppins-medium">{label}</span>
    </Link>
  );
};

export default NavItem;
