import React from "react";

const NavItem = ({ label, path, icon }) => {
  return (
    <a
      href={path}
      className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm transition-colors duration-200 hover:bg-white/10 hover:text-white text-white/80"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default NavItem;
