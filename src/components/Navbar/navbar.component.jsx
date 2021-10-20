import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";
const NavSm = () => {
  return (
    <>
      <div className="text-white px-4 py-4 flex items-center justify-between">
        <div className=" text-xl font-bold mb-1">
          <h3>IT ALL STARTS HERE</h3>
          <span className="text-gray-400 text-xs flex items-center">
            KANPUR <BsChevronCompactRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex gap-3 bg-white items-center px-3 py-2 rounded">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, sports And activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-6 items-center flex justify-between">
        <div className="flex item-center gap-3 w-1/2">
          <div className="w-12 h-12">
            <img
              src="https://images.8tracks.com/avatar/i/009/706/621/BMS_LOGO_IMG-9950.jpg?rect=0,0,400,400&q=98&fm=jpg&fit=max"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex  bg-white items-center px-3  py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, sports And activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            KANPUR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-700 p-4">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
