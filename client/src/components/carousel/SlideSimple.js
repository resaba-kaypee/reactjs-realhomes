import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import PropertyCardSimple from '../card/PropertyCardSimple';

const SlideSimple = () => {
  const properties = [
    {
      propertyId: 'O5865911',
      price: 2850001,
      areaSize: 1951,
      bedrooms: 4,
      bathrooms: 2,
      garage: 2,
      imageCover: 'single-family-house-in-3725-shawn-circle-cover.jpg',
      slug: 'a-single-family-house-in-3725-shawn-circle',
      location: {
        type: 'Point',
        coordinates: [-81.169915, 28.599849],
        address: '3725 Shawn Cir',
        state: 'Orlando, FL',
        zipcode: 32826,
      },
    },

    {
      propertyId: 'O5865912',
      price: 2850002,
      areaSize: 1952,
      bedrooms: 4,
      bathrooms: 2,
      garage: 2,
      imageCover: 'single-family-house-in-3725-shawn-circle-cover.jpg',
      slug: 'a-single-family-house-in-3725-shawn-circle',
      location: {
        type: 'Point',
        coordinates: [-81.169915, 28.599849],
        address: '3725 Shawn Cir',
        state: 'Orlando, FL',
        zipcode: 32826,
      },
    },

    {
      propertyId: 'O5865913',
      price: 285003,
      areaSize: 1953,
      bedrooms: 4,
      bathrooms: 2,
      garage: 2,
      imageCover: 'single-family-house-in-3725-shawn-circle-cover.jpg',
      slug: 'a-single-family-house-in-3725-shawn-circle',
      location: {
        type: 'Point',
        coordinates: [-81.169915, 28.599849],
        address: '3725 Shawn Cir',
        state: 'Orlando, FL',
        zipcode: 32826,
      },
    },
  ];

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
      }}
    >
      {properties.map((property) => (
        <PropertyCardSimple propert={property} />
      ))}
    </Carousel>
  );
};

export default SlideSimple;
