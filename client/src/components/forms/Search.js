import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import SvgIcon from '../svg/SvgIcon';

const Search = () => {
  const history = useHistory();
  const propertyContext = useContext(PropertyContext);
  const { setLocationSearch, setHistorySearch } = propertyContext;

  const [params, setParams] = useState({});

  const onChange = (e) =>
    setParams({ ...params, [e.target.name]: e.target.value });

  const { state } = params;

  const queryStr = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('');

  const onSubmit = (e) => {
    e.preventDefault();
    setLocationSearch(queryStr);
    setHistorySearch(queryStr);
    history.push(`/search?${queryStr}`);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
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
          className="px-4 py-3 text-gray-200 transition duration-500 ease-in-out bg-gray-800 border border-l-0 border-gray-800 rounded rounded-l-none hover:bg-yellow-600 hover:border-yellow-600"
        >
          <SvgIcon name="search" className="w-5 h-5 fill-current" />
        </button>
      </div>
    </form>
  );
};

export default Search;
