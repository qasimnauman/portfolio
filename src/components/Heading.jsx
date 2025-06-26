import React from "react";

const Heading = ({ name }) => {
  return (
    <div className="flex flex-row items-center text-white w-full gap-4">
      <h1 className="font-poppins-extra-bold text-6xl text-[#B5C6E0] whitespace-nowrap">
        {name}
      </h1>
      <div className="flex-1 h-1 bg-[#B5C6E0] rounded-2xl"></div>
    </div>
  );
};

export default Heading;
