'use client'

import { MapContainer, TileLayer, Marker, Popup , ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Исправление стандартной иконки маркерa Leaflet в Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  // Координаты 2 адресов (например, Баку)
 const locations = [
  {
    id: 1,
    title: "Bakı şəh., Z.Əliyeva 35B",
    lat: 40.3725,
    lng: 49.8423,
  },
  {
    id: 2,
    title: "Bakı şəh., Bayıl Plaza",
    lat: 40.349027,
    lng: 49.835891,
  },
]

  return (
    <MapContainer
      center={[40.376, 49.845]} // Центр между двумя точками
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
      className="w-full h-full rounded-2xl z-0"
    >
       <ZoomControl position="topright" /> 
       
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;