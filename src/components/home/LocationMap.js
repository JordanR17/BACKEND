import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import parkImage from "assets/img/fachada_parque.jpg";

// 🔹 Función para crear un icono personalizado con la imagen
const createCustomIcon = (imageUrl) =>
  L.divIcon({
    html: `<div style="
      width: 50px;
      height: 50px;
      background-image: url('${imageUrl}');
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
      border: 2px solid white;">
    </div>`,
    iconSize: [50, 50],
    className: "custom-icon",
  });

const pointsOfInterest = [
  {
    title: "Aeropuerto Internacional El Dorado",
    image: "https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-08/aeropuerto-el-dorado.jpg",
    description: "Principal aeropuerto de carga y pasajeros de Colombia.",
    position: [4.701317, -74.146165],
  },
  {
    title: "Terminal de Transporte Salitre",
    image: "https://info.horariodebuses.com.co/images/terminales/Terminal-de-Bogota.jpg",
    description: "🚛 Centro de transporte intermunicipal, conecta Bogotá con el país.",
    position: [4.647437, -74.108664],
  },
  {
    title: "Zona Franca de Bogotá",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/GC7AREI26FAQDGUSPLGNVUGXLA.jpg",
    description: "🏭 Área de comercio internacional exenta de impuestos.",
    position: [4.683376, -74.141378],
  },
];

// 📌 Componente para mover el mapa al hacer clic en un punto de interés
const MapUpdater = ({ position }) => {
  const map = useMap();
  map.flyTo(position, 16, { duration: 1.5 });
  return null;
};

export default function LocationMap() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const mainPosition = [4.739836, -74.178511]; // Ubicación principal

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Mapa en un recuadro */}
      <div className="w-full md:w-2/3 h-96 rounded-xl shadow-lg overflow-hidden relative">
        <MapContainer
          center={mainPosition}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {/* 📍 Mueve el mapa al hacer clic en un punto */}
          {selectedPosition && <MapUpdater position={selectedPosition} />}

          {/* 📍 Marcador Principal */}
          <Marker position={mainPosition} icon={createCustomIcon(parkImage)}>
            <Popup>
              📍 Aquí estamos: <strong>Parque Industrial San José</strong>
              <br />
              <img src={parkImage} alt="Ubicación" className="w-full mt-2 rounded-lg" />
            </Popup>
          </Marker>

          {/* 📍 Marcadores de puntos de interés */}
          {pointsOfInterest.map((point, index) => (
            <Marker key={index} position={point.position} icon={createCustomIcon(point.image)}>
              <Popup>
                <strong>{point.title}</strong>
                <br />
                {point.description}
                <br />
                <img src={point.image} alt={point.title} className="w-full mt-2 rounded-lg" />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Lista de puntos de interés */}
      <div className="w-full md:w-1/3 space-y-4">
        {pointsOfInterest.map((point, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 text-white rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedPosition(point.position)}
          >
            <img src={point.image} alt={point.title} className="w-16 h-16 rounded-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="text-sm">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
