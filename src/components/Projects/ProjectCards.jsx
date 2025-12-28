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
  impact,
  featured,
}) => {
  return (
    <>
      <div className={`flex flex-col justify-center w-[400px] rounded-3xl ${featured ? 'bg-gradient-to-br from-[#3e3cbd] to-[#5e4cff]' : 'bg-[#3e3cbd]'} ${featured ? 'ring-2 ring-[#B5C6E0]/30' : ''}`}>
        {featured && (
          <div className="px-4 pt-3 pb-1">
            <span className="text-xs font-poppins-semi-bold bg-[#B5C6E0]/20 px-3 py-1 rounded-full text-[#B5C6E0]">
              Featured Project
            </span>
          </div>
        )}
        <div className="p-[10px] relative h-[200px]">
          {ImgLink ? (
            <Image
              src={ImgLink}
              alt={Name || "Project Image"}
              fill
              className="rounded-2xl object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#2e2cbd] rounded-2xl flex items-center justify-center">
              <p className="text-gray-400 font-poppins-regular">No Image Available</p>
            </div>
          )}
        </div>
        <div className="p-4 text-gray-200">
          <div className="flex flex-row justify-between items-center mb-2">
            <h3 className="font-poppins-medium text-2xl font-medium">{Name}</h3>
            <div className="flex flex-row gap-4">
              {GitHubLink && (
                <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-white hover:scale-120 transition-all duration-300"
                    size="xl"
                  />
                </a>
              )}
              {WebSite && (
                <a
                  href={WebSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-['_↗'] after:ml-1 text-white pb-0.5 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300"
                >
                  View Live
                </a>
              )}
            </div>
          </div>
          <p className="font-poppins-regular text-xs tracking-wider mb-4">
            {Description}
          </p>
          
          {/* Impact Metrics */}
          {impact && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(impact).map(([key, value]) => (
                <span
                  key={key}
                  className="bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-poppins-medium text-blue-300"
                >
                  {value}
                </span>
              ))}
            </div>
          )}
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
