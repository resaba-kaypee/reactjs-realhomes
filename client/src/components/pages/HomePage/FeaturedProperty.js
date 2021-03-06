import React, { useEffect, useContext } from "react";

import PropertyContext from "../../../context/property/propertyContext";

import { PropertyCard } from "../../Card";
import Spinner from "../../Spinner";

const FeaturedProperty = () => {
  const propertyContext = useContext(PropertyContext);
  const { getFeaturedProperties, featured, loading } = propertyContext;

  useEffect(() => {
    getFeaturedProperties();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="relative z-10 mb-20">
      <div className="flex flex-col items-center my-10">
        <p className="font-bold tracking-widest text-gray-700 uppercase">
          The best deals
        </p>
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col w-full max-w-6xl px-4 md:flex-row md:flex-wrap">
          {featured !== null && !loading ? (
            featured.map((property) => (
              <div key={property._id} className="p-2 mt-2 md:w-1/2 lg:w-1/3">
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
