import Image from "next/image";
import logoImg from "../../public/images/logo_4_circle.png";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-stone-50 text-zinc-700 flex justify-between items-center h-24 w-full mx-auto px-4 md:px-16">
      <Link href="/">
        <Image src={logoImg} alt="Logo" className="w-24 md:w-36" />
      </Link>
      <ul className="hidden md:flex">
        <li className="py-2 px-4">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="py-2 px-4">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="py-2 px-4">
          <Link href="#about">About Me</Link>
        </li>
        <li className="py-2 px-4 rounded-lg bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] flex flex-col items-center h-full border-r border-r-zinc-700 bg-sky-50/95 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="w-full m-4 pl-4">
          <Image src={logoImg} alt="Logo" className="w-20" />
        </div>
        <li className="p-4 text-lg ">Projects</li>
        <li className="p-4 text-lg ">Skills</li>
        <li className="p-4 text-lg ">About</li>
        <li className="py-4">
          <span className="py-2 px-4 text-lg rounded-lg bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200">
            Contact
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
