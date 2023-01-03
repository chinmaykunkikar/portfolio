import Card from "@components/card";
import { ClockIcon, MinusIcon } from "@heroicons/react/24/outline";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useEffect, useState } from "react";
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

  const [date, setDate] = useState(new Date());
  const [settings, setSettings] = useState({
    keyboard: false,
    touchPitch: false,
    minZoom: 6,
    maxZoom: 13,
    pitch: 40,
    refreshExpiredTiles: false,
    reuseMaps: true,
  });

  const updateSettings = useCallback(
    // TODO Debug this
    (name: any, value: any) =>
      setSettings((s) => ({
        ...s,
        zoom: defaultZoom - 3,
      })),
    []
  );

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  };

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Card className="select-none overflow-clip p-0 [&_canvas]:outline-0">
      <div className="absolute right-4 left-4 bottom-4 z-20 flex items-center justify-center">
        <div className="flex select-none items-center justify-between rounded-full bg-neutral-50 px-3 py-1 shadow-lg">
          <ClockIcon
            width={20}
            height={20}
            stroke={accentColor}
            strokeWidth={2}
          />
          <div className="ml-2 font-bold">
            {date.toLocaleTimeString("en-IN", dateOptions)}
          </div>
        </div>
      </div>
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
        <button
          className="absolute left-4 bottom-4 hidden items-center justify-center rounded-full
        bg-neutral-50 transition-all hover:ring-8 hover:ring-[#ac92fa]/[0.5]"
        >
          <MinusIcon
            className="m-1 p-1"
            strokeWidth={3}
            width={24}
            height={24}
            color={accentColor}
          />
        </button>
      </Map>
    </Card>
  );
}
