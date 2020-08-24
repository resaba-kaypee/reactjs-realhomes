import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const propertyContext = useContext(PropertyContext);
  const { setHistorySearch } = propertyContext;

  const [params, setParams] = useState({});

  const onChange = (e) =>
    setParams({ ...params, [e.target.name]: e.target.value });

  const { state } = params;

  const queryStr = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("");

  const rentalPathQuery = `${queryStr}&type[type]=apartment`;

  const onSubmit = (e) => {
    e.preventDefault();
    setHistorySearch(queryStr);

    if (location.pathname === "/rentals-search") {
      location.search = `?${rentalPathQuery}`;
      history.push(`/rentals-search${location.search}`);
    } else {
      location.search = `?${queryStr}`;
      history.push(`/properties-search${location.search}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative shadow-xl">
      <div className="flex">
        <input
          className="w-full px-4 py-3 leading-tight text-gray-700 border border-r-0 border-gray-500 rounded rounded-r-none appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="search"
          placeholder="Search state..."
          name="location[state]"
          value={state}
          onChange={onChange}
        />
        <button
          type="submit"
          className="px-4 py-3 text-gray-200 transition duration-500 ease-in-out bg-gray-800 border border-l-0 border-gray-800 rounded rounded-l-none hover:bg-yellow-600 hover:border-yellow-600">
          <SvgIcon name="search" className="w-6 h-6 fill-current" />
        </button>
      </div>
    </form>
  );
};

export default Search;
