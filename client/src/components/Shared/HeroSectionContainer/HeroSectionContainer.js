import React from "react";

import Listing from "../../../assets/img/listings.jpg";

const HeroSectionContainer = (props) => {
  return (
    <section
      className="relative w-full bg-no-repeat bg-cover h-2/3"
      style={{
        backgroundImage: `url(${Listing})`,
      }}>
      <div className="absolute bottom-0 w-full mb-32 ml-auto mr-auto lg:mb-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-6xl">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContainer;
