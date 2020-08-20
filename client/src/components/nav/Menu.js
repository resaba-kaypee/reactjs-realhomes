import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <button
          // BURGER MENU BUTTON
          type="button"
          className="block text-green-500"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-10 h-10 fill-current focus:outline-none"
            viewBox="0 0 20 20  ">
            {isOpen ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={
          (isOpen ? "block " : "hidden ") +
          "absolute md:static md:block top-0 left-0 w-full mt-20 md:mt-0"
        }>
        <div
          className={
            "md:justify-left md:items-center h-full md:mt-0 px-4 text-md lg:text-lg md:flex md:p-0 mb-2 md:mb-0 text-gray-700 bg-white shadow md:shadow-none"
          }>
          <NavLink
            to="/realstateforsale"
            activeClassName="bg-gray-200 md:border-t-2 border-b-2 border-green-500 text-gray-900"
            className="block px-4 py-1 mt-1 border-b hover:border-t-2 hover:border-b-2 hover:border-green-500 leading-13 md:px-2 md:mt-0 md-ml-2 focus:outline-none focus:border-green-500 focus:border-b-2">
            Buy
          </NavLink>
          <NavLink
            to="/sell"
            activeClassName="bg-gray-200 md:border-t-2 border-b-2 border-green-500 text-gray-900"
            className="block px-4 py-1 mt-1 border-b hover:border-t-2 hover:border-b-2 hover:border-green-500 leading-13 md:px-2 md:mt-0 md-ml-2 focus:outline-none focus:border-green-500 focus:border-b-2">
            Sell
          </NavLink>
          <NavLink
            to="/rentals"
            activeClassName="bg-gray-200 md:border-t-2 border-b-2 border-green-500 text-gray-900"
            className="block px-4 py-1 mt-1 border-b hover:border-t-2 hover:border-b-2 hover:border-green-500 leading-13 md:px-2 md:mt-0 md-ml-2 focus:outline-none focus:border-green-500 focus:border-b-2">
            Rent
          </NavLink>
          <NavLink
            to="/myhome"
            activeClassName="bg-gray-200 md:border-t-2 border-b-2 border-green-500 text-gray-900"
            className="block px-4 py-1 mt-1 border-b hover:border-t-2 hover:border-b-2 hover:border-green-500 leading-13 md:px-2 md:mt-0 md-ml-2 focus:outline-none focus:border-green-500 focus:border-b-2">
            My Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="bg-gray-200 md:border-t-2 border-b-2 border-green-500 text-gray-900"
            className="block px-4 py-1 mt-1 border-b hover:border-t-2 hover:border-b-2 hover:border-green-500 leading-13 md:px-2 md:mt-0 md-ml-2 focus:outline-none focus:border-green-500 focus:border-b-2">
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
