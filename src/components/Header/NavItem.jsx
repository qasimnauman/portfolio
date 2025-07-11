import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, path, icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `
        flex items-center font-poppins-regular gap-2 px-2 py-2 rounded-xl text-[#B5C6E0] text-sm transition-all ease-in-out duration-300 hover:text-[#cde1ff] hover:scale-102 hover:bg-[#b5c6e032]
        ${isActive ? "font-poppins-medium bg-[#b5c6e028] text-[#7e899b]" : ""}
      `}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </NavLink>
  );
};

export default NavItem;
