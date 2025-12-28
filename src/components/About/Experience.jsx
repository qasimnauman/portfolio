"use client";

import { useRef } from "react";
import { Globe, Plus } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import OrganizationLink from "./OrganizationLink";

const Experience = ({
  organizationName,
  position,
  timePeriod,
  location,
  linkedInURL,
  websiteURL,
  responsibilties,
  images,
}) => {
  // const [selectedImage, setSelectedImage] = useState(null);
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

  // const handleImageClick = (src) => {
  //   setSelectedImage(src);
  //   // console.log(src.desc);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

  // const handleOutsideClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  return (
    <div className="bg-[#b5c6e015] border border-[#b5c6e020] rounded-2xl p-6 md:p-8 hover:border-[#b5c6e050] transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-poppins-bold text-[#B5C6E0] mb-2">
            {organizationName}
          </h3>
          <p className="text-lg md:text-xl font-poppins-semi-bold text-[#B5C6E0]/80 mb-2">
            {position}
          </p>
          {location && (
            <p className="text-sm font-poppins-regular text-[#B5C6E0]/60">
              {location}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-3">
          <p className="text-sm font-poppins-medium text-[#B5C6E0]/70 bg-[#b5c6e010] px-4 py-2 rounded-lg whitespace-nowrap">
            {timePeriod}
          </p>
          <div className="flex gap-2">
            {linkedInURL && (
              <OrganizationLink
                to={linkedInURL}
                icon={<FaLinkedin className="h-5 w-5 text-[#B5C6E0]" />}
              />
            )}
            {websiteURL && (
              <OrganizationLink
                to={websiteURL}
                icon={<Globe className="h-5 w-5 text-[#B5C6E0]" />}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="space-y-3 mb-6">
        {responsibilties &&
          Object.values(responsibilties).map((text, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B5C6E0] flex-shrink-0"></span>
              <p className="font-poppins-regular text-sm md:text-base text-[#B5C6E0]/80 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
      </div>

      {/* Project Images Carousel */}
      {images && Object.keys(images).length > 0 && (
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth select-none snap-x"
          onMouseDown={handleMouseDown}
        >
          {Object.values(images).map((src, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  loading="lazy"
                  src={src.src}
                  alt={src.title || `Project ${idx + 1}`}
                  className="h-48 md:h-56 w-auto object-cover cursor-pointer transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-poppins-semi-bold text-sm mb-1">
                      {src.title}
                    </p>
                    <p className="text-white/80 font-poppins-regular text-xs line-clamp-2">
                      {src.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
