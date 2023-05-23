import { aboutMe } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import AboutPic from "../../public/images/profile_2_circle.png";

const About = () => {
  return (
    <>
      {/* Section Container */}
      <div
        id="about"
        className="bg-stone-50 text-zinc-700 md:h-fit mx-auto flex flex-col items-center relative overflow-hidden"
      >
        <h2 className="font-bold text-5xl p-14 ">About Me</h2>
        {/* White container */}
        <div className="bg-white h-auto max-w-4xl mx-auto flex flex-col md:flex-row items-center md:rounded-lg md:mb-14">
          {/* Left Picture */}
          <div className="w-1/2 md:w-2/5 p-2">
            <Image src={AboutPic} alt="About Me Picture" className="mt-5" />
          </div>
          {/* Right About me */}
          <div className="p-4 w-full md:w-3/5 flex flex-col justify-center">
            <ul className="[&>*:not(:last-child)]:mb-6">
              {aboutMe.map(({ title, sentence, id }) => (
                <li key={id}>
                  <p className="text-lg md:text-xl font-semibold mb-1">
                    {title}
                  </p>
                  <div className="w-11 h-1 mb-1 border-none bg-sky-100 rounded-full"></div>
                  <p className="text-lg">{sentence}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
