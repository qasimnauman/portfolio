import React from "react";
import ProjectCard from "../components/Projects/ProjectCards";
import projects from "../data/projects.json";

const Projects = () => {
  const fullRowsCount = Math.floor(projects.length / 3) * 3;
  const fullRowProjects = projects.slice(0, fullRowsCount);
  const remainingProjects = projects.slice(fullRowsCount);

  return (
    <div id="projects" className="m-4 flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center mb-4">
        <h2 className="font-poppins-bold text-white text-4xl">Projects</h2>
      </div>

      {/* Full rows (divisible by 3) */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center mb-10">
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
