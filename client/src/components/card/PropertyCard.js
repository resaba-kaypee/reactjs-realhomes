import React from 'react';
import SvgIcon from '../svg/SvgIcon';

const PropertyCard = () => {
  const property = {
    title: 'Single family home in 3725 Shawn Circle',
    status: 'for sale',
    type: {
      category: 'residential',
      type: 'single-family home',
    },
    location: {
      type: 'Point',
      coordinates: [-81.169915, 28.599849],
      address: '3725 Shawn Cir',
      state: 'Orlando, FL',
      zipcode: 32826,
    },
    price: 285000,
    areaSize: 1952,
    lotSize: 5663,
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    imageCover: 'single-family-house-in-3725-shawn-circle-cover.jpg',
  };

  return (
    <div className="w-full overflow-hidden bg-gray-200 rounded-lg shadow-xl">
      <div className="border">
        <div className="relative border-b-2 border-gray-100 pb-4/5">
          <a href="!#">
            <img
              className="absolute object-cover object-center w-full h-full"
              src={require(`../../assets/img/property/${property.imageCover}`)}
              alt="property card"
            />
          </a>
        </div>

        {/* AGENT */}
        <div className="relative -mt-10 text-right">
          <div className="flex items-baseline justify-between p-4">
            <div className="w-16 h-16 mr-5 overflow-hidden border-2 border-gray-100 rounded-full">
              <img
                src={require('../../assets/img/user/agent.png')}
                alt="agent avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <a href="!#" className="text-yellow-600">
                Sam Smith
              </a>
              , Agent
            </div>
          </div>
        </div>

        {/* INFORMATION */}
        <div className="px-6 pb-4">
          {/* --TITLE-- */}
          <h4 className="pt-5 text-2xl font-semibold leading-tight truncate border-t-2 border-gray-400">
            {property.title}
          </h4>
          <div className="pb-2">
            <div className="flex justify-between py-2">
              <div className="flex items-center text-yellow-600">
                <SvgIcon name="marker" className="w-6 h-6 fill-current" />
                <p className="text-black truncate">
                  {property.location.address}
                </p>
              </div>

              <div className="flex items-center text-yellow-600">
                <SvgIcon name="map" className="w-6 h-6 fill-current" />
                <p className="text-black">{property.location.state}</p>
              </div>
            </div>
          </div>

          {/* --DESC-- */}
          <div className="pt-3 border-t-2 border-gray-400">
            <div className="flex flex-wrap">
              <p className="w-1/2 font-semibold text-black">
                <SvgIcon
                  name="bed"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
                {property.bedrooms}
              </p>
              <p className="w-1/2 font-semibold text-right">
                <SvgIcon
                  name="bath"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
                {property.bathrooms}
              </p>
              <p className="w-1/2 pt-2 font-semibold">
                <SvgIcon
                  name="ruler"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
                {property.lotSize}{' '}
                <span className="text-sm font-normal">sqft.</span>
              </p>
              <p className="w-1/2 pt-2 font-semibold text-right">
                <SvgIcon
                  name="garage"
                  className="inline w-6 h-6 mr-1 fill-current"
                />
                {property.garage}
              </p>
            </div>
          </div>
        </div>
        {/* STATUS & PRICE*/}
        <div className="flex">
          <p className="w-2/5 py-4 text-lg font-semibold text-center text-gray-100 capitalize bg-blue-600">
            {property.status}
          </p>
          <p className="w-3/5 py-4 text-lg font-semibold text-center text-gray-100 bg-yellow-600">
            ${property.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
