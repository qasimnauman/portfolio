import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechnologyCard from "./TechCard";

const ProjectCard = ({
  Name,
  ImgLink,
  GitHubLink,
  WebSite,
  Description,
  technologies,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center w-[400px] rounded-3xl bg-[#3e3cbd]">
        <div className="p-[10px] relative h-[200px]">
          <Image
            src={ImgLink}
            alt={Name || "Project Image"}
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="p-4 text-gray-200">
          <div className="flex flex-row justify-between items-center mb-2">
            <h3 className="font-poppins-medium text-2xl font-medium">{Name}</h3>
            <div className="flex flex-row gap-4">
              <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-white hover:scale-120 transition-all duration-300"
                  size="xl"
                />
              </a>
              <a
                href={WebSite}
                className="relative inline-block after:content-['_↗'] after:ml-1 text-white pb-0.5 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300"
              >
                View Live
              </a>
            </div>
          </div>
          <p className="font-poppins-regular text-xs tracking-wider mb-4">
            {Description}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 mb-4">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              Icon={tech.icon}
              Name={tech.name}
              technologySite={tech.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
