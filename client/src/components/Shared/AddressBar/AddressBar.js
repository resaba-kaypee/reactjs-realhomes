import React from "react";

const AddressBar = ({ title = "title" }) => (
  <form className="mt-4 shadow-xl">
    <div className="flex">
      <input
        className="w-2/3 px-4 py-3 leading-tight text-gray-700 border border-r-0 border-gray-500 rounded rounded-r-none appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
        type="search"
        placeholder="Enter your address..."
      />
      <button
        type="submit"
        className="w-1/3 px-4 py-3 text-xs text-gray-200 transition duration-500 ease-in-out bg-gray-800 border border-l-0 border-gray-800 rounded rounded-l-none sm:text-lg hover:bg-yellow-600 hover:border-yellow-600">
        {title}
      </button>
    </div>
  </form>
);

export default AddressBar;
