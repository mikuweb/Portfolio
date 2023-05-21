import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="text-slate-600 flex justify-center items-center">
      <a
        className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
        href="https://google.com"
      >
        <AiFillGithub size="3rem" />
      </a>
      <a
        className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
        href="https://google.com"
      >
        <AiFillLinkedin size="3rem" />
      </a>
      <a
        className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
        href="https://google.com"
      >
        <AiFillInstagram size="3rem" />
      </a>
    </div>
  );
};

export default Contact;
