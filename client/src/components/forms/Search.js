import React, { useState } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import SvgIcon from '../svg/SvgIcon';
import { useContext } from 'react';

const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const propertyContext = useContext(PropertyContext);
  const { getPropertiesByLocation } = propertyContext;

  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const makeQuery = () => {
    location.search = `?location[state]=${value}`;
    setQuery(location.search);
  };

  const redirectTo = () => {
    history.push(`/search${query}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getPropertiesByLocation();
    redirectTo();
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="flex">
        <input
          className="w-full px-4 py-3 leading-tight text-gray-700 border border-r-0 border-gray-500 rounded rounded-r-none appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="search"
          placeholder="Search state..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-3 text-gray-200 transition duration-500 ease-in-out bg-gray-800 border border-l-0 border-gray-800 rounded rounded-l-none hover:bg-yellow-600 hover:border-yellow-600"
          onClick={() => makeQuery()}
        >
          <SvgIcon name="search" className="w-5 h-5 fill-current" />
        </button>
      </div>
    </form>
  );
};

export default withRouter(Search);
