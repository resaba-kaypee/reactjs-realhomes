import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import SvgIcon from '../svg/SvgIcon';
import { useContext } from 'react';

const Search = (props) => {
  const propertyContext = useContext(PropertyContext);
  const { getPropertiesByLocation, properties, loading } = propertyContext;

  const [location, setLocation] = useState('FL');

  const redirectTo = () => props.history.push({
    pathname: '/search',
    search: `?location=${location}`
  });

  const onSubmit = (e) => {
    e.preventDefault();
    getPropertiesByLocation(location);
    redirectTo();
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="flex">
        <input
          className="w-full px-4 py-3 leading-tight text-gray-700 border border-r-0 border-gray-500 rounded rounded-r-none appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="search"
          placeholder="Search state..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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

// <form className="relative z-10 flex w-full mt-5 justify-left">
//   <div className="flex flex-col w-full lg:flex-row lg:justify-center">
//     <input
//       type="search"
//       placeholder="Search by state..."
//       defaultValue=""
//       className="px-4 py-4 border border-indigo-400 rounded lg:py-2 lg:rounded-l lg:rounded-r-none lg:flex-1 focus:border-indigo-600 focus:outline-none focus:shadow-outline"
//     />
//     <button
//       type="submit"
//       className="py-5 mt-5 text-2xl text-white transition duration-150 bg-indigo-600 rounded lg:px-6 lg:py-2 lg:mt-0 lg:rounded-r lg:rounded-l-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
//     >
//       Search
//     </button>
//   </div>
// </form>
export default withRouter(Search);
