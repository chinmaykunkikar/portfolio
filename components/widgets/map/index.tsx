import Card from "@components/card";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";

export default function MapWidget() {
  return (
    <Card className="p-0 overflow-clip">
      <Map
        reuseMaps
        initialViewState={{
          latitude: process.env.MAP_LATITUDE,
          longitude: process.env.MAP_LONGITUDE,
          zoom: 13,
        }}
        minZoom={13}
        maxZoom={13}
        style={{
          width: "100%",
          height: "100%",
        }}
        mapStyle="mapbox://styles/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x"
        mapboxAccessToken={process.env.MAPBOX_TOKEN}
      />
    </Card>
  );
}
