import React from "react";
import SkillsCard from "../components/About/SkillsCard";
import skills from "../data/skills.json";
import Heading from "../components/Heading";

const Experience = () => {
  const devOpsSkills = skills.find((item) => item.name === "DevOps & Cloud");
  const frontEndSkills = skills.find((item) => item.name === "Frontend");
  const backEndSkills = skills.find((item) => item.name === "Backend");

  return (
    <div className="flex flex-col w-[90%] mx-auto justify-center items-center mb-10">
      <Heading name="tools & tech."/>

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
