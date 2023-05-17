import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <Link href="/">
        <div className="w-full text-3xl font-bold">LOGO</div>
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="p-4">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="p-4">
          <Link href="#aboutme">About Me</Link>
        </li>
        <li className="p-4 border-2">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-100 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">LOGO</h1>
        <li className="p-4 border-b">Projects</li>
        <li className="p-4 border-b">Skills</li>
        <li className="p-4 border-b">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
    // <div className="grid grid-cols-5 grid-rows-1 gap-8 p-4 md:grid-cols-5 md:grid-rows-2 md:gap-2 md:p-8">
    //   {/* LOGO */}
    //   <div className="flex flex-row items-center col-span-1 md:col-span-2">
    //     <Link href="/" className="flex items-center">
    //       <span>icon</span>
    //       <span className='className="pl-2"'>Portfolio</span>
    //     </Link>
    //   </div>
    //   {/* LINKS */}
    //   <div className="flex justify-center col-span-2 md:col-span-3">
    //     <ul className="flex flex-row justify-between space-x-4 text-lg ">
    //       <li>
    //         <Link href="#projects">
    //           <span>Projects</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="#tech">
    //           <span>Technologies</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="#about">
    //           <span>About</span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* SNS */}
    //   <div className="flex justify-end items-center col-span-2 md:col-span-1">
    //     <a
    //       className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
    //       href="https://google.com"
    //     >
    //       <AiFillGithub size="3rem" />
    //     </a>
    //     <a
    //       className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
    //       href="https://google.com"
    //     >
    //       <AiFillLinkedin size="3rem" />
    //     </a>
    //     <a
    //       className="transition duration-300 ease-in-out  rounded-full p-2 hover:bg-gray-700 cursor-pointer"
    //       href="https://google.com"
    //     >
    //       <AiFillInstagram size="3rem" />
    //     </a>
    //   </div>
    // </div>
  );
};

export default Header;
