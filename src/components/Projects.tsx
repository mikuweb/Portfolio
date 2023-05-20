import React from "react";
import { projects } from "../constants/constants";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Projects = () => {
  return (
    // Section container
    <div
      id="projects"
      className="border-2 text-slate-700 h-auto max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden"
    >
      <h2 className="font-bold text-5xl p-14 ">Projects</h2>
      {/* Cards container */}
      <div className="border-2 w-4/5 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* cards */}
        {projects.map((project) => (
          // Card
          <div
            key={project.id}
            className="border-2 h-fit bg-white rounded-lg shadow-lg flex-col items-center"
          >
            <div className="border-2 duration-200 hover:scale-105 h-60 bg-slate-200 rounded-t-lg">
              <span className="">{project.image}</span>
            </div>
            {/* Contents */}
            <div className="border-2 p-5 md:p-7 gap-3 flex flex-col items-center">
              <p className="text-2xl font-bold">{project.title}</p>
              <span className="w-12 h-1 my-3 border-none bg-sky-200"></span>
              <p>{project.description}</p>
              <div className="font-bold">Stack</div>
              <div className="w-full flex justify-around">
                {project.tags.map((entry, index) => (
                  <div key={index}>{entry}</div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  className="text-slate-500 transition duration-200 hover:scale-110 rounded-full p-2 cursor-pointer"
                  href={project.source}
                >
                  <AiFillGithub size="2rem" />
                </Link>
                <Link
                  className="text-slate-500 transition duration-200 hover:scale-110 rounded-full p-2 cursor-pointer"
                  href={project.visit}
                >
                  <AiOutlineLink size="2rem" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
