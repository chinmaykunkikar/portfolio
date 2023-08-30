"use client";

import Card from "@components/Card";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import avatar from "@public/avatar-smile.png";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const MapWidget = () => {
  const mapStyle = "chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x";
  const mapStyleUri = `mapbox://styles/${mapStyle}`;
  const longitude = process.env.NEXT_PUBLIC_MAP_LONGITUDE;
  const latitude = process.env.NEXT_PUBLIC_MAP_LATITUDE;

  const defaultZoom = 13;
  const minZoom = 3.65;
  const maxZoom = 13;

  const zoomLevels = useMemo(() => [13, 9, 6.1, 3.65], []);
  const maxZoomIndex = zoomLevels.length - 1;
  const minZoomIndex = 0;

  const [map, setMap] = useState<Map | null>(null);
  const [currentZoomIndex, setCurrentZoomIndex] = useState(
    zoomLevels.indexOf(defaultZoom),
  );
  const [mapLoaded, setMapLoaded] = useState(false);

  const settings = {
    keyboard: false,
    touchPitch: false,
    minZoom: minZoom,
    maxZoom: maxZoom,
    pitch: 0,
    refreshExpiredTiles: false,
    reuseMaps: true,
    interactive: false,
  };

  useEffect(() => {
    const mapObj = new mapboxgl.Map({
      container: "map",
      style: mapStyleUri,
      center: [longitude, latitude],
      zoom: defaultZoom,
      attributionControl: false,
      ...settings,
    });

    mapObj.on("load", () => {
      setMapLoaded(true);
    });

    setMap(mapObj);

    return () => {
      if (mapObj) {
        mapObj.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude]);

  useEffect(() => {
    if (map) {
      map.on("zoom", () => {
        const currentZoom = map.getZoom();
        const zoomIndex = zoomLevels.indexOf(currentZoom);
        if (zoomIndex !== -1) {
          setCurrentZoomIndex(zoomIndex);
        }
      });
    }
  }, [map, zoomLevels]);

  const handleZoomIn = () => {
    if (map) {
      const newZoomIndex = Math.min(currentZoomIndex + 1, maxZoomIndex);
      map.flyTo({ zoom: zoomLevels[newZoomIndex], duration: 1250 });
      setCurrentZoomIndex(newZoomIndex);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const newZoomIndex = Math.max(currentZoomIndex - 1, minZoomIndex);
      map.flyTo({ zoom: zoomLevels[newZoomIndex], duration: 1250 });
      setCurrentZoomIndex(newZoomIndex);
    }
  };

  return (
    <Card className="group relative flex h-full w-full select-none overflow-clip p-0 [&_canvas]:outline-0">
      <div
        id="map-placeholder"
        className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center"
      >
        <Image
          src={`https://api.mapbox.com/styles/v1/${mapStyle}/static/${longitude},${latitude},${defaultZoom},0/300x300@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&attribution=false&logo=false`}
          fill
          priority
          style={{
            objectFit: "cover",
            visibility: mapLoaded ? "hidden" : "visible",
          }}
          sizes="(min-width: 320px) 100vw"
          quality={100}
          alt="Map preview"
        />
      </div>
      <div
        id="map"
        className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gray-50"
      ></div>
      <div
        onClick={handleZoomOut}
        className={twMerge(
          "absolute bottom-4 right-4 z-20 flex h-9 w-9 flex-col items-center justify-center rounded-full bg-neutral-100 p-2 text-xl opacity-80 shadow-xl transition-all hover:ring-4 hover:ring-neutral-100/[0.5]",
          currentZoomIndex <= minZoomIndex
            ? "pointer-events-none opacity-40 hover:ring-0"
            : "",
        )}
      >
        <PlusIcon width={16} height={16} strokeWidth={3} />
      </div>
      <div
        onClick={handleZoomIn}
        className={twMerge(
          "absolute bottom-4 right-16 z-20 flex h-9 w-9 flex-col items-center justify-center rounded-full bg-neutral-100 p-2 text-xl opacity-80 shadow-xl transition-all hover:ring-4 hover:ring-neutral-100/[0.5]",
          currentZoomIndex >= maxZoomIndex
            ? "pointer-events-none opacity-40 hover:ring-0"
            : "",
        )}
      >
        <MinusIcon width={16} height={16} strokeWidth={3} />
      </div>
      <div className="pointer-events-none absolute flex h-full w-full items-center justify-center">
        <div className="relative z-20 h-16 w-16 rotate-12 opacity-80 transition-transform group-hover:rotate-0 group-hover:scale-125 group-hover:opacity-100">
          <Image
            src={avatar}
            fill
            alt="Avatar"
            sizes="(min-width: 320px) 100vw"
          />
        </div>
      </div>
    </Card>
  );
};

export default MapWidget;
