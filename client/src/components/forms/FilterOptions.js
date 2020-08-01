import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import SvgIcon from '../svg/SvgIcon';

const FilterOptions = () => {
  const history = useHistory();
  const location = useLocation();

  const propertyContext = useContext(PropertyContext);

  const { history_search, cities } = propertyContext;

  const [filterObj, setFilterObj] = useState({});

  const onChange = (e) =>
    setFilterObj({
      ...filterObj,
      [e.target.name]: e.target.value,
    });

  const {
    city,
    type,
    priceMin,
    priceMax,
    bedroomsMin,
    bedroomsMax,
    bathroomsMin,
    bathroomsMax,
  } = filterObj;

  const filterStr = Object.keys(filterObj)
    .filter((key) => filterObj[key] !== null && filterObj[key] !== '')
    .map((key) => `${key}=${filterObj[key]}`)
    .join('&');

  const queryStr =
    history_search !== null && filterStr !== ''
      ? history_search + '&' + filterStr
      : filterStr !== ''
      ? filterStr
      : history_search;

  const onSubmit = (e) => {
    e.preventDefault();
    location.search = `?${queryStr}`;
    history.push(`/search${location.search}`);
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-col w-full pt-6 pb-3 xl:flex-row">
        <div className="w-full md:flex md:justify-between">
          {/***** CITY *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-400 uppercase"
              htmlFor="city"
            >
              City
            </label>
            <div className="relative">
              <select
                id="city"
                name="location[city]"
                value={city}
                onChange={onChange}
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
              >
                <option value="all">All City</option>
                {cities !== null
                  ? cities.map((city) => (
                      <option key={city} value={city} className="capitalize">
                        {city}
                      </option>
                    ))
                  : null}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>

          {/***** TYPES *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-400 uppercase"
              htmlFor="type"
            >
              Type
            </label>
            <div className="relative">
              <select
                id="type"
                name="type[type]"
                value={type}
                onChange={onChange}
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
              >
                <option value="">All</option>
                <option value="single-family home">Single-family Home</option>
                <option value="multi-family home">Multi-family Home</option>
                <option value="villa">Villa</option>
                <option value="condominium">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
                <option value="mobile">Mobile</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="industrial">Industrial</option>
                <option value="special purpose">Special Purpose</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>

          {/***** PRICE *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-400 uppercase"
              htmlFor="price"
            >
              Price
            </label>
            <div className="flex justify-between">
              <div className="relative w-2/5">
                <select
                  id="priceMin"
                  name="price[gte]"
                  value={priceMin}
                  onChange={onChange}
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                >
                  <option value="">Min</option>
                  <option value="50000">$50000</option>
                  <option value="100000">$100000</option>
                  <option value="150000">$150000</option>
                  <option value="200000">$200000</option>
                  <option value="250000">$250000</option>
                  <option value="300000">$300000</option>
                  <option value="400000">$400000</option>
                  <option value="500000">$500000</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <SvgIcon
                    name="chevron-down"
                    className="w-5 h-5 fill-current"
                  />
                </div>
              </div>
              <div className="self-end w-1/5 text-center text-gray-400">to</div>
              <div className="relative w-2/5">
                <select
                  id="priceMax"
                  name="price[lte]"
                  value={priceMax}
                  onChange={onChange}
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                >
                  <option value="">Max</option>
                  <option value="500000">$500000</option>
                  <option value="600000">$600000</option>
                  <option value="700000">$700000</option>
                  <option value="800000">$800000</option>
                  <option value="900000">$900000</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <SvgIcon
                    name="chevron-down"
                    className="w-5 h-5 fill-current"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:flex md:justify-between">
          <div className="flex justify-between px-2 mb-3 md:flex-grow">
            {/***** BEDROOMS *****/}
            <div className="w-2/5 md:w-1/2">
              <label
                className="block mb-1 text-xs font-bold tracking-wide text-gray-400 uppercase"
                htmlFor="bedrooms"
              >
                Bedrooms
              </label>
              <div className="flex justify-between">
                <div className="relative w-2/5">
                  <select
                    id="bedrooms"
                    name="bedrooms[gte]"
                    value={bedroomsMin}
                    onChange={onChange}
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  >
                    <option value="">Min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <SvgIcon
                      name="chevron-down"
                      className="w-5 h-5 fill-current"
                    />
                  </div>
                </div>
                <div className="self-end w-1/5 text-center text-gray-400">
                  to
                </div>
                <div className="relative w-2/5">
                  <select
                    id="bedrooms"
                    name="bedrooms[lte]"
                    value={bedroomsMax}
                    onChange={onChange}
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  >
                    <option value="">Max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <SvgIcon
                      name="chevron-down"
                      className="w-5 h-5 fill-current"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/5 md:w-0 md:px-2"></div>
            {/***** BATHROOMS *****/}
            <div className="w-2/5 md:w-1/2">
              <label
                className="block mb-1 text-xs font-bold tracking-wide text-gray-400 uppercase"
                htmlFor="bathrooms"
              >
                Bathrooms
              </label>
              <div className="flex justify-between">
                <div className="relative w-2/5">
                  <select
                    id="bathrooms"
                    name="bathrooms[gte]"
                    value={bathroomsMin}
                    onChange={onChange}
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  >
                    <option value="">Min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <SvgIcon
                      name="chevron-down"
                      className="w-5 h-5 fill-current"
                    />
                  </div>
                </div>
                <div className="self-end w-1/5 text-center text-gray-400">
                  to
                </div>
                <div className="relative w-2/5">
                  <select
                    id="bathrooms"
                    name="bathrooms[lte]"
                    value={bathroomsMax}
                    onChange={onChange}
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  >
                    <option value="">Max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <SvgIcon
                      name="chevron-down"
                      className="w-5 h-5 fill-current"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FILTER BUTTON */}
          <div className="flex items-end justify-center mb-3 md:flex-grow">
            <button
              type="submit"
              className="w-full max-w-lg py-3 font-semibold text-white align-middle transition duration-500 ease-in-out bg-gray-800 rounded-full hover:bg-yellow-600 hover:border-yellow-600"
            >
              <SvgIcon
                name="filter"
                className="inline-block w-5 h-5 mr-2 fill-current"
              />
              Filter
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterOptions;
