import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import PropertyContext from "../../context/property/propertyContext";
import FilterOptions from "../forms/FilterOptions";
import SvgIcon from "../svg/SvgIcon";
import PropertyCard from "../card/PropertyCard";
import SortProperty from "../forms/SortProperty";
import Search from "../forms/Search";
import MapListings from "../layout/MapListing";
import Pagination from "../layout/Pagination";
import Listing from "../../assets/img/listings.jpg";
import Spinner from "../layout/Spinner";

const Listings = () => {
  const location = useLocation();
  const propertyContext = useContext(PropertyContext);
  const {
    getPropertiesByLocation,
    location_states,
    location_cities,
    properties,
    results,
    loading,
  } = propertyContext;

  const [isOpen, setIsOpen] = useState(false);
  const [isListActive, setIsListActive] = useState(true);
  const [isMapActive, setIsMapActive] = useState(false);
  const [postPerPage] = useState(6);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPropertiesByLocation();
    // eslint-disable-next-line
  }, [location.search]);

  useEffect(() => {
    if (properties !== null && !loading) {
      setPosts(properties);
    }
  }, [properties, loading, results]);

  const end = currentPage * postPerPage;
  const start = end - postPerPage;
  const currentPosts = posts.slice(start, end);

  const paginate = (pageNumber) => {
    if (pageNumber !== currentPage) setCurrentPage(pageNumber);
  };

  const SpinnerCards = [];

  for (let i = 0; i < postPerPage; i++) {
    SpinnerCards.push(
      <div key={i} className="flex w-full md:w-1/2 lg:w-1/3 h-1/2">
        <div className="flex items-center justify-center w-full m-3 bg-gray-200 border rounded shadow">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        className="relative w-full bg-no-repeat h-2/3"
        style={{
          backgroundImage: `url(${Listing})`,
        }}>
        <div className="absolute bottom-0 w-full mb-32 ml-auto mr-auto lg:mb-24">
          <div className="flex justify-center px-4 sm:px-8 lg:px-10">
            <div className="relative w-full max-w-6xl p-8">
              <div className="absolute"></div>
              <div className="relative mb-4">
                <h1 className="text-4xl font-semibold text-yellow-500">
                  Discover your perfect home.
                </h1>
                <p className="mt-2 text-lg text-yellow-500">
                  With the most complete source of homes for sale & real estate
                  near you
                </p>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </section>
      <main className="w-full">
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

            {/* FILTER SEARCH FORM */}
            <div
              className={
                (isOpen ? "block " : "max-h-0 md:max-h-full ") +
                "md:block overflow-hidden transition duration-1000 ease-out"
              }>
              <div
                className={
                  isOpen
                    ? "transition duration-300 transform translate-y-0 opacity-100"
                    : "transition duration-300 transform -translate-y-10 opacity-0 md:opacity-100 md:translate-y-0"
                }>
                <FilterOptions />
              </div>
            </div>

            <div className="flex items-end justify-between mt-4">
              {/* SORT SEARCH FORM */}
              <SortProperty />

              {/* FILTER SEARCH FORM BUTTON */}
              <div className="ml-4 md:hidden">
                <button
                  className="relative px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}>
                  <span>Filter </span>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <SvgIcon
                      name={isOpen ? "chevron-up" : "chevron-down"}
                      className="w-5 h-5 fill-current"
                    />
                  </div>
                </button>
              </div>

              <div className="hidden md:block">
                {/* LIST */}
                <button
                  className={
                    (isListActive
                      ? "bg-gray-800 text-white "
                      : "text-gray-700 ") +
                    "px-4 py-3 font-semibold border border-r border-gray-800 rounded-l-full appearance-none focus:outline-none"
                  }
                  onClick={() => {
                    setIsListActive(true);
                    setIsMapActive(false);
                  }}
                  disabled={isListActive}>
                  <SvgIcon
                    name="list"
                    className="inline-block w-5 h-5 mr-1 fill-current"
                  />
                  List
                </button>
                {/* MAP */}
                <button
                  className={
                    (isMapActive
                      ? "bg-gray-800 text-white "
                      : "text-gray-700 ") +
                    "px-3 py-3 font-semibold border border-l border-gray-800 rounded-r-full appearance-none focus:outline-none"
                  }
                  onClick={() => {
                    setIsMapActive(true);
                    setIsListActive(false);
                  }}
                  disabled={isMapActive}>
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
              (isMapActive ? "flex max-h-full " : "max-h-0 ") +
              "mt-8 justify-center overflow-hidden transition duration-1000 ease-out"
            }>
            <div
              className={
                (isMapActive
                  ? "transition duration-300 transform translate-y-0 opacity-1"
                  : "transition duration-300 transform -translate-y-2 opacity-0") +
                " w-11/12 px-2"
              }>
              {currentPosts !== null && !loading ? (
                <MapListings properties={currentPosts} />
              ) : null}
            </div>
          </div>
        </section>
        <section>
          {loading ? (
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-wrap w-full h-screen max-w-11/12">
                {SpinnerCards}
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col w-full md:flex-row md:flex-wrap max-w-11/12">
                  {currentPosts !== null && !loading
                    ? currentPosts.map((property) => (
                        <div
                          key={property._id}
                          className="p-2 mt-2 md:w-1/2 lg:w-1/3">
                          <PropertyCard property={property} />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
              <div className="flex justify-center w-full my-8">
                <Pagination
                  totalItems={results}
                  itemsPerPage={postPerPage}
                  onPaginate={paginate}
                  from={start}
                  to={end}
                />
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Listings;
