import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapSection.css";

const locations = [
  { name: "Cuttack, Odisha", position: [20.4649, 85.8793], pin: "753003" },
  { name: "Bhubaneswar, Odisha", position: [20.2961, 85.8245], pin: "751001" },
  { name: "Puri, Odisha", position: [19.8135, 85.8315], pin: "752001" },
  { name: "Balasore, Odisha", position: [21.4942, 86.9310], pin: "756001" },
  { name: "Rourkela, Odisha", position: [22.2604, 84.8536], pin: "769001" },
];

const MapSection = () => {
  return (
    <div className="map-container">
      <MapContainer center={[20.4649, 85.8793]} zoom={7} style={{ height: "500px", width: "100%" }}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Multiple Markers */}
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              📍 <strong>{location.name}</strong> <br />
              PIN: <strong>{location.pin}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
