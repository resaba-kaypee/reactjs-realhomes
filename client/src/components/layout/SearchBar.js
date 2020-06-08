import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-4">
      <form className="flex justify-center w-full">
        <input
          type="search"
          placeholder="Search by state..."
          value=""
          className="flex-1 max-w-4xl px-4 py-2 border border-indigo-400 rounded-l focus:border-indigo-600 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white transition duration-150 bg-indigo-600 rounded-r hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
