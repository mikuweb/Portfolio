import React from "react";
import { projects } from "../constants/constants";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    // Section container
    <div
      id="projects"
      className="bg-stone-50 text-zinc-700 h-auto mx-auto flex flex-col items-center relative overflow-hidden"
    >
      <h2 className="font-bold text-5xl p-14 ">Projects</h2>
      {/* Cards container */}
      <div className="max-w-4xl w-4/5 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* cards */}
        {projects.map((project) => (
          // Card
          <div
            key={project.id}
            className="h-fit max-w-sm bg-white rounded-lg shadow-lg shadow-stone-300 flex-col items-center"
          >
            <div className="border-b border-stone-300 h-fit rounded-t-lg">
              <Image
                className="mx-auto"
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
              />
            </div>
            {/* Contents */}
            <div className="p-5 md:p-7 gap-3 flex flex-col items-center">
              <p className="text-2xl font-bold">{project.title}</p>
              <span className="w-12 h-1 my-3 border-none bg-sky-100 rounded-full"></span>
              <p>{project.description}</p>
              <div className="font-bold">Stack</div>
              <div className="w-full grid grid-cols-3 gap-2">
                {project.tags.map((entry, index) => (
                  <div
                    key={index}
                    className="py-1 px-1 text-center border border-stone-300 rounded-full"
                  >
                    {entry}
                  </div>
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
