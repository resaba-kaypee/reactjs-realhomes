import React, { useState, Fragment } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { MapCard } from "../Card";
import SvgIcon from "../SvgIcon";

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
                <MapCard property={property} />
              </div>
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
};

export default MapListing;
