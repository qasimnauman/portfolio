"use client";

import NavItem from "./NavItem";
import {
  Home,
  CircleUserRound,
  LayoutGrid,
  BookText,
  Image,
  Mail,
} from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "About", path: "/about", icon: <CircleUserRound size={18} /> },
  { label: "Work", path: "/work", icon: <LayoutGrid size={18} /> },
  { label: "Blog", path: "/blog", icon: <BookText size={18} /> },
  { label: "Gallery", path: "/gallery", icon: <Image size={18} /> },
  { label: "Contact", path: "/contact", icon: <Mail size={18} /> },
];

const Navbar = () => {
  return (
    <nav className="fixed md:top-8 h-16 left-1/2 -translate-x-1/2 bottom-6 bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl px-4 md:px-6 py-2 rounded-2xl z-50">
      <ul className="flex items-center justify-between gap-1 md:gap-4">
        {navItems.map(({ label, path, icon }) => (
          <li key={label}>
            <NavItem label={label} path={path} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
