import React from "react";
import { NavLink } from "react-router-dom";

import AccountMenu from "./AccountMenu";
import Menu from "./Menu/";
import SvgIcon from "../SvgIcon";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-30 flex justify-center w-full bg-white border-b border-green-500 shadow">
      <div className="relative w-full px-8 py-4 md:py-0">
        <nav className="flex items-center justify-between h-full">
          <AccountMenu />
          <NavLink to="/" className="flex items-center justify-center">
            <SvgIcon
              className="w-10 h-10 text-green-700 fill-current sm:w-16 sm:h-16"
              name="logo"
            />
            <div className="p-2 mt-3 font-semibold">
              <span className="text-lg text-yellow-700 sm:text-2xl ">REAL</span>
              <span className="text-lg text-gray-700 sm:text-2xl ">HOMES</span>
            </div>
          </NavLink>
          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
