import React from "react";
import { Link } from "react-router-dom";

const NavigationCard = ({ to, icon1, icon2, text }) => {
  return (
    <Link
      to={to}
      target={to.includes("https") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 text-[#B5C6E0] bg-[#b5c6e028] rounded-2xl hover:outline hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="flex flex-row text-[#B5C6E0] gap-2 justify-center items-center">
        {icon1}
        <p className="font-poppins-medium">{text}</p>
        <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
          {icon2}
        </span>
      </div>
    </Link>
  );
};

export default NavigationCard;
