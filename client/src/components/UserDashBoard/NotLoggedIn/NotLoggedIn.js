import React from "react";
import Search from "../../Search";
import Listing from "../../../assets/img/listings.jpg";

const NotLoggedIn = () => {
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
                Oops! Your not signed in.
              </h1>
              <h1 className="text-2xl font-semibold text-yellow-500">
                Please sign in to view your property list.
              </h1>
              <p className="mt-2 text-lg text-yellow-500">
                Or continue your search of homes for sale & real estate near you
              </p>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotLoggedIn;
