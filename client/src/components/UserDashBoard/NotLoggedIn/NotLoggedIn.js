import React from "react";
import Search from "../../Search";
import Listing from "../../../assets/img/listings.jpg";
import HeroSectionContainer from "../../Shared/HeroSectionContainer";

const NotLoggedIn = () => {
  return (
    <HeroSectionContainer>
      <div className="mb-4">
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
    </HeroSectionContainer>
  );
};

export default NotLoggedIn;
