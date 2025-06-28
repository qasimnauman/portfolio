import React from "react";
import {
  FaCircleChevronRight,
  FaCircleUser,
  FaCalendarDay,
} from "react-icons/fa6";
import NavigationCard from "../components/Home/NavigationCards";

const Home = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
        <div className="flex flex-col items-center w-full">
          <div className="text-8xl mt-16 leading-35 tracking-wide text-[#B5C6E0] font-poppins-bold text-center">
            I Build Scalable, Compliant Cloud Infrastructures
          </div>
          <div className="mt-12 flex flex-row gap-4 justify-center items-center">
            <NavigationCard
              to="https://cal.com/qasimnauman"
              icon1={<FaCalendarDay className="h-8 w-8" />}
              icon2={<FaCircleChevronRight className="h-5 w-5" />}
              text="Schedule a Consultation"
            />
            <NavigationCard
              to="about"
              icon1={<FaCircleUser className="h-8 w-8" />}
              icon2={<FaCircleChevronRight className="h-5 w-5" />}
              text="About Me"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
