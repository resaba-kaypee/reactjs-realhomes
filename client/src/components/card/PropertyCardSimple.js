import React from 'react';
import { NavLink } from 'react-router-dom';

const PropertyCardSimple = ({ property }) => {
  return (
    <div className="p-2 overflow-hidden">
      <div className="relative">
        <NavLink to={`/property/${property.slug}`}>
          <img
            className="object-cover object-center rounded"
            src={require(`../../assets/img/property/${property.imageCover}`)}
            alt={property.propertyId}
          />
        </NavLink>
      </div>
      <div className="relative px-2 -mt-10">
        <p className="text-xl font-bold leading-10 text-white">
          ${property.price}
        </p>
        <div className="flex flex-wrap text-sm">
          <p className="w-1/2">
            {property.bedrooms} <span className="font-semibold">Beds</span>
          </p>
          <p className="w-1/2">
            {property.bathrooms} <span className="font-semibold">Baths</span>
          </p>
          <p className="w-1/2">
            {property.garage} <span className="font-semibold">Garage</span>
          </p>
          <p className="w-1/2">
            {property.areaSize} <span className="font-semibold">sqft.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSimple;
