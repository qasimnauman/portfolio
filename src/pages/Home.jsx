import React from "react";
import {
  FaCircleChevronRight,
  FaCircleUser,
  FaCalendarDay,
} from "react-icons/fa6";
import NavigationCard from "../components/Home/NavigationCards";

const Home = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-center px-8 md:py-16 gap-12">
        <div className="w-full md:w-[80%] flex flex-col">
          <div className="md:text-8xl text-4xl text-left md:text-center mt-16 leading-normal md:leading-36 md:tracking-wide text-[#B5C6E0] font-poppins-bold">
            I Build Scalable, Compliant Cloud Infrastructures
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-start md:justify-center md:items-start">
            <div>
              <NavigationCard
                to="about"
                icon1={<FaCircleUser className="h-8 w-8" />}
                icon2={<FaCircleChevronRight className="h-5 w-5" />}
                text="More About Me"
              />
            </div>
            <div>
              <NavigationCard
                to="https://cal.com/qasimnauman"
                icon1={<FaCalendarDay className="h-8 w-8" />}
                icon2={<FaCircleChevronRight className="h-5 w-5" />}
                text="Schedule a Consultation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NewsLetter Subscription */}
      <div className="w-[90%] md:w-[60%] m-10 mx-auto flex flex-col gap-4 justify-center items-center text-[#B5C6E0] rounded-lg bg-[#b5c6e028] border border-[#6e6d6d]">
        <div className="text-center mt-4 w-full">
          <h3 className="font-poppins-bold text-lg md:text-3xl">
            Subscribe to Qasim's Newsletter
          </h3>
          <p className="font-poppins-regular text-sm md:text-lg mt-2">
            I occasionally write about tech
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 max-w-[80%] mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 p-2 rounded-lg text-sm sm:text-base md:text-lg font-poppins-regular text-[#B5C6E0] bg-transparent border border-[#6e6d6d] focus:outline-none focus:ring-2 focus:ring-[#B5C6E0] focus:border-transparent placeholder-[#B5C6E0] placeholder-opacity-70"
          />
          <button className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg text-[#1E2A44] bg-[#B5C6E0] rounded-lg font-poppins-medium hover:bg-[#A0B0D0] transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
