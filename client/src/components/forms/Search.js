import React from 'react';

const Search = () => {
  return (
    <form className="relative z-10 flex w-full mt-5 justify-left">
      <div className="flex flex-col w-full lg:flex-row lg:justify-center">
        <input
          type="search"
          placeholder="Search by state..."
          defaultValue=""
          className="px-4 py-4 border border-indigo-400 rounded lg:py-2 lg:rounded-l lg:rounded-r-none lg:flex-1 focus:border-indigo-600 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="py-5 mt-5 text-2xl text-white transition duration-150 bg-indigo-600 rounded lg:px-6 lg:py-2 lg:mt-0 lg:rounded-r lg:rounded-l-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;