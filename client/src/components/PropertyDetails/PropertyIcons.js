import React from "react";

import SvgIcon from "../SvgIcon";

const PropertyIcons = ({ property }) => {
  return (
    <div className="flex justify-center mt-12 md:mt-0">
      <div className="w-full px-12 md:px-0 md:mr-8">
        <div className="">
          {/* --TITLE-- */}
          <h4 className="text-2xl font-semibold leading-tight text-center sm:text-3xl">
            {property.title}
          </h4>
          <div className="pt-4 pb-2">
            <div className="flex justify-between">
              <div className="flex items-center text-gray-700">
                <SvgIcon name="marker" className="w-6 h-6 mr-1 fill-current" />
                <p className="truncate sm:text-lg">
                  {property.location.address}
                </p>
              </div>

              <div className="flex items-center text-gray-700">
                <SvgIcon name="map" className="w-6 h-6 mr-1 fill-current" />
                <p className=" sm:text-lg">{property.location.state}</p>
              </div>
            </div>
          </div>
          {/* --INFO-- */}
          <div className="px-2 pt-3 mt-4 border-t-2 border-gray-400">
            <div className="flex flex-wrap">
              <p className="flex justify-between w-1/2 p-3">
                <span className="text-gray-700">
                  <SvgIcon
                    name="bed"
                    className="inline w-6 h-6 mr-1 fill-current"
                  />
                </span>
                <span className=" sm:text-lg">{property.bedrooms} Beds</span>
              </p>
              <p className="flex justify-between w-1/2 p-3">
                <span className="text-gray-700">
                  <SvgIcon
                    name="bath"
                    className="inline w-6 h-6 mr-1 fill-current"
                  />
                </span>
                <span className=" sm:text-lg">{property.bathrooms} Baths</span>
              </p>
              <p className="flex justify-between w-1/2 p-3">
                <span className="text-gray-700">
                  <SvgIcon
                    name="ruler"
                    className="inline w-6 h-6 mr-1 fill-current"
                  />
                </span>
                <span className=" sm:text-lg">{property.lotSize} sqft.</span>
              </p>
              <p className="flex justify-between w-1/2 p-3">
                <span className="text-gray-700">
                  <SvgIcon
                    name="garage"
                    className="inline w-6 h-6 mr-1 fill-current"
                  />
                </span>
                <span className=" sm:text-lg">{property.garage} Garage</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyIcons;
