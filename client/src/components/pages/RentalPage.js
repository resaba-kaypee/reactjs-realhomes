import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import PropertyContext from "../../context/property/propertyContext";
import Search from "../forms/Search";
import SlideSimple from "../carousel/SlideSimple";
import Listing from "../../assets/img/listings.jpg";

const RentalPage = () => {
  const propertyContext = useContext(PropertyContext);
  const {
    getAllApartment,
    apt_pools,
    apt_laundry,
    apt_pet,
    loading,
  } = propertyContext;

  useEffect(() => {
    getAllApartment();
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
                  Discover your perfect rental.
                </h1>
                <p className="mt-2 text-lg text-yellow-500">
                  Search nearby apartments, condos, and homes for rent
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
              Rentals with Pools
            </h2>
            <NavLink
              to="/search?type[type]=apartment&features=pool"
              className="text-blue-500 hover:underline">
              View All with Pools
            </NavLink>
          </div>
          <div className="mt-6">
            <SlideSimple properties={apt_pools} loading={loading} />
          </div>
        </div>
      </section>
      <section className="relative mt-12">
        <div className="px-2 md:px-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl">
              Rentals with In-unit Laundry
            </h2>
            <NavLink
              to="/search?type[type]=apartment&features=in-unit laundry"
              className="text-blue-500 hover:underline">
              View All with In-unit Laundry
            </NavLink>
          </div>
          <div className="mt-6">
            <SlideSimple properties={apt_laundry} loading={loading} />
          </div>
        </div>
      </section>
      <section className="relative my-12">
        <div className="px-2 md:px-8">
          <div className="px-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl">
              Pet-friendly Rentals with
            </h2>
            <NavLink
              to="/search?type[type]=apartment&features=pets allowed"
              className="text-blue-500 hover:underline">
              View All Pet-friendly Rentals
            </NavLink>
          </div>
          <div className="mt-6">
            <SlideSimple properties={apt_pet} loading={loading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalPage;
