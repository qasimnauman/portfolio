import React from "react";
const NavItem = ({ label, path }) => {
  return (
    <a
      href={path}
      className="text-white hover:text-blue-300 transition duration-300"
    >
      {label}
    </a>
  );
};

export default NavItem;
