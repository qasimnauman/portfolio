import React from "react";
import ProjectCard from "../components/Projects/ProjectCards";
import projects from "../data/projects.json";
import Heading from "../components/Heading";

const Projects = () => {
  const fullRowsCount = Math.floor(projects.length / 3) * 3;
  const fullRowProjects = projects.slice(0, fullRowsCount);
  const remainingProjects = projects.slice(fullRowsCount);

  return (
    <div
      id="projects"
      className="mb-10 w-[90%] mx-auto flex flex-col items-center justify-center"
    >
      <Heading name="projects." />

      {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center mb-10">
        {fullRowProjects.map((project, index) => (
          <ProjectCard
            key={index}
            Name={project.name}
            ImgLink={project.image}
            GitHubLink={project.github}
            WebSite={project.website}
            Description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center gap-4 m-10">
        {fullRowProjects.map((project, index) => (
          <ProjectCard
            key={index}
            Name={project.name}
            ImgLink={project.image}
            GitHubLink={project.github}
            WebSite={project.website}
            Description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>

      {/* Remaining 1 or 2 projects center aligned */}
      <div className="flex flex-row items-center gap-6">
        {remainingProjects.map((project, index) => (
          <ProjectCard
            key={index + fullRowsCount} // Ensure unique key
            Name={project.name}
            ImgLink={project.image}
            GitHubLink={project.github}
            WebSite={project.website}
            Description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
