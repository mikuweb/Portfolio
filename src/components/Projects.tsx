import React from "react";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    // Section container
    <div
      id="projects"
      className="border-2 h-auto max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden"
    >
      <h2 className="font-bold text-5xl p-14 ">Projects</h2>
      {/* Cards container */}
      <div className="border-2 max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {/* cards */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 h-fit bg-white rounded-lg shadow-lg flex-col"
          >
            <div className="border-2 bg-slate-200 rounded-t-lg">
              <span>{project.image}</span>
            </div>
            <div className="border-2 p-1">
              <p>{project.title}</p>
              <p>{project.description}</p>
              <div>
                {project.tags.map((entry) => (
                  <div key={entry}>{entry}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
