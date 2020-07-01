import React from 'react';
import SvgIcon from '../svg/SvgIcon';

const FilterOptions = () => {
  return (
    <form action="" className="w-full">
      <div className="flex flex-col w-full pt-6 pb-3 xl:flex-row">
        <div className="w-full md:flex md:justify-between">
          {/***** CITY *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="city"
            >
              City
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                id="city"
              >
                <option value="01">All City</option>
                <option value="02">London</option>
                <option value="03">Dhaka</option>
                <option value="04">Singapore</option>
                <option value="05">Comilla</option>
                <option value="06">Delhi</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>

          {/***** CATEGORY *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                id="category"
              >
                <option value="all-types">All</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>

          {/***** TYPES *****/}
          <div className="px-2 mb-3 md:w-1/3">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="type"
            >
              Type
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                id="category"
              >
                <option value="all-types">All</option>
                <option value="single-family home">Single-family Home</option>
                <option value="multi-family home">Multi-family Home</option>
                <option value="villa">Villa</option>
                <option value="condominium">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
                <option value="mobile">Mobile</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <SvgIcon name="chevron-down" className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:flex md:justify-between">
          {/***** PRICE *****/}
          <div className="px-2 mb-3 md:flex-grow">
            <label
              className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="price"
            >
              Price
            </label>
            <div className="flex justify-between">
              <div className="relative w-2/5">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="price"
                >
                  <option value="01">Any</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <SvgIcon
                    name="chevron-down"
                    className="w-5 h-5 fill-current"
                  />
                </div>
              </div>
              <div className="self-end w-1/5 text-center text-gray-700">to</div>
              <div className="relative w-2/5">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="price"
                >
                  <option value="01">Any</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
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

          <div className="flex justify-between px-2 mb-3 md:flex-grow">
            {/***** BEDROOMS *****/}
            <div className="w-2/5 md:w-1/2">
              <label
                className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="beds"
              >
                Bedrooms
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="beds"
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <SvgIcon
                    name="chevron-down"
                    className="w-5 h-5 fill-current"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5 md:w-0 md:px-2"></div>
            {/***** BATHROOMS *****/}
            <div className="w-2/5 md:w-1/2">
              <label
                className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="baths"
              >
                Bathrooms
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="baths"
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
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

          {/* FILTER BUTTON */}
          <div className="flex items-end justify-center mb-3 md:flex-grow">
            <button className="w-full max-w-lg py-3 font-semibold text-white align-middle transition duration-500 ease-in-out bg-gray-800 rounded-full hover:bg-yellow-600 hover:border-yellow-600">
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
