import React, { useState } from 'react';
import AccountDropdown from './AccountDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 md:flex md:items-center md:justify-between md:px-4 md:py-2">
      <nav className="flex items-center justify-between px-4 py-4 md:p-0">
        <AccountDropdown />
        <div className="flex items-center justify-center">
          <svg className="w-12 h-12 " viewBox="0 0 236.5 318.1">
            <path
              d="M236.5 318.1L0 317.4V119L119 0l117.5 117.5v200.6zM22 295.4l192.5.6V126.6L119 31.1l-97 97v167.3z"
              fill="#c9d700"
            />
            <path
              d="M177.4 270.9H57.9V151.3h119.6v119.6zm-97.5-22h75.6v-75.6H79.9v75.6z"
              fill="#c9d700"
            />
          </svg>
          <div className="p-1 mt-3">
            <span className="text-sm text-white md:text-xl lg:text-3xl">
              REAL
            </span>
            <span className="text-sm text-orange-500 md:text-xl lg:text-3xl">
              HOMES
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-10 h-10 fill-current focus:outline-none"
              viewBox="0 0 20 20  "
            >
              {isOpen ? (
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={
          (isOpen ? 'block ' : 'hidden ') +
          'px-4 pt-2 pb-4 text-md lg:text-lg md:flex md:p-0'
        }
      >
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white rounded md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          Home
        </a>
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white rounded md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          Listings
        </a>
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white rounded md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          My Home
        </a>
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white rounded md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          About
        </a>
      </div>
      <div className="hidden px-4 pt-2 pb-4 text-lg md:block md:flex md:p-0">
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          Sign in
        </a>
        <a
          href="!#"
          className="block px-4 py-1 mt-1 font-semibold text-white border-l-2 border-gray-200 md:mt-0 md-ml-2 hover:bg-gray-800"
        >
          Sign up
        </a>
      </div>
    </header>
  );
};

export default Navbar;
