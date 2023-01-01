import Card from "@components/card";
import { ClockIcon } from "@heroicons/react/24/outline";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

export default function MapWidget() {
  const longitude = process.env.NEXT_PUBLIC_MAP_LONGITUDE;
  const latitude = process.env.NEXT_PUBLIC_MAP_LATITUDE;
  const zoom = 13;

  const [date, setDate] = useState(new Date());

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
    <Card className="p-0 overflow-clip select-none [&_canvas]:outline-0">
      <div className="absolute z-20 right-4 left-4 bottom-4 flex items-center justify-center">
        <div className="flex items-center justify-between rounded-full shadow-lg bg-neutral-50 px-3 py-1 select-none">
          <ClockIcon width={20} height={20} stroke="#ac92fa" strokeWidth={2} />
          <div className="ml-2 font-bold">
            {date.toLocaleTimeString("en-IN", dateOptions)}
          </div>
        </div>
      </div>
      <div
        id="static_map"
        className="bg-static-map bg-center bg-contain absolute top-0 left-0 w-full h-full z-10"
      ></div>
      <Map
        id="dynamic_map"
        style={{ visibility: "hidden" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x"
        initialViewState={{
          longitude,
          latitude,
          zoom,
        }}
        onLoad={() => {
          const dynamicMap = document.getElementById("dynamic_map");
          const staticMap = document.getElementById("static_map");
          if (dynamicMap !== null) dynamicMap.style.visibility = "visible";
          if (staticMap !== null) staticMap.style.visibility = "hidden";
        }}
        minZoom={6}
        maxZoom={13}
        pitch={40}
        dragRotate={false}
        keyboard={false}
        touchPitch={false}
        refreshExpiredTiles={false}
        reuseMaps
      >
        <Marker longitude={longitude} latitude={latitude} color="#ac92fa" />
      </Map>
    </Card>
  );
}
