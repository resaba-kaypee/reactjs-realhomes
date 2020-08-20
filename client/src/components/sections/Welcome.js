import React from "react";
import Home from "../../assets/img/home1.jpg";
import Search from "../forms/Search";

const Welcome = () => {
  return (
    <section
      className="relative w-full bg-center bg-no-repeat h-2/3"
      style={{
        backgroundImage: `url(${Home})`,
      }}>
      <div className="absolute z-10 w-full h-full bg-gray-900 opacity-25"></div>
      <div className="absolute bottom-0 z-20 w-full mb-20 ml-auto mr-auto sm:mb-32 lg:mb-24">
        <div className="flex justify-center px-4 sm:px-8 lg:px-10">
          <div className="relative w-full max-w-6xl p-8">
            <div className="relative mb-4">
              <h1 className="text-4xl font-semibold text-white">
                Let's find a home that is perfect for you.
              </h1>
              <p className="mt-2 text-lg text-white">
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
