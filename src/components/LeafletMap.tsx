"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { site } from "@/content/site";

const marqueurOr = L.divIcon({
  className: "",
  html: `<span style="display:block;width:16px;height:16px;border-radius:9999px;background:#e4c08a;border:2px solid #0b0c0e;box-shadow:0 0 0 1px #b98a48"></span>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function LeafletMap() {
  const position: [number, number] = [site.geo.latitude, site.geo.longitude];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full"
      attributionControl={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={position} icon={marqueurOr}>
        <Popup>
          Pizza Gusto
          <br />
          {site.adresse.ligne1}, {site.adresse.ligne2}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
