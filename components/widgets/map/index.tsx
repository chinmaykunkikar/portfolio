import Card from "@components/card";
import TimeWidget from "@widgets/time";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, { Marker } from "react-map-gl";

export default function MapWidget() {
  const longitude = process.env.NEXT_PUBLIC_MAP_LONGITUDE;
  const latitude = process.env.NEXT_PUBLIC_MAP_LATITUDE;
  const defaultZoom = 13;
  const accentColor = "#ac92fa";
  const initialViewState = {
    longitude,
    latitude,
    zoom: defaultZoom,
  };

  const [settings, setSettings] = useState({
    keyboard: false,
    touchPitch: false,
    minZoom: 6,
    maxZoom: 13,
    pitch: 40,
    refreshExpiredTiles: false,
    reuseMaps: true,
  });

  return (
    <Card className="select-none overflow-clip p-0 [&_canvas]:outline-0">
      <TimeWidget />
      <div
        id="static_map"
        className="absolute top-0 left-0 z-10 h-full w-full bg-static-map bg-contain bg-center"
      ></div>
      <Map
        id="dynamic_map"
        style={{ visibility: "hidden" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x"
        initialViewState={initialViewState}
        {...settings}
        onLoad={() => {
          const dynamicMap = document.getElementById("dynamic_map");
          const staticMap = document.getElementById("static_map");
          if (dynamicMap !== null) dynamicMap.style.visibility = "visible";
          if (staticMap !== null) staticMap.style.visibility = "hidden";
        }}
      >
        <Marker longitude={longitude} latitude={latitude} color={accentColor} />
      </Map>
    </Card>
  );
}
