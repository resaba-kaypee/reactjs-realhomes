import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PropertyContext from "../../../context/property/propertyContext";
import { SlideSimple } from "../../Carousel";

const SimilarPropertiesSlide = ({ type }) => {
  const location = useLocation();

  location.search = `?type[type]=${type}`;

  const propertyContext = useContext(PropertyContext);
  const { properties, loading, getSimilarProperties } = propertyContext;

  useEffect(() => {
    if (type) {
      getSimilarProperties();
    }
    // eslint-disable-next-line
  }, [type]);

  return (
    <>
      <h2 className="text-lg font-bold text-gray-800 underline sm:text-2xl">
        Similar Properties
      </h2>
      <div className="mt-6">
        {properties !== null && !loading ? (
          <SlideSimple properties={properties} />
        ) : null}
      </div>
    </>
  );
};

export default SimilarPropertiesSlide;
