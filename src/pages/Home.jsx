import React from "react";
import Typewriter from "typewriter-effect";
import ProfileImage from "../assets/images/image.png";

const Home = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-16 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-white text-lg md:text-xl font-poppins-regular">
            Hello, I’m Qasim,
          </p>
          <div className="text-[#B5C6E0] text-5xl md:text-7xl font-poppins-black leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "DevOps Engineer",
                ],
                autoStart: true,
                cursor: "|",
                // pauseFor: 2000,
                loop: true,
                delay: 150,
                deleteSpeed: 75,
              }}
            />
          </div>
          {/* <h1 className="text-[#B5C6E0] text-5xl md:text-7xl font-poppins-black leading-tight">
            DevOps Engineer
          </h1> */}
          <a
            href="mailto:m.qasimnauman@gmail.com"
            className="mt-4 text-white underline underline-offset-4 font-poppins-regular"
          >
            Contact Me
          </a>
        </div>

        {/* Right Section */}
        <div>
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-72 md:w-96 rounded-3xl object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
