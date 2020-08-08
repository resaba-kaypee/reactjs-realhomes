import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const PropertyCardSimple = ({ property }) => {
  return (
    <div className="p-2">
      <div className="overflow-hidden border rounded shadow">
        <div className="relative">
          <NavLink to={`/property/${property.slug}`}>
            <img
              className="object-cover object-center h-56 md:h-40 xl:h-56 w-72"
              src={require(`../../assets/img/property/${property.imageCover}`)}
              alt={property.propertyId}
            />
          </NavLink>
        </div>
        <div className="relative px-2 -mt-10">
          <p className="text-xl font-bold leading-10 text-white">
            ${property.price.toLocaleString()}
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
              {property.areaSize && property.areaSize.toLocaleString()}{" "}
              <span className="font-semibold">sqft.</span>
            </p>
          </div>
          <div className="w-full pb-2 text-sm font-bold truncate">
            <span className="capitalize">{property.location.city}, </span>
            <span>{property.location.state}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCardSimple.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCardSimple;
