import React from "react";

const TechnologyCard = ({ Icon, Name, technologySite }) => {
  return (
    <div className="inline-flex items-center gap-2 pl-1 pr-1 text-[#fff] hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <a href={technologySite || "#"} target="_blank" rel="noopener noreferrer">
        <img src={Icon} alt={Name} className="w-6 h-6 md:w-8 md:h-8 p-1" />
      </a>
      <p className="block md:hidden font-poppins-medium text-lg">{Name}</p>
    </div>
  );
};

export default TechnologyCard;
