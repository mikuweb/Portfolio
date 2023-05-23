import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile_1_circle.png";

const Hero = () => {
  return (
    <>
      {/* Section Container */}
      <div className="bg-stone-50 text-zinc-700 overflow-hidden">
        <div className="bg-white h-auto md:h-[90vh] md:mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center rounded-lg">
          {/* left Hi there */}
          <div className="md:pl-20 py-20 h-auto md:h-full flex flex-col justify-center gap-5 w-full md:w-3/5 text-center md:text-left">
            <p className="uppercase">Welcome to my world</p>
            <h1 className="text-5xl md:text-7xl font-semibold md:mb-7">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hi, I'm Miku
            </h1>
            <p className="text-xl md:text-3xl font-semibold text-sky-700">Front-End Web Developer</p>
            <p className="text-xl md:text-3xl md:mb-7">Based in Japan</p>
            <button className="bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200 hover:scale-105 w-52 md:w-60 text-lg md:text-2xl py-3 mx-auto md:m-0 rounded-lg">
              Contact Me
            </button>
          </div>
          {/* Right Picture */}
          <div className="w-1/2 md:w-2/5 md:pr-20 ">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="mb-10 md:mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
