import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { NavLink } from "react-router-dom";
import SvgIcon from "../svg/SvgIcon";

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
          <p className="text-sm font-bold">{property.location.address}</p>
          <div className="w-full pb-2 text-sm font-bold truncate">
            <span className="capitalize">{property.location.city}, </span>
            <span>{property.location.state}</span>
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
            offsetLeft={-12}>
            <div
              onMouseOver={() =>
                setShowPopup({
                  [property._id]: true,
                })
              }
              onMouseOut={() => {
                setShowProperty(false);
                setShowPopup({});
              }}
              onClick={() => setShowProperty(!showProperty)}>
              <SvgIcon name="circle" className="w-6 h-6 cursor-pointer" />
            </div>
          </Marker>
          {showPopup[property._id] ? (
            <Popup
              tipSize={5}
              anchor="bottom"
              closeButton={false}
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
