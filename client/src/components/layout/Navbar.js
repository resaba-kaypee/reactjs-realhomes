import React from 'react';
import AccountButton from './AccountButton';
import MenuButton from './MenuButton';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-gray-900 md:flex md:items-center md:justify-between md:px-4 md:py-2">
      <nav className="flex items-center justify-between w-full px-4 py-4 md:p-0">
        <AccountButton />
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
        <MenuButton />
      </nav>
    </header>
  );
};

export default Navbar;
