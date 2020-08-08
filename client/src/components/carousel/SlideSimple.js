import React from "react";
import PropTypes from "prop-types";
import Carousel from "@brainhubeu/react-carousel";
import PropertyCardSimple from "../card/PropertyCardSimple";

const SlideSimple = ({ properties }) => {
  return (
    <Carousel
      slidesPerPage={4}
      arrows
      infinite
      breakpoints={{
        375: {
          slidesPerPage: 1,
        },
        640: {
          slidesPerPage: 2,
        },
        768: {
          slidesPerPage: 3,
        },
      }}>
      {properties.map((property) => (
        <PropertyCardSimple key={property._id} property={property} />
      ))}
    </Carousel>
  );
};

SlideSimple.protoTypes = {
  properties: PropTypes.object.isRequired,
};

export default SlideSimple;
