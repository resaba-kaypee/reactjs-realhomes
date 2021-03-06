import React from "react";

import Carousel from "@brainhubeu/react-carousel";
import { PropertyCardSimple } from "../Card";
import Spinner from "../Spinner";

const SpinnerCard = () => (
  <div className="w-full h-56 m-2 bg-gray-200 rounded shadow">
    <Spinner />
  </div>
);

const SlideSimple = ({ properties, loading }) => {
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
      {properties !== null && !loading ? (
        properties.map((property) => (
          <PropertyCardSimple key={property._id} property={property} />
        ))
      ) : (
        <SpinnerCard />
      )}
    </Carousel>
  );
};

export default SlideSimple;
