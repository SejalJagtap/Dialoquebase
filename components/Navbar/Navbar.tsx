"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLinks";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import s from "../../assets/Echelon Logo.png"
import { Button } from "../ui/button";
const navLinks = [
  {
    id: "0",
    title: "Integrations",
    path: "#Integrations",
  },
  {
    id: "1",
    title: "Pricing",
    path: "#Pricing",
  },
  {
    id: "2",
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border bg-black py-3 top-0 left-0 right-0 z-10  lg:px-24 md:px-24 px-3 border-gray-800">
      <div className="flex container  flex-wrap items-center justify-between mx-auto px-4 ">
      <Link href={"/"} className=" text-white  flex">
          {/* Use the Image component */}
          <Image src={s} alt="Your Image Alt" width={60} height={60} />
          
        </Link>
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <Bars3Icon className="h-5 w-5" /> */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <Button  className=" bg-gradient-to-br from-purple-800 to-cyan-400  ">&nbsp; Login  &nbsp;  </Button>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;