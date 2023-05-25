import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile_1_circle.png";
import 'animate.css';

const Hero = () => {
  return (
    <>
      {/* Section Container */}
      <div className="bg-stone-50 text-zinc-700 overflow-hidden">
        <div className="bg-white h-auto md:h-[90vh] max-w-4xl mx-auto flex flex-col md:flex-row items-center rounded-lg">
          {/* left Hi there */}
          <div className="md:pl-20 py-20 h-auto md:h-full flex flex-col justify-center gap-5 w-full md:w-3/5 text-center md:text-left">
            <p className="animate__animated animate__fadeInDown uppercase">Welcome to my world</p>
            <h1 className="animate__animated animate__fadeInDown text-5xl md:text-7xl font-semibold md:mb-7">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hi, I'm Miku
            </h1>
            <p className="animate__animated animate__fadeInDown animate__delay-1s text-xl md:text-3xl font-semibold text-sky-700">
              Front-End Web Developer
            </p>
            <p className="animate__animated animate__fadeInDown animate__delay-1s text-xl md:text-3xl md:mb-7">Based in Japan</p>
            <button className="animate__animated animate__fadeInDown animate__delay-1s bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200 hover:scale-105 hover:opacity-70 w-52 md:w-60 text-lg md:text-2xl py-3 mx-auto md:m-0 rounded-lg">
              <a href="mailto:mikukawata.224@gmail.com">Contact Me</a>
            </button>
          </div>
          {/* Right Picture */}
          <div className="animate__animated animate__fadeIn animate__slow	3s w-1/2 md:w-2/5 md:pr-20 ">
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
