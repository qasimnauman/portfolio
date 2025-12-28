"use client";

import Link from "next/link";

const NavigationCard = ({ to, icon1, icon2, text }) => {
  const isExternal = to.startsWith("http");
  
  return (
    <Link
      href={to}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex flex-row items-center justify-between gap-4 p-4 bg-[#b5c6e028] rounded-xl hover:bg-[#b5c6e040] transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="flex flex-row items-center gap-3">
        <div className="text-[#B5C6E0]">{icon1}</div>
        <p className="font-poppins-medium text-[#B5C6E0]">{text}</p>
      </div>
      <div className="rounded-full border-[0.5px] border-[#B5C6E0] p-1 hover:outline transition-all ease-in-out duration-300">
        <div className="text-[#B5C6E0]">{icon2}</div>
      </div>
    </Link>
  );
};

export default NavigationCard;
