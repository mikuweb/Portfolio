import { aboutMe } from "@/constants/constants";
import React from "react";

const About = () => {
  return (
    <>
      {/* Section Container */}
      <div
        id="about"
        className="border-2 text-slate-700 h-screen max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden"
      >
        <h2 className="font-bold text-5xl p-14 ">About Me</h2>
        {/* White container */}
        <div className="border-2 h-auto md:mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:rounded-lg">
          {/* Left Picture */}
          <div className="w-1/2 md:w-2/5"></div>
          {/* Right About me */}
          <div className="w-full md:w-3/5 h-auto flex flex-col justify-center">
            <ul className="">
              {aboutMe.map(({ title, sentence, id }) => (
                <li key={id}>
                  <p>{title}</p>
                  <p>{sentence}</p>
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
