import React from "react";
import Skills from "./Skills";

const SkillsCard = ({ skills }) => {
  if (!skills) return null;

  const skillList = skills.skills || [];

  // Split the skills into chunks of 3
  const chunks = [];
  for (let i = 0; i < skillList.length; i += 3) {
    chunks.push(skillList.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center pr-10 pl-10 pt-4 pb-4 border border-amber-100 rounded-2xl mt-8">
      <h2 className="font-poppins-medium text-white text-2xl mb-4">
        {skills.name || "Skill Name"}
      </h2>
      
      {/* Dynamic columns */}
      <div className="flex flex-row gap-10 justify-between items-start w-full">
        {chunks.map((chunk, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 items-start">
            {chunk.map((skill, skillIndex) => (
              <Skills
                key={`${colIndex}-${skillIndex}`}
                title={skill.name}
                experience={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
