import React from "react";
import { Globe } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import OrganizationLink from "./OrganizationLink";

const Experience = ({
  organizationName,
  position,
  timePeriod,
  linkedInURL,
  websiteURL,
  responsibilties,
  images,
}) => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-poppins-semi-bold">
            {organizationName}
          </h3>
          <p className="text-sm font-poppins-light">{position}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="font-poppins-light text-md">{timePeriod}</p>
          <div className="flex flex-row gap-2">
            <OrganizationLink
              to={linkedInURL}
              icon={<FaLinkedin className="h-5 w-5" />}
            />
            <OrganizationLink
              to={websiteURL}
              icon={<Globe className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-4 text-sm md:text-base list-disc list-inside">
        {responsibilties &&
          Object.values(responsibilties).map((text, idx) => (
            <li key={idx} className="font-poppins-regular text-md">
              {text}
            </li>
          ))}
      </ul>

      <div className="flex flex-row gap-4">
        {images &&
          Object.values(images).map((src, idx) => (
            <img
              key={idx}
              loading="lazy"
              src={src}
              alt={`img-${idx}`}
              className="rounded-lg h-40 object-cover cursor-pointer hover:outline hover:scale-101 transition-all ease-in-out duration-300"
            />
          ))}
      </div>
    </div>
  );
};

export default Experience;
