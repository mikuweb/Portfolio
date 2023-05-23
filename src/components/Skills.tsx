import { techs } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-stone-50 text-zinc-700 md:h-screen w-full mx-auto flex flex-col items-center relative overflow-hidden"
    >
      <h2 className="font-bold text-5xl p-14 ">Skills</h2>
      <div className="mb-5 w-4/5 text-center flex flex-col gap-2">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="">These are the technologies I've worked with.</p>
        <p className="">
          I continue to learn further skill sets as a professional front-end
          developer.
        </p>
      </div>
      <div className="bg-white p-3 w-4/5 max-w-2xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 text-center rounded-lg">
        {techs.map(({ title, image, style, iconColor, id }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
          >
            <Image
              src={image}
              alt={title}
              width={55}
              height={55}
              // color={iconColor ? { iconColor } : ""} TODO:How to set Color for only Tailwind & TypeScript?
              className="mx-auto"
            />
            <p className="mt-2">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
