import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyContext from '../../context/property/propertyContext';
import FilterOptions from '../forms/FilterOptions';
import SvgIcon from '../svg/SvgIcon';
import PropertyCard from '../card/PropertyCard';
import SortProperty from '../forms/SortProperty';
import Search from '../forms/Search';
import MapListings from '../layout/MapListing';
import Listing from '../../assets/img/listings.jpg';

const Listings = () => {
  const location = useLocation();
  const propertyContext = useContext(PropertyContext);
  const {
    getPropertiesByLocation,
    location_states,
    location_cities,
    properties,
    loading,
  } = propertyContext;

  useEffect(() => {
    getPropertiesByLocation();
  }, [location.search]);

  const [isOpen, setIsOpen] = useState(false);

  const [isListActive, setIsListActive] = useState(true);
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <main className="w-full mt-20 md:mt-12">
      <section>
        <div
          className="px-8 py-8 bg-no-repeat bg-cover shadow md:flex-col"
          style={{
            backgroundImage: `url(${Listing})`,
          }}
        >
          {/* SEARCH STATE FORM */}
          <div className="flex flex-col w-full px-2">
            <div className="w-full md:w-1/2">
              <Search />
            </div>

            {/* FILTER SEARCH FORM BUTTON */}
            <div className="ml-4 md:hidden">
              <button
                className="relative px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Filter </span>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <SvgIcon
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    className="w-5 h-5 fill-current"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* FILTER SEARCH FORM */}
          <div className={(isOpen ? 'block ' : 'hidden ') + 'md:block'}>
            <FilterOptions />
          </div>
        </div>
      </section>
      <section>
        <div className="px-8 mt-6">
          <h2 className="text-xl font-bold leading-8 text-gray-800">
            {location_states !== null && location_states.length === 1 ? (
              <span>{location_states[0]} </span>
            ) : null}
            {location_cities !== null && location_cities.length === 1 ? (
              <span className="capitalize">{location_cities[0]} </span>
            ) : null}
            Real Estate & Homes for Sale or Rent
          </h2>
          <div className="flex items-end justify-between mt-4">
            <span className="text-gray-900 underline">
              {properties && properties.length} Homes
            </span>
            {/* SORT SEARCH FORM */}
            <SortProperty />

            <div className="hidden md:block">
              {/* LIST */}
              <button
                className={
                  (isListActive
                    ? 'bg-gray-800 text-white '
                    : 'text-gray-700 ') +
                  'px-4 py-3 font-semibold border border-r border-gray-800 rounded-l-full appearance-none focus:outline-none'
                }
                onClick={() => {
                  setIsListActive(true);
                  setIsMapActive(false);
                }}
                disabled={isListActive}
              >
                <SvgIcon
                  name="list"
                  className="inline-block w-5 h-5 mr-1 fill-current"
                />
                List
              </button>
              {/* MAP */}
              <button
                className={
                  (isMapActive ? 'bg-gray-800 text-white ' : 'text-gray-700 ') +
                  'px-3 py-3 font-semibold border border-l border-gray-800 rounded-r-full appearance-none focus:outline-none'
                }
                onClick={() => {
                  setIsMapActive(true);
                  setIsListActive(false);
                }}
                disabled={isMapActive}
              >
                <SvgIcon
                  name="marker"
                  className="inline-block w-5 h-5 mr-1 fill-current"
                />
                Map
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={
            (isMapActive ? 'flex ' : 'hidden ') + 'mt-8 justify-center'
          }
        >
          <div className="w-11/12 px-2">
            {properties !== null && !loading ? (
              <MapListings properties={properties} />
            ) : null}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap max-w-11/12">
            {properties !== null && !loading ? (
              properties.map((property) => (
                <div key={property._id} className="p-2 mt-2 md:w-1/2 lg:w-1/3">
                  <PropertyCard property={property} />
                </div>
              ))
            ) : (
              <h1>SPINNER</h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Listings;
