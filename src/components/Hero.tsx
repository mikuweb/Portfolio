import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile_1_circle.png";

const Hero = () => {
  return (
    <>
      {/* Section Container */}
      <div className="border-2 h-auto md:h-[90vh] max-w-4xl mx-auto flex flex-col md:flex-row items-center relative overflow-hidden">
        {/* left Hi there */}
        <div className="border-2 md:pl-20 py-20 h-auto md:h-full flex flex-col justify-center gap-5 w-full md:w-2/3 text-center md:text-left">
          <p className="uppercase">Welcome to my world</p>
          <h1 className="text-5xl md:text-7xl font-bold md:mb-7">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm Miku
          </h1>
          <p className="md:text-3xl">Front-End Web Developer</p>
          <p className="md:text-3xl md:mb-7">Based in Japan</p>
          <button className="border-2 w-52 md:w-60 md:text-2xl py-3 mx-auto md:m-0 rounded-lg">
            Contact Me
          </button>
        </div>
        {/* Right Picture */}
        <div className="border-2 w-1/2 md:w-1/3">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
      </div>
    </>
  );
};

export default Hero;
