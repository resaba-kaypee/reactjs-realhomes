import React from "react";

import GraphLine from "../../assets/img/graph-line.jpg";
import AddressBar from "../Shared/AddressBar";

const TrackHomeBar = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${GraphLine})`,
      }}
      className="w-full mb-16 bg-center bg-no-repeat bg-contain">
      <div className="flex flex-col justify-center w-full">
        <div className="w-full max-w-6xl px-8 mt-10 sm:mt-24">
          <h1 className="text-4xl font-semibold text-gray-800">
            Check your home’s value and more.
          </h1>
          <p className="mt-2 text-lg text-gray-800">
            Make more confident decisions with multiple home value estimates,
            keep track of your equity and mortgage, and view local market
            trends.
          </p>
        </div>
        <AddressBar title="Track My Home" />
      </div>
    </section>
  );
};

export default TrackHomeBar;
