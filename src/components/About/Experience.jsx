import React, { useRef } from "react";
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
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const startX = e.pageX - carousel.offsetLeft;
    const scrollLeft = carousel.scrollLeft;

    const handleMouseMove = (e) => {
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 4;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      carousel.removeEventListener("mousemove", handleMouseMove);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseUp);
    };

    carousel.addEventListener("mousemove", handleMouseMove);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseUp);
  };
  return (
    <div className="flex flex-col gap-6 mt-6">
      {/* Header */}
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-poppins-semi-bold">
            {organizationName}
          </h3>
          <p className="text-sm font-poppins-light">{position}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-md font-poppins-light">{timePeriod}</p>
          <div className="flex flex-row gap-2">
            {linkedInURL && (
              <OrganizationLink
                to={linkedInURL}
                icon={<FaLinkedin className="h-5 w-5" />}
              />
            )}
            {websiteURL && (
              <OrganizationLink
                to={websiteURL}
                icon={<Globe className="h-5 w-5" />}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="mt-4 flex flex-col gap-4 text-sm md:text-base list-disc list-inside">
        {responsibilties &&
          Object.values(responsibilties).map((text, idx) => (
            <li key={idx} className="font-poppins-regular text-md">
              {text}
            </li>
          ))}
      </ul>

      <div
        ref={carouselRef}
        className="flex flex-row flex-nowrap gap-4 px-4 py-4 snap-x overflow-x-scroll scrollbar-hide scroll-smooth select-none"
        onMouseDown={handleMouseDown}
      >
        {images &&
          Object.values(images).map((src, idx) => (
            <div key={idx} className="snap-start flex-shrink-0">
              <img
                loading="lazy"
                src={src}
                alt={`img-${idx}`}
                className="rounded-lg h-40 object-cover cursor-pointer snap-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
