import React from "react";
import { NavLink } from "react-router-dom";

import AccountMenu from "../AccountMenu";

const NavLinks = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full pl-6 pr-6 md:pl-0 md:flex md:justify-between pb-2 md:pb-0`}>
      <nav className="flex flex-col text-blue-600 md:flex-row md:items-center md:my-0 text-md lg:text-lg md:mb-0">
        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-4 py-2 text-lg no-underline transition duration-500 ease-in-out shadow hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/realstateforsale">
          Buy
        </NavLink>

        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-4 py-2 text-lg no-underline transition duration-500 ease-in-out shadow hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/rentals">
          Rent
        </NavLink>

        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-4 py-2 text-lg no-underline transition duration-500 ease-in-out shadow hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="sell">
          Sell
        </NavLink>
        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-4 py-2 text-lg no-underline transition duration-500 ease-in-out shadow hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/my-home">
          My Home
        </NavLink>

        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-4 py-2 text-lg no-underline transition duration-500 ease-in-out shadow hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-black lg:-ml-2"
          to="/about">
          About
        </NavLink>
      </nav>
      <AccountMenu />
    </div>
  );
};

export default NavLinks;
