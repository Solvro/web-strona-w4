'use client'
import { useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"; // Importujemy Leaflet

export const MapComponent = () => {
  // Poprawna deklaracja mapRef jako referencja do HTMLDivElement
  const mapRef = useRef<HTMLDivElement | null>(null); // Zmieniamy typ na HTMLDivElement | null

  useEffect(() => {
    if (mapRef.current) {
      // Tworzymy mapę w elemencie DOM
      const map = L.map(mapRef.current).setView([51.108946, 17.059969], 16); // Współrzędne Londynu, z poziomem powiększenia 13

      // Dodajemy warstwę OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Dodajemy marker
      L.marker([51.108946, 17.059969]).addTo(map)
        .openPopup();
    }
  }, []); // Pusta tablica zależności zapewnia, że efekt uruchomi się tylko raz, po zamontowaniu komponentu

  return (
    <div
      ref={mapRef} // Referencja do mapRef
      style={{ width: "100%", height: "420px", maxWidth: "420px", border:"3px solid #9D0620", borderRadius: "10px"}}
    ></div>
  );
};


