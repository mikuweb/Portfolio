import Image from "next/image";
import logoImg from "../../public/images/logo_4.png";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleHamburger = () => {
    setNav(!nav);
  };

  const handleLink = (section: string) => {
    nav == true && setNav(false);

    let element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-stone-50/80 text-zinc-700 flex justify-between items-center h-24 w-full mx-auto px-4 md:px-16">
      <div>
        <Image src={logoImg} alt="Logo" className="w-24 md:w-36" />
      </div>
      <ul className="hidden md:flex">
        <li
          className="py-2 px-4 cursor-pointer hover:opacity-70"
          onClick={() => handleLink("projects")}
        >
          Projects
        </li>
        <li
          className="py-2 px-4 cursor-pointer hover:opacity-70"
          onClick={() => handleLink("skills")}
        >
          Skills
        </li>
        <li
          className="py-2 px-4 cursor-pointer hover:opacity-70"
          onClick={() => handleLink("about")}
        >
          About Me
        </li>
        <li
          className="py-2 px-4 rounded-lg bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200  cursor-pointer hover:opacity-70"
          onClick={() => handleLink("contact")}
        >
          Contact
        </li>
      </ul>
      <div onClick={handleHamburger} className="block md:hidden cursor-pointer">
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
        <li
          onClick={() => handleLink("projects")}
          className="p-4 text-lg cursor-pointer"
        >
          Projects
        </li>
        <li
          onClick={() => handleLink("skills")}
          className="p-4 text-lg cursor-pointer"
        >
          Skills
        </li>
        <li
          onClick={() => handleLink("about")}
          className="p-4 text-lg cursor-pointer"
        >
          About
        </li>
        <li className="py-4">
          <button
            onClick={() => handleLink("contact")}
            className="py-2 px-4 text-lg rounded-lg bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
