import React from "react";
import { NavLink } from "react-router-dom";
import AccountMenu from "../nav/AccountMenu";
import Menu from "../nav/Menu";
import SvgIcon from "../svg/SvgIcon";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-20 flex justify-center w-full bg-gray-900">
      <div className="relative w-full px-8 py-4 md:py-0">
        <nav className="flex items-center justify-between h-full">
          <AccountMenu />
          <NavLink to="/" className="flex items-center justify-center md:mr-5">
            <SvgIcon className="w-10 h-10" name="logo" />
            <div className="p-2 mt-3">
              <span className="text-sm text-white md:text-xl">REAL</span>
              <span className="text-sm text-orange-500 md:text-xl">HOMES</span>
            </div>
          </NavLink>
          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
