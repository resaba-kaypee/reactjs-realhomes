import React from 'react';
import Search from '../forms/Search';
const SearchBar = () => {
  return (
    <div className="absolute bottom-0 w-full mb-48 ml-auto mr-auto lg:mb-32">
      <div className="flex justify-center px-4 sm:px-8 lg:px-10">
        <div className="relative w-full max-w-6xl p-8">
          <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-75"></div>
          <div className="relative">
            <h1 className="text-4xl font-semibold text-yellow-500">
              Let's Find Your Best Property
            </h1>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
