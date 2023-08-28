"use client";
import Card from "@components/Card";
import TimeWidget from "@widgets/TimeWidget";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { twMerge } from "tailwind-merge";

export default function MapWidget() {
  const mapStyle = "mapbox://styles/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x";
  const longitude = process.env.NEXT_PUBLIC_MAP_LONGITUDE;
  const latitude = process.env.NEXT_PUBLIC_MAP_LATITUDE;
  const defaultZoom = 13;
  const accentColor = "#ac92fa";
  const initialViewState = {
    longitude,
    latitude,
    zoom: defaultZoom,
  };

  const settings = {
    keyboard: false,
    touchPitch: false,
    minZoom: 6,
    maxZoom: 13,
    pitch: 0,
    refreshExpiredTiles: false,
    reuseMaps: true,
  };

  return (
    <Card
      className={twMerge(
        "flex h-full w-full select-none overflow-clip p-0 [&_canvas]:outline-0",
      )}
    >
      <TimeWidget />
      <div
        id="static_map"
        className="absolute left-0 top-0 z-10 h-full w-full bg-static-map bg-contain bg-center"
      ></div>
      <Map
        id="dynamic_map"
        style={{ visibility: "hidden" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle={mapStyle}
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
