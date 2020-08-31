import React from "react";
import Search from "../forms/Search";
import Listing from "../../assets/img/listings.jpg";

const NotFound = () => {
  return (
    <section
      className="relative w-full h-full mt-16 bg-no-repeat"
      style={{
        backgroundImage: `url(${Listing})`,
      }}>
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 w-full h-full">
          <div className="relative w-full max-w-6xl px-8 mt-10 sm:mt-24">
            <div className="relative mb-4">
              <h1 className="text-4xl font-semibold text-yellow-500">
                Page not found.
              </h1>
              <p className="text-2xl font-semibold text-yellow-500">
                Sorry, we can't find the page you're looking for. Maybe you can
                the try search function?
              </p>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
