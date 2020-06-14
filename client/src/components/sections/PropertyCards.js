import React from 'react';
import PropertyCard from '../card/PropertyCard';

const PropertyCards = () => {
  const properties = ['1', '2', '3', '4', '5', '6'];
  const loading = false;

  return (
    <section>
      <div className="flex flex-col items-center my-10">
        <p className="font-bold tracking-widest text-gray-700 uppercase">
          The best deals
        </p>
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
      </div>
      <div className="flex justify-center px-8 lg:px-6">
        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap">
            {properties !== null &&
              !loading &&
              properties.map((property) => (
                <div className="flex justify-center w-full mb-10 md:w-1/2 lg:w-1/3 lg:px-2">
                  <PropertyCard />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCards;
