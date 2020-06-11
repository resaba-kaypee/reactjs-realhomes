import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyCards = () => {
  const properties = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const loading = false;

  return (
    <div>
      <div className="flex flex-col items-center my-10">
        <p className="font-bold tracking-widest text-gray-700 uppercase">
          The best deals
        </p>
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
      </div>
      <div className="flex flex-wrap px-6 md:px-4">
        {properties !== null &&
          !loading &&
          properties.map((property) => (
            <div className="flex justify-center w-full mb-10 md:w-1/2 lg:w-1/3 lg:px-2">
              <PropertyCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyCards;
