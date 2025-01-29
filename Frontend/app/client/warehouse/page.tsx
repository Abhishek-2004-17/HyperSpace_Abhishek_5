"use client";
import * as React from "react";
import { SideBar } from "@/components/client/SideBar";

const warehouseData: {
  [key: string]: { name: string; location: string; coordinates: [number, number] }[];
} = {
  "Navi Mumbai": [
    { name: "Warehouse A", location: "Panvel", coordinates: [10, 30] },
    { name: "Warehouse B", location: "Kharghar", coordinates: [20, 50] },
    { name: "Warehouse C", location: "Kalamboli", coordinates: [80, 60] }
  ],
  Mumbai: [
    { name: "Warehouse D", location: "Vile Parle", coordinates: [20, 40] },
    { name: "Warehouse E", location: "Andheri", coordinates: [50, 60] }
  ]
};

const WarehousePage: React.FC = () => {
  const [city, setCity] = React.useState<keyof typeof warehouseData>("Mumbai");
  const [selectedWarehouse, setSelectedWarehouse] = React.useState<string>("");
  const [confirmationMsg, setConfirmationMsg] = React.useState<string>("");

  React.useEffect(() => {
    setSelectedWarehouse("");
    setConfirmationMsg("");
  }, [city]);

  const handleWarehouseSelect = (warehouse: string, location: string) => {
    setSelectedWarehouse(warehouse);
    setConfirmationMsg(`You have chosen ${warehouse} at ${location}`);
  };

  return (
    <div style={{ display: "flex", height: "100vh", margin: 0, padding: 0, backgroundColor: "#121212", color: "#fff" }}>
      <div style={{ width: "18%", padding: "10px", height: "100vh", backgroundColor: "#1E1E1E", color: "#fff" }}>
        <SideBar />
      </div>
      <div style={{ flex: 1, padding: "30px", overflowY: "scroll", display: "flex", flexDirection: "column" }}>
        <h1 style={{ color: "#00D4FF", fontSize: "28px", marginBottom: "20px" }}>Warehouse Listings</h1>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="city-select" style={{ fontWeight: "bold", marginRight: "10px", fontSize: "18px" }}>Select City:</label>
          <select id="city-select" value={city} onChange={(e) => setCity(e.target.value as keyof typeof warehouseData)}
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #00D4FF", fontSize: "16px", backgroundColor: "#1E1E1E", color: "#fff", width: "200px" }}>
            <option value="Mumbai">Mumbai</option>
            <option value="Navi Mumbai">Navi Mumbai</option>
          </select>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <label htmlFor="warehouse-select" style={{ fontWeight: "bold", marginRight: "10px", fontSize: "18px" }}>Select Warehouse:</label>
          <select id="warehouse-select" value={selectedWarehouse} onChange={(e) => {
            const selected = warehouseData[city].find((warehouse) => warehouse.name === e.target.value);
            handleWarehouseSelect(e.target.value, selected?.location || "Unknown");
          }}
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #00D4FF", fontSize: "16px", backgroundColor: "#1E1E1E", color: "#fff", width: "300px" }}>
            <option value="">Select Warehouse</option>
            {warehouseData[city].map((warehouse, index) => (
              <option key={index} value={warehouse.name}>{warehouse.name} - {warehouse.location}</option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ border: "1px solid #00D4FF", padding: "15px", borderRadius: "10px", backgroundColor: "#1E1E1E", width: "100%", maxWidth: "700px", height: "500px", position: "relative", marginBottom: "30px" }}>
            <h2 style={{ color: "#00D4FF", textAlign: "center", marginBottom: "20px" }}>Warehouse Map</h2>
            <div style={{ position: "relative", width: "100%", height: "80%", backgroundColor: "#222", borderRadius: "10px" }}>
              <svg width="100%" height="100%">
                {warehouseData[city].map((warehouse, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <line x1={`${warehouseData[city][index - 1].coordinates[1]}%`} y1={`${warehouseData[city][index - 1].coordinates[0]}%`} x2={`${warehouse.coordinates[1]}%`} y2={`${warehouse.coordinates[0]}%`} stroke="#FFA500" strokeWidth="2" />
                    )}
                    <circle cx={`${warehouse.coordinates[1]}%`} cy={`${warehouse.coordinates[0]}%`} r="6" fill="#FFA500" />
                    <text x={`${warehouse.coordinates[1] + 2}%`} y={`${warehouse.coordinates[0] - 2}%`} fill="#FFA500" fontSize="12px">{warehouse.name}</text>
                  </React.Fragment>
                ))}
              </svg>
            </div>
          </div>
          {confirmationMsg && (
            <div style={{ fontSize: "18px", fontWeight: "bold", color: "#00D4FF", padding: "15px", borderRadius: "10px", backgroundColor: "#333", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", width: "300px" }}>
              {confirmationMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarehousePage;
