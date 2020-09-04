import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import PropertyContext from "../../context/property/propertyContext";

import Search from "../Search";
import Listing from "../../assets/img/listings.jpg";
import { SlideSimple } from "../Carousel";

const BuyPage = () => {
  const propertyContext = useContext(PropertyContext);
  const {
    getAllProperty,
    getFeaturedProperties,
    getAffordableProperties,
    properties,
    affordable,
    featured,
    loading,
  } = propertyContext;

  useEffect(() => {
    getAllProperty();
    getFeaturedProperties();
    getAffordableProperties();
    // eslint-disable-next-line
  }, []);

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
      <section className="relative mt-12">
        <div className="px-2 md:px-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl">
              Newest Listings
            </h2>
            <NavLink
              to="/properties-search?sort=-datePosted"
              className="text-blue-500 hover:underline">
              View All Newest Listings
            </NavLink>
          </div>
          <div className="w-full mt-6">
            <SlideSimple properties={properties} loading={loading} />
          </div>
        </div>
      </section>
      <section className="relative mt-12">
        <div className="px-2 md:px-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl">
              Featured Listings
            </h2>
            <NavLink
              to="/properties-search?limit=6&sort=-price"
              className="text-blue-500 hover:underline">
              View All Featured Listings
            </NavLink>
          </div>
          <div className="mt-6">
            <SlideSimple properties={featured} loading={loading} />
          </div>
        </div>
      </section>
      <section className="relative my-12">
        <div className="px-2 md:px-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl">
              Homes Around $300,000
            </h2>
            <NavLink
              to="/properties-search?price[lte]=300000&sort=-price"
              className="text-blue-500 hover:underline">
              View All Affordable Properties
            </NavLink>
          </div>
          <div className="mt-6">
            <SlideSimple properties={affordable} loading={loading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyPage;
