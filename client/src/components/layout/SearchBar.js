import React from 'react';

const SearchBar = () => {
  return (
    <div className="absolute bottom-0 w-full px-16 mb-64 lg:mb-32 lg:px-32">
      <div className="relative p-8">
        <div className="absolute inset-0 bg-indigo-700 rounded-lg opacity-75"></div>
        <form className="relative z-10 flex w-full justify-left">
          <div className="flex flex-col w-full lg:flex-row lg:justify-center">
            <input
              type="search"
              placeholder="Search by state..."
              value=""
              className="px-4 py-4 border border-indigo-400 rounded lg:py-2 lg:rounded-l lg:flex-1 focus:border-indigo-600 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="py-5 mt-5 text-2xl text-white transition duration-150 bg-indigo-600 rounded lg:px-6 lg:py-2 lg:mt-0 lg:rounded-r hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
//
export default SearchBar;
