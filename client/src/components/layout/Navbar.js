import React from 'react';
import AccountMenu from '../nav/AccountMenu';
import Menu from '../nav/Menu';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-20 flex justify-center w-full bg-gray-900">
      <div className="relative w-full max-w-6xl px-8 py-2 xl:px-0">
        <nav className="flex items-center justify-between py-4">
          <AccountMenu />
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
          <Menu />
        </nav>
      </div>
    </header>
  );
};

/**
    <header className="fixed z-20 w-full px-6 bg-gray-900 md:px-4 md:py-2"></header>
 * 
 *       <nav className="flex items-center justify-between w-full px-4 py-4">
        <AccountMenu />
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
        <Menu />
      </nav>
 */

export default Navbar;
