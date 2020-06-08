import React from 'react';

const SearchBar = () => {
  return (
    <form action="">
      <div className="flex bg-gray-700 justify-evenly">
        <div className="flex flex-wrap pt-6 pb-3">
          {/***** STATE *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** TYPES *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="types"
            >
              Type
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="types"
              >
                <option value="all-types">All Types</option>
                <option value="commercial">Commercial</option>
                <option value="office">Office</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="condominium">Condominium</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** CITY *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="city"
            >
              City
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** SIZE *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="size"
            >
              Size
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="size"
              >
                <option value="01">For All</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** BEDROOMS *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="beds"
            >
              Bedrooms
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** BATHROOMS *****/}
          <div className="w-1/4 px-2 mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="baths"
            >
              Bathrooms
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/***** PRICE *****/}
          <div className="w-1/4 px-2 mb-3">
            <div
              className="block mb-2 text-xs font-bold tracking-wide text-gray-900 uppercase"
              htmlFor="price"
            >
              Price [100 - 150000]$
            </div>
            <div className="h-2 overflow-hidden bg-gray-200 rounded">
              <div className="w-full h-2 text-xs bg-orange-300"></div>
              <span className="w-3 h-3 bg-orange-300 rounded-full">s</span>
              <span className="w-2 h-2 bg-orange-300"></span>
            </div>
          </div>

          {/***** LOT SIZE *****/}
          <div className="w-1/4 px-2 mb-3">
            <select
              name="bathroom"
              id="bathroom"
              className="flex items-center w-full h-12 p-2 text-sm border-2 border-black rounded"
            >
              <option value="Bathroom">Bathroom</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-8 py-4 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
