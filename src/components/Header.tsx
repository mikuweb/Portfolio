import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-8 p-4 md:grid-cols-5 md:grid-rows-2 md:gap-2 md:p-8">
      {/* LOGO */}
      <div className="flex flex-row items-center col-span-1 md:col-span-2">
        <Link href="/" className="flex items-center">
          <span>icon</span>
          <span className='className="pl-2"'>Portfolio</span>
        </Link>
      </div>
      {/* LINKS */}
      <div className="flex justify-center col-span-2 md:col-span-3">
        <ul className="flex flex-row justify-between space-x-4 text-lg ">
          <li>
            <Link href="#projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <span>Technologies</span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* SNS */}
      <div className="flex justify-end items-center col-span-2 md:col-span-1">
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
    </div>
  );
};

export default Header;
