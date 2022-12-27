import Map, { Marker } from "react-map-gl";
import Card from "@components/card";
export default function MapWidget() {
  return (
    <Card className="p-0">
      <Map
        initialViewState={{
          latitude: process.env.MAP_LATITUDE,
          longitude: process.env.MAP_LONGITUDE,
          zoom: 12,
        }}
        minZoom={12}
        maxZoom={12}
        style={{
          width: "100%",
          height: "100%",
        }}
        mapStyle="mapbox://styles/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x"
        mapboxAccessToken={process.env.MAPBOX_TOKEN}
      >
        <Marker
          latitude={process.env.MAP_LATITUDE}
          longitude={process.env.MAP_LONGITUDE}
          anchor="center"
          color="#DD2222"
        />
      </Map>
    </Card>
  );
}
