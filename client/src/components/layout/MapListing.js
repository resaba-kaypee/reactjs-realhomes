import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import SvgIcon from "../svg/SvgIcon";

const PropertyCardSimple = ({ property }) => {
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

const MapListing = ({ properties }) => {
  const [viewport, setViewport] = useState({
    latitude: 28.538336,
    longitude: -81.379234,
    zoom: 9,
  });

  const [showPopup, setShowPopup] = useState({});
  const [showProperty, setShowProperty] = useState(false);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/lightning-27/ck8xzwdai3vgc1inqyav9cvei"
      scrollZoom={true}
      className="relative rounded">
      {properties.map((property) => (
        <Fragment key={property._id}>
          <Marker
            latitude={property.location.coordinates[1]}
            longitude={property.location.coordinates[0]}
            offsetLeft={-16}>
            <div
              className="text-red-600 hover:text-red-800"
              onClick={() => {
                setShowPopup({
                  [property._id]: true,
                });
                setShowProperty(true);
              }}>
              <SvgIcon
                name="circle"
                className="w-8 h-8 cursor-pointer fill-current"
              />
            </div>
          </Marker>
          {showProperty && showPopup[property._id] ? (
            <Popup
              tipSize={5}
              offsetTop={24}
              anchor="bottom"
              onClose={() => {
                setShowPopup({});
                setShowProperty(false);
              }}
              latitude={property.location.coordinates[1]}
              longitude={property.location.coordinates[0]}
              className="absolute z-10">
              <div className="flex flex-col items-center">
                <PropertyCardSimple property={property} />
              </div>
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
};

MapListing.propTypes = {
  properties: PropTypes.array.isRequired,
};

export default MapListing;
