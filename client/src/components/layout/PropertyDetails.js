import React, { useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../svg/SvgIcon";

const PropertyDetails = ({
  features,
  id,
  type,
  status,
  price,
  bedrooms,
  bathrooms,
  garage,
  lot,
  area,
  year,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="w-full p-2 border-b focus:outline-none"
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold leading-8 text-gray-800">
            Property Details
          </h2>
          <div className="text-black">
            {isOpen ? (
              <SvgIcon name="chevron-up" className="w-10 h-10 fill-current" />
            ) : (
              <SvgIcon name="chevron-down" className="w-10 h-10 fill-current" />
            )}
          </div>
        </div>
      </button>

      <div
        className={
          isOpen
            ? "block "
            : "hidden " +
              "flex flex-col items-center mt-6 md:flex-row md:justify-center"
        }>
        <div className="w-full mt-6">
          {/* FEATURES */}
          <h3 className="text-xl font-bold leading-8 text-gray-800 underline">
            Features
          </h3>
          <ul className="p-4 mt-3 bg-gray-300 rounded">
            {features.map((feature) => (
              <li key={feature} className="p-1 font-semibold capitalize">
                ✔ {feature}
              </li>
            ))}
          </ul>
          {/* INFO */}
          <h3 className="mt-6 text-xl font-bold leading-8 text-gray-800 underline">
            Details
          </h3>
          <ul className="flex flex-col p-2 mt-3 bg-gray-300 rounded">
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Property ID</span>
              <span className="capitalize">{id}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Property Type</span>
              <span className="capitalize">{type}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Status</span>
              <span className="capitalize">{status}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Price</span>
              <span className="capitalize">$ {price.toLocaleString()}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Bedrooms</span>
              <span className="capitalize">{bedrooms}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Bathrooms</span>
              <span className="capitalize">{bathrooms}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Garage</span>
              <span className="capitalize">{garage}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Lot size</span>
              <span className="capitalize">
                {lot && lot.toLocaleString()} sqft.
              </span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Area size</span>
              <span className="capitalize">
                {area && area.toLocaleString()} sqft.
              </span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-semibold sm:text-lg">Year Built</span>
              <span className="capitalize">{year}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

PropertyDetails.propTypes = {
  features: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  garage: PropTypes.number,
  lot: PropTypes.number,
  area: PropTypes.number,
  year: PropTypes.string.isRequired,
};

export default PropertyDetails;
