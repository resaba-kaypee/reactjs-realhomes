import React from 'react';
import SvgIcon from '../svg/SvgIcon';

const SortProperty = () => {
  return (
    <form action="">
      <div className="px-2 mb-3">
        <label
          className="inline-block mb-1 text-xs font-bold tracking-wide text-gray-700"
          htmlFor="sort"
        >
          Sort By
        </label>
        <div className="relative inline-block ml-4">
          <select
            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
            id="state"
          >
            <option value="">Newest Property</option>
            <option value="">Lowest Price</option>
            <option value="">Highest Price</option>
            <option value="">Largest Area size</option>
            <option value="">Largest Lot size</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SortProperty;
