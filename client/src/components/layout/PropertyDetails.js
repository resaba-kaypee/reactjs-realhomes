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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <h3 className="text-xl font-bold leading-8 text-gray-800 underline">
                Features
              </h3>
              <ul className="p-4 mt-3 rounded">
                {features.map((feature) => (
                  <li key={feature} className="p-1 font-semibold capitalize">
                    ✔ {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* DETAILS */}
            <div className="md:w-3/5">
              <h3 className="text-xl font-bold leading-8 text-gray-800 underline">
                Details
              </h3>

              <table className="mt-3 table-fixed">
                <thead>
                  <tr>
                    <th className="w-3/5"></th>
                    <th className="w-2/5"></th>
                  </tr>
                </thead>
                <tbody className="capitalize">
                  <tr>
                    <td className="px-4 py-2 font-semibold border">
                      Property ID
                    </td>
                    <td className="px-4 py-2 border">{id}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-semibold border">
                      Property Type
                    </td>
                    <td className="px-4 py-2 border">{type}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold border">Status</td>
                    <td className="px-4 py-2 border">{status}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-semibold border">Price</td>
                    <td className="px-4 py-2 border">
                      {price.toLocaleString("en", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold border">Bedrooms</td>
                    <td className="px-4 py-2 border">{bedrooms}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-semibold border">
                      Bathrooms
                    </td>
                    <td className="px-4 py-2 border">{bathrooms}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold border">Garage</td>
                    <td className="px-4 py-2 border">{garage}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-semibold border">
                      Area Size
                    </td>
                    <td className="px-4 py-2 border">
                      {area && area.toLocaleString()} sqft.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold border">Lot Size</td>
                    <td className="px-4 py-2 border">
                      {lot && lot.toLocaleString()} sqft.
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-semibold border">
                      Year Built
                    </td>
                    <td className="px-4 py-2 border">{year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
