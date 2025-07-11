import React, { useRef } from "react";
import { Globe, Plus } from "lucide-react";
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
                // onClick={() => handleImageClick(src)}
                loading="lazy"
                src={src.src}
                alt={`img-${idx}`}
                className="rounded-lg h-40 object-cover cursor-pointer snap-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
      </div>

      {/* Modal Popup for Image
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            style={{ borderWidth: "0.5px", borderColor: "#6e6d6d" }}
            className="flex flex-col max-w-4xl text-white bg-gray-800 rounded-lg shadow-lg py-6 px-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-poppins-bold">{selectedImage.title}</h3>
              <button
                className="border-[0.5px] rounded-full p-1 text-sm rotate-45 hover:scale-105 transition-transform duration-300 border-rounded-lg"
                onClick={closeModal}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-row justify-between gap-8">
              <div className="">
                <p className="text-md font-poppins-regular text-gray-300">
                  {selectedImage.desc}
                </p>
              </div>

              <div className="">
                <img
                  src={selectedImage.src}
                  alt="Expanded"
                  className="w-96 h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Experience;
