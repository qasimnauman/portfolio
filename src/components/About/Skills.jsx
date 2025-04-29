import React from "react";

const Skills = ({ title, experience, icon }) => {
  return (
    <div className="text-white flex gap-3 justify-center items-center">
      <div>
        <img src={icon} alt={title} className="w-8" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{experience}</p>
      </div>
    </div>
  );
};

export default Skills;
