"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const markerIcon = L.icon({
  iconUrl: "/marker.png",
  iconSize: [36, 46],
  iconAnchor: [18, 43],
});

L.Marker.prototype.options.icon = markerIcon;

export function Map() {
  return (
    <MapContainer
      center={[51.108_946, 17.059_969]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.108_946, 17.059_969]} />
    </MapContainer>
  );
}
