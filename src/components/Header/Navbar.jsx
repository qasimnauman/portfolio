import React from "react";
import NavItem from "./NavItem";
import {
  Home,
  CircleUserRound,
  LayoutGrid,
  BookText,
  Image,
} from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "About", path: "about", icon: <CircleUserRound size={18} /> },
  { label: "Work", path: "projects", icon: <LayoutGrid size={18} /> },
  { label: "Blog", path: "blog", icon: <BookText size={18} /> },
  { label: "Gallery", path: "gallery", icon: <Image size={18} /> },
];

const Navbar = () => {
  return (
    <nav className="fixed md:top-8 h-13 left-1/2 -translate-x-1/2 bottom-8 bg-black/10 backdrop-blur-md border border-white/20 shadow-lg px-6 py-2 rounded-2xl">
      <ul className="flex items-center gap-4">
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
