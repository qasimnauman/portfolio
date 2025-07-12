import React from "react";
import { Link } from "react-router-dom";

const ProfilesLink = ({ to, icon, text }) => {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#b5c6e028] gap-2 transition-all duration-300 ease-in-out hover:scale-101 border-[0.5px] hover:border-1 px-2 rounded-lg"
    >
      {icon}
      <p className="text-md md:text-lg">{text}</p>
    </Link>
  );
};

export default ProfilesLink;
