import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import containerGreen from '../assets/imgs/container-green.png';
import containerRed from '../assets/imgs/container-red.png';
import truck from '../assets/imgs/truck.png';

// Custom icon for truck
const truckIcon = new L.Icon({
  iconUrl: truck, // truck image
  iconSize: [60, 50],
  iconAnchor: [20, 40],
});

// Custom icon for loaded container
const containerLoadedIcon = new L.Icon({
  iconUrl: containerGreen, // container green image
  iconSize: [50, 35],
  iconAnchor: [15, 30],
});

// Custom icon for not ready container
const containerNotReadyIcon = new L.Icon({
  iconUrl: containerRed, // container red image
  iconSize: [50, 35],
  iconAnchor: [15, 30],
});

// Dummy container data
const containers = [
  {
    id: 1,
    position: [3.075, 101.52],
    status: "Ready",
    info: "Container #1 - Ready for shipment",
  },
  {
    id: 2,
    position: [3.07, 101.515],
    status: "Not Ready",
    info: "Container #2 - Still loading",
  },
];

export default function Maps() {
  // Initial truck position
  const [truckPos, setTruckPos] = useState([3.0738, 101.5183]);

  // Simulate truck movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPos((prev) => [
        prev[0] + (Math.random() - 0.5) * 0.001,
        prev[1] + (Math.random() - 0.5) * 0.001,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // State for controlling which container dropdown is open
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the container clicked
    }));
  };

  return (
    <MapContainer
  className="relative z-0"
  center={[3.0738, 101.5183]}
  zoom={14}
  style={{ height: "100vh", width: "100%" }}
>
      {/* Carto Light Map */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        subdomains={["a", "b", "c", "d"]}
      />

      {/* Moving Truck */}
      <Marker position={truckPos} icon={truckIcon}>
        <Popup>
          🚚 Truck<br />Posisi sekarang:<br />
          {truckPos[0].toFixed(5)}, {truckPos[1].toFixed(5)}
        </Popup>
      </Marker>

      {/* Containers */}
      {containers.map((c) => (
        <Marker
          key={c.id}
          position={c.position}
          icon={
            c.status === "Loaded" ? containerLoadedIcon : containerNotReadyIcon
          }
        >
          
          <Popup className="custom-popup">
            <div className="w-[300px] text-white  ">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(c.id)}
              >
                <div className="flex items-center">t
                  <span>{c.status}</span>
                </div>
                        <i
          className={`fa-solid fa-chevron-down text-white text-sm transition-transform duration-300 ${
                    openDropdowns[c.id] ? "rotate-180" : ""
                  }`}
        ></i>
              </div>
              <div
                className={`transition-all duration-300 ease-out overflow-hidden text-xs ${
                  openDropdowns[c.id] ? "max-h-[200px] py-1" : "max-h-0"
                }`}
              >
                <p>
                  <strong>Pickup Deadline:</strong> 00:00AM - 00:00PM
                </p>
                <p>
                  <strong>Customer:</strong> XYSD Sdn Bhd
                </p>
                <p>
                  <strong>Driver:</strong> Fajri
                </p>
                <p>
                  <strong>Job#:</strong> 12324
                </p>
                <p>
                  <strong>Rot#:</strong> 12342
                </p>
                <p>
                  <strong>Truck#:</strong> 123214
                </p>
              </div>
            </div>
          </Popup>

          {/* /* <Popup>
            📦 <b>{c.status}</b>
            <br />
            {c.info}
          </Popup> */ }
        </Marker>
      ))}
    </MapContainer>
  );
}