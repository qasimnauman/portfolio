import React from "react";
import SkillsCard from "../components/About/SkillsCard";
import skills from "../data/skills.json";

const Experience = () => {
  const devOpsSkills = skills.find((item) => item.name === "DevOps & Cloud");
  const frontEndSkills = skills.find((item) => item.name === "Frontend");
  const backEndSkills = skills.find((item) => item.name === "Backend");

  return (
    <div className="flex flex-col w-[90%] mx-auto justify-center items-center mb-10">
      <div className="flex flex-row items-center text-white w-full">
        <h1 className="mr-8 font-poppins-extra-bold text-6xl text-[#B5C6E0] ">
          experience.
        </h1>
        <div className="h-1 w-full bg-[#B5C6E0] rounded-2xl"></div>
      </div>

      <div className="flex flex-col items-center text-white w-full mt-4">
        <div className="flex flex-col items-start w-[70%] text-white">
          <h3>What I am good at.</h3>
        </div>

        <div className="flex flex-row gap-4 justify-between w-[90%] items-start mt-8">
          <SkillsCard skills={devOpsSkills} />
          <SkillsCard skills={frontEndSkills} />
          <SkillsCard skills={backEndSkills} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
