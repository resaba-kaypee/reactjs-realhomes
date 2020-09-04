import React, { useContext } from "react";

import PropertyContext from "../../../../context/property/propertyContext";

import SvgIcon from "../../../SvgIcon";

const Card = ({ property, _id }) => {
  const propertyContext = useContext(PropertyContext);
  const { deletePropertyFromList } = propertyContext;

  return (
    <div className="px-4 py-4 mt-4 bg-white rounded-lg shadow-xl ">
      {/* <!-- Card --> */}

      <div className="flex">
        {/* <!-- Left side --> */}

        <div className="h-48">
          <div className="relative w-48">
            <div className="absolute top-0 left-0">
              <button
                onClick={() => deletePropertyFromList(_id)}
                type="button"
                className="-mt-2 -ml-3 text-green-500 bg-gray-200 rounded-full shadow-xl hover:text-red-600">
                <SvgIcon name="close" className="w-10 h-10 fill-current" />
              </button>
            </div>
            <img
              className="object-cover w-48 h-48 shadow-lg"
              src={require(`../../../../assets/img/property/${property.imageCover}`)}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col w-3/5 ml-4 capitalize truncate border-r">
          <span className="mt-2 text-xl font-semibold text-gray-700 truncate">
            {property.title}
          </span>
          <p className="mt-2 text-sm text-gray-600 truncate">
            {property.description}
          </p>
          <div className="flex justify-between w-2/3">
            <div className="mt-2 font-semibold text-black">
              <span>Bedrooms</span>
              <div>
                <span className="text-gray-700">
                  <SvgIcon
                    name="bed"
                    className="inline w-6 h-6 mr-2 fill-current"
                  />
                </span>
                {property.bedrooms}
              </div>
            </div>
            <div className="mt-2 font-semibold text-black ">
              <span>Bathrooms</span>
              <div>
                <span className="text-gray-700">
                  <SvgIcon
                    name="bath"
                    className="inline w-6 h-6 mr-2 fill-current"
                  />
                </span>
                {property.bathrooms}
              </div>
            </div>
            <div className="mt-2 font-semibold text-black ">
              <span>Area</span>
              <div>
                <span className="text-gray-700">
                  <SvgIcon
                    name="ruler"
                    className="inline w-6 h-6 mr-2 fill-current"
                  />
                </span>
                {property.areaSize}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-2/5 ml-2">
          {/* <!-- Rigt side --> */}

          <div className="flex flex-col mr-16 text-gray-700 capitalize">
            <span>{property.status}</span>
            <span className="mt-2 text-2xl font-semibold text-gray-800">
              {property.price.toLocaleString("en", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <div className="mt-6">
              <p className="text-red-600">By</p>
              <p>{property.user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
