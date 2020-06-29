import React from 'react';

const PropertyCardSimple = ({ property }) => {
  return (
    <div key={property.propertyId} className="p-2 overflow-hidden">
      <div className="relative">
        <a href="!#">
          <img
            className="object-cover object-center rounded"
            src={require(`../../assets/img/property/${property.imageCover}`)}
            alt={property.propertyId}
          />
        </a>
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
