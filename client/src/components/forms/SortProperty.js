import React, { useContext } from "react";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";

const SortProperty = () => {
  const propertyContext = useContext(PropertyContext);
  const { sortBy } = propertyContext;

  const onChange = (e) => {
    sortBy(e.target.value);
  };

  return (
    <form action="">
      <div className="px-2">
        <label
          className="block mb-1 text-xs font-bold tracking-wide text-gray-600 uppercase"
          htmlFor="sort">
          Sort By
        </label>
        <div className="relative inline-block ml-4">
          <select
            id="state"
            onChange={onChange}
            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white">
            <option value="new">Newest Property</option>
            <option value="price_asc">Lowest Price</option>
            <option value="price_desc">Highest Price</option>
            <option value="area_desc">Largest Area size</option>
            <option value="lot_desc">Largest Lot size</option>
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
