import React, { useState, Fragment } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import SvgIcon from '../svg/SvgIcon';
import PropertyCardSimple from '../card/PropertyCardSimple';

const MapListing = ({ properties }) => {
  const ids = properties.map((property) => property.propertyId);

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
      scrollZoom={false}
      className="relative"
    >
      {properties.map((property) => (
        <Fragment key={property.propertyId}>
          <Marker
            latitude={property.location.coordinates[1]}
            longitude={property.location.coordinates[0]}
            offsetLeft={-12}
          >
            <div
              onMouseOver={() =>
                setShowPopup({
                  [property.propertyId]: true,
                })
              }
              onMouseOut={() => {
                setShowProperty(false);
                setShowPopup({});
              }}
              onClick={() => setShowProperty(!showProperty)}
            >
              <SvgIcon name="circle" className="w-6 h-6 cursor-pointer" />
            </div>
          </Marker>
          {showPopup[property.propertyId] ? (
            <Popup
              tipSize={5}
              anchor="bottom"
              closeButton={false}
              latitude={property.location.coordinates[1]}
              longitude={property.location.coordinates[0]}
              className="absolute z-10"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48">
                  <PropertyCardSimple property={property} />
                </div>
                <h1 className="text-sm font-semibold">
                  {property.location.address}
                </h1>
              </div>
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
};
export default MapListing;
