"use client";

import Link from "next/link";

const NavigationCard = ({ to, icon1, icon2, text }) => {
  const isExternal = to.startsWith("http");
  
  return (
    <Link
      href={to}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex flex-row items-center justify-between gap-4 p-4 bg-[#B5C6E0]/[0.08] border border-[#B5C6E0]/20 rounded-xl hover:bg-[#B5C6E0]/[0.12] hover:border-[#B5C6E0]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B5C6E0] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
    >
      <div className="flex flex-row items-center gap-3">
        <div className="text-[#B5C6E0]">{icon1}</div>
        <p className="font-poppins-medium text-[#E8EEF7]">{text}</p>
      </div>
      <div className="rounded-full border-[0.5px] border-[#B5C6E0] p-1 hover:outline transition-all ease-in-out duration-300">
        <div className="text-[#B5C6E0]">{icon2}</div>
      </div>
    </Link>
  );
};

export default NavigationCard;
