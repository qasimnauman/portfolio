import React from "react";
import ExperienceCard from "../components/About/SkillsCard";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col w-[90%] mx-auto justify-center items-center mb-10"
      >
        <div className="flex flex-row items-center text-white w-full">
          <h1 className="mr-8 font-poppins-extra-bold text-6xl text-[#B5C6E0] ">
            about.
          </h1>
          <div className="h-1 w-[100%] bg-[#B5C6E0] rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-4 w-[70%] items-start mt-8">
          <p className="text-white text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            pariatur provident accusamus eligendi, libero tempora deleniti id
            earum a esse hic dolorum consequatur quaerat facere soluta
            voluptatum dolorem reprehenderit vero.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
