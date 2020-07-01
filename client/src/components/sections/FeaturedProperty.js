import React from 'react';
import PropertyCard from '../card/PropertyCard';
import properties from '../../data';

const FeaturedProperty = () => {
  const loading = false;

  return (
    <section className="relative z-10">
      <div className="flex flex-col items-center my-10">
        <p className="font-bold tracking-widest text-gray-700 uppercase">
          The best deals
        </p>
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap max-w-11/12">
          {properties.map((property) => (
            <div
              key={property.propertyId}
              className="p-2 mt-2 md:w-1/2 lg:w-1/3"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
