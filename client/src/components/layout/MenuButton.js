import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
      <div
        className={
          (isOpen ? 'block ' : 'hidden ') +
          'absolute w-full md:static right-0 mt-1 px-4 pt-2 pb-4 text-md lg:text-lg md:flex md:p-0 bg-gray-900'
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
    </div>
  );
};

export default MenuButton;
