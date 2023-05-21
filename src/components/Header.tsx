import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // TODO: how to apply scroll-smooth?
  return (
    <div className="bg-whitetext-slate-600 flex justify-between items-center h-24 w-full mx-auto px-4 md:px-32">
      <Link href="/">
        <div className="w-full text-3xl font-bold">LOGO</div>
      </Link>
      <ul className="hidden md:flex">
        <li className="py-2 px-4">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="py-2 px-4">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="py-2 px-4">
          <Link href="#aboutme">About Me</Link>
        </li>
        <li className="py-2 px-4 rounded-lg bg-blue-100">
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
        <li className="p-4 text-lg ">Projects</li>
        <li className="p-4 text-lg ">Skills</li>
        <li className="p-4 text-lg ">About</li>
        <li className="py-4">
          <span className="py-2 px-4 text-lg rounded-lg bg-blue-100">
            Contact
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
