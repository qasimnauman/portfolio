import React from "react";
import { Link } from "react-router-dom";

const NavigationCard = ({ to, icon1, icon2, text }) => {
  return (
    <Link
      to={to}
      target={to.includes("https") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-block p-2 text-[#B5C6E0] bg-[#b5c6e028] rounded-2xl hover:outline hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="flex flex-row gap-2 shrink-0">
        <div className="flex flex-row gap-2 items-center">
          {icon1}
          <p className="font-poppins-medium text-sm md:text-lg text-center md:text-left">
            {text}
          </p>
        </div>
        <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
          {icon2}
        </span>
      </div>
    </Link>
  );
};

export default NavigationCard;
