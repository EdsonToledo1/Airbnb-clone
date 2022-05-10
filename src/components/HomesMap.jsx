import React from "react";
import "../styles/HomesMap.css";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const HomesMap = (params) => {
  const center = params.coordinates;

  const { isLoaded } = useJsApiLoader({
    id: "Airbnb-clone-google-maps",
    googleMapsApiKey: "AIzaSyDQvNqbN6fUcNHAKm4kPzCS6kmiwiIVpu0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="HomesMap"
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default HomesMap;
