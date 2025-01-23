"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.icon({
  iconUrl: "/marker.png",
  iconSize: [36, 46],
  iconAnchor: [18, 43],
});

L.Marker.prototype.options.icon = markerIcon;

export default function Map() {
  return (
    <MapContainer
      center={[51.108946, 17.059969]}
      zoom={16}
      scrollWheelZoom={false}
      className="w-full h-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.108946, 17.059969]} />
    </MapContainer>
  );
}
