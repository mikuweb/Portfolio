import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="bg-[#507888] text-stone-50 md:h-fit w-full mx-auto flex flex-col items-center text-center overflow-hidden"
      >
        <h2 className="font-bold text-5xl p-14 ">Contact</h2>
        {/* Contents Container */}
        <div className="flex flex-col items-center gap-5 md:px-4 pb-14">
          {/* Message */}
          <div className="flex flex-col gap-2 md:text-lg">
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm actively seeking new opportunities{" "}
              <br className="md:hidden" />
              as a front-end web developer,
              <br />
              and would be thrilled to hear from you!
            </p>
            <p>Please feel free to reach out.</p>
          </div>
          {/* SNS Links */}
          <div className="text-stone-50 flex justify-center items-center">
            <a
              className="transition duration-300 ease-in-out rounded-full p-2 hover:opacity-70 cursor-pointer"
              href="https://google.com"
            >
              <AiFillGithub size="3rem" />
            </a>
            <a
              className="transition duration-300 ease-in-out rounded-full p-2 hover:opacity-70 cursor-pointer"
              href="https://google.com"
            >
              <AiFillLinkedin size="3rem" />
            </a>
            <a
              className="transition duration-300 ease-in-out rounded-full p-2 hover:opacity-70 cursor-pointer"
              href="https://google.com"
            >
              <AiFillInstagram size="3rem" />
            </a>
          </div>
          {/* Email Button */}
          <button className="bg-stone-50 hover:bg-opacity-70 hover:scale-105 text-zinc-700 text-lg md:text-2xl font-semibold w-52 md:w-60 py-3 mx-auto rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
