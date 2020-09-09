import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 z-40 flex justify-center w-full bg-white shadow-lg">
      <nav className="w-full max-w-6xl md:flex md:justify-between">
        {/* >> BURGER NAV ICON << */}
        <div className="flex items-center justify-between px-6">
          <div className="md:hidden">
            <button
              type="button"
              className="block py-3 text-blue-600 focus:outline-none"
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

          {/* >> LOGO << */}

          <NavLink to="/" className="flex items-center justify-center">
            <div className="py-2 font-semibold leading-13">
              <span className="text-xl text-yellow-700 sm:text-2xl ">REAL</span>
              <span className="text-xl text-gray-700 sm:text-2xl ">HOMES</span>
            </div>
          </NavLink>
        </div>

        {/* >> NAVLINKS << */}
        <NavLinks isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Navbar;
