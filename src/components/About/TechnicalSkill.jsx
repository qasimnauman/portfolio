import React from "react";

const TechnicalSkill = ({ title, description }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col md:gap-1">
        <h3 className="text-xl font-poppins-semi-bold">{title}</h3>
        <p className="text-md font-poppins-light">{description}</p>
      </div>
    </div>
  );
};

export default TechnicalSkill;
