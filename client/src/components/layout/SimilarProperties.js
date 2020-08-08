import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import PropertyContext from "../../context/property/propertyContext";
import SlideSimple from "../carousel/SlideSimple";

const SimilarProperties = ({ type }) => {
  const location = useLocation();
  
  location.search = `?type[type]=${type}`;

  const propertyContext = useContext(PropertyContext);
  const { properties, loading, getSimilarProperties } = propertyContext;

  useEffect(() => {
    if (type) {
      getSimilarProperties();
    }
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

SimilarProperties.propTypes = {
  type: PropTypes.string,
}

export default SimilarProperties;
