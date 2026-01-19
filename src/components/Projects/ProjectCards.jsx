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
      <div className={`flex flex-col justify-center w-[400px] rounded-2xl transition-all duration-300 ${
        featured 
          ? 'bg-[#B5C6E0]/[0.12] border-2 border-[#B5C6E0]/40 shadow-2xl shadow-[#B5C6E0]/20 hover:shadow-[#B5C6E0]/30' 
          : 'bg-[#B5C6E0]/[0.08] border border-[#B5C6E0]/20 hover:border-[#B5C6E0]/40 hover:bg-[#B5C6E0]/[0.12]'
      } hover:scale-[1.02]`}>
        {featured && (
          <div className="px-4 pt-3 pb-1">
            <span className="text-xs font-poppins-semi-bold bg-[#B5C6E0]/30 px-3 py-1.5 rounded-full text-[#E8EEF7] border border-[#B5C6E0]/40">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              quality={85}
            />
          ) : (
            <div className="w-full h-full bg-[#B5C6E0]/[0.05] rounded-2xl flex items-center justify-center">
              <p className="text-[#D0DDF0]/50 font-poppins-regular">No Image Available</p>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between items-center mb-2">
            <h3 className="font-poppins-medium text-2xl text-[#E8EEF7]">{Name}</h3>
            <div className="flex flex-row gap-4">
              {GitHubLink && (
                <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[#D0DDF0] hover:text-[#E8EEF7] hover:scale-110 transition-all duration-300"
                    size="xl"
                  />
                </a>
              )}
              {WebSite && (
                <a
                  href={WebSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-['_↗'] after:ml-1 text-[#D0DDF0] hover:text-[#E8EEF7] pb-0.5 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-[#E8EEF7] hover:before:w-full before:transition-all before:duration-300"
                >
                  View Live
                </a>
              )}
            </div>
          </div>
          <p className="font-poppins-regular text-sm tracking-wider mb-4 text-[#D0DDF0]/85">
            {Description}
          </p>
          
          {/* Impact Metrics */}
          {impact && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(impact).map(([key, value]) => (
                <span
                  key={key}
                  className="bg-[#B5C6E0]/10 border border-[#B5C6E0]/30 px-3 py-1 rounded-full text-xs font-poppins-medium text-[#B5C6E0]"
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
