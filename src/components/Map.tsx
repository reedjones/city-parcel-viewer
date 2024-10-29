import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ParcelData } from '../types';
import { dummyParcels } from '../data/dummyData';

interface MapProps {
  onParcelClick: (parcel: ParcelData) => void;
}

export default function Map({ onParcelClick }: MapProps) {
  return (
    <div className="relative h-[400px]">
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={dummyParcels}
          onEachFeature={(feature, layer) => {
            layer.on('click', () => {
              const parcel: ParcelData = {
                ...feature.properties,
                coordinates: feature.geometry.coordinates[0][0],
              };
              onParcelClick(parcel);
            });
          }}
          style={() => ({
            color: '#2563eb',
            weight: 1,
            fillColor: '#3b82f6',
            fillOpacity: 0.2,
          })}
        />
      </MapContainer>
      <button
        onClick={() => onParcelClick(dummyParcels.features[0].properties as ParcelData)}
        className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors z-[400] border"
      >
        Open Demo Parcel
      </button>
    </div>
  );
}