import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-md top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyPortfolio</h1>

        <div className="space-x-6">
          <NavItem label="Home" path="#home" />
          <NavItem label="Projects" path="#projects" />
          <NavItem label="About" path="#about" />
          <NavItem label="Contact" path="#contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
