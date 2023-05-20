import { techs } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="border-2 h-auto max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden"
    >
      <h2 className="font-bold text-5xl p-14 ">Skills</h2>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="mb-4">These are the technologies I've worked with</p>
      <div className="border-2 w-4/5 mx-auto grid grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {techs.map(({ title, image, color, id }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${color}`}
          >
            <Image src={image} alt={title} width={55} height={55} className="mx-auto" />
            <p className="mt-2">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
