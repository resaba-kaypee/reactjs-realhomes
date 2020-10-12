import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import AccountMenu from "../AccountMenu";
import SvgIcon from "../../SvgIcon";

const NavLinks = ({ isOpen }) => {
  const [isDropped, setIsDroppped] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full pl-6 pr-6 md:pl-0 md:flex md:justify-between pb-2 md:pb-0`}>
      <nav className="flex flex-col text-blue-600 md:flex-row md:items-center md:my-0 text-md lg:text-lg md:mb-0">
        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-2 py-2 text-lg no-underline transition duration-500 ease-in-out shadow lg:px-4 hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/realstateforsale">
          Buy
        </NavLink>

        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-2 py-2 text-lg no-underline transition duration-500 ease-in-out shadow lg:px-4 hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/rentals">
          Rent
        </NavLink>

        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-2 py-2 text-lg no-underline transition duration-500 ease-in-out shadow lg:px-4 hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="sell">
          Sell
        </NavLink>
        <NavLink
          activeClassName="border-b-2 border-blue-700 text-gray-900"
          className="inline-block px-2 py-2 text-lg no-underline transition duration-500 ease-in-out shadow lg:px-4 hover:border-blue-400 hover:border-b-2 md:shadow-none leading-13 hover:text-gray-900 lg:-ml-2"
          to="/my-home">
          My Home
        </NavLink>

        <button
          className={`${
            isDropped &&
            "fixed inset-0 right-0 z-20 w-full h-full cursor-default"
          }`}
          onClick={() => {
            setIsDroppped(false);
          }}></button>
        <button
          className="inline-block px-2 py-2 text-lg text-left no-underline transition duration-500 ease-in-out shadow lg:px-4 group md:shadow-none leading-13 hover:text-black lg:-ml-2"
          onClick={() => setIsDroppped(!isDropped)}
          type="button">
          About{" "}
          <SvgIcon
            name="chevron-down"
            className="inline-block w-5 h-5 fill-current"
          />
          <nav
            className={`${
              isDropped ? "transform scale-100" : "transform scale-0"
            } absolute w-64 h-40 p-2 text-left text-blue-600 origin-top bg-white border rounded-sm group-hover:scale-100 min-w-32 z-30`}>
            <NavLink
              activeClassName="border-b-2 border-blue-700 text-gray-900"
              className="block px-4 py-1 my-1 border-b-2 rounded-sm shadow hover:border-blue-400 hover:bg-gray-100 hover:text-gray-800"
              to="/about-us">
              About Us
            </NavLink>
            <a
              className="block px-4 py-1 my-1 border-b-2 rounded-sm shadow hover:border-blue-400 hover:bg-gray-100 hover:text-gray-800"
              href="https://github.com/resaba-kaypee/reactjs-realhomes"
              target="_blank"
              rel="noopener noreferrer">
              About App{" "}
              <span>
                <SvgIcon
                  name="github"
                  className="inline-block w-6 h-6 text-gray-800 fill-current"
                />
              </span>
            </a>
          </nav>
        </button>
      </nav>
      <AccountMenu />
    </div>
  );
};

export default NavLinks;
