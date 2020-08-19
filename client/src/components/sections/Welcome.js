import React from "react";
import Home from "../../assets/img/home1.jpg";
import Listing from "../../assets/img/listings.jpg";
import Searchbar from "../layout/SearchBar";
import Search from "../forms/Search";

const Welcome = () => {
  return (
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
                Discover Your Perfect Home
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
  );
};

export default Welcome;
