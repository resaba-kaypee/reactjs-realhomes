import React, { useState } from "react";

import ReactMapGL, { Marker } from "react-map-gl";
import SvgIcon from "../SvgIcon";

const MapSingle = ({ longitude, latitude }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      scrollZoom={false}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/lightning-27/ck8xzwdai3vgc1inqyav9cvei">
      <Marker latitude={latitude} longitude={longitude}>
        <div className="text-yellow-600">
          <SvgIcon name="marker" className="w-12 h-12 fill-current" />
        </div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapSingle;
