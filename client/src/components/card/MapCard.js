import React from "react";

import SvgIcon from "../SvgIcon";

const MapCard = ({ property }) => {
  return (
    <div className="flex w-100">
      {/* <!-- Left side --> */}

      <div className="flex w-4/6 capitalize border-r">
        <img
          className="object-cover w-24 h-24 mr-4 shadow-lg"
          src={require(`../../assets/img/property/${property.imageCover}`)}
          alt=""
        />
        <div className="flex flex-col truncate">
          <span className="mt-2 font-semibold text-gray-700 truncate">
            {property.location.address}
          </span>
          <p className="mt-1 text-sm text-gray-600 truncate">
            {property.location.city}, {property.location.state}
          </p>
          <div className="flex justify-around">
            <div className="mr-2 text-sm">
              <span className="text-gray-700">
                <SvgIcon
                  name="bed"
                  className="inline w-3 h-3 mr-1 fill-current"
                />
              </span>
              {property.bedrooms}
            </div>
            <div className="mr-2 text-sm">
              <span className="text-gray-700">
                <SvgIcon
                  name="bath"
                  className="inline w-3 h-3 mr-1 fill-current"
                />
              </span>
              {property.bathrooms}
            </div>
            <div className="mr-2 text-sm">
              <span className="text-gray-700">
                <SvgIcon
                  name="ruler"
                  className="inline w-3 h-3 mr-1 fill-current"
                />
              </span>
              {property.areaSize}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-2/6 ml-2">
        {/* <!-- Rigt side --> */}

        <div className="text-gray-700 capitalize">
          <p className="text-sm">{property.status}</p>
          <p className="mt-2 font-semibold text-gray-800">
            {property.price.toLocaleString("en", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <div className="mt-1 text-sm">
            <p className="text-red-600">By</p>
            <p>{property.user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
