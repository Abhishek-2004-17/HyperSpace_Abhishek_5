'use client'; // This file is a Client Component

import React, { useState } from 'react';

const WarehousePage: React.FC = () => {
  const [city, setCity] = useState<string>(''); 
  const [spaceRequired, setSpaceRequired] = useState<number>(0); 
  const [confirmationMessage, setConfirmationMessage] = useState<string>(''); 
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  // Handle city change
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  // Handle space allotment change
  const handleSpaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpaceRequired(Number(event.target.value));
  };

  // Handle confirm button click
  const handleConfirmClick = () => {
    setShowConfirmation(true);
    setConfirmationMessage(`You have selected the warehouse with ${spaceRequired} sq. ft. of space.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', backgroundColor: 'white', color: 'black' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Warehouse Space Allocation</h1>

      {/* City Selection */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontWeight: 'bold', color: '#444', display: 'block', marginBottom: '5px' }}>
          Choose City:
        </label>
        <select 
          value={city} 
          onChange={handleCityChange} 
          style={{ 
            width: '100%', 
            padding: '8px', 
            fontSize: '16px', 
            border: '1px solid #777', 
            borderRadius: '5px', 
            color: '#222', 
            backgroundColor: '#f9f9f9' 
          }}
        >
          <option value="">Select City</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>

      {/* Space Allotment */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontWeight: 'bold', color: '#444', display: 'block', marginBottom: '5px' }}>
          Space Allotment Required (in sq. ft.):
        </label>
        <input
          type="number"
          value={spaceRequired}
          onChange={handleSpaceChange}
          min="0"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #777',
            borderRadius: '5px',
            color: '#222',
            backgroundColor: '#f9f9f9',
          }}
        />
      </div>

      {/* Google Maps Link */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>View Warehouse Locations on Google Maps:</h3>
        <a
          href="https://www.google.com/maps/search/?q=Navi+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007bff',
            fontSize: '16px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          View on Google Maps
        </a>
      </div>

      {/* Confirm Button */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleConfirmClick}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Confirm Selection
        </button>
      </div>

      {/* Confirmation Message */}
      {showConfirmation && (
        <div style={{ marginTop: '20px', fontSize: '16px', color: '#28a745', fontWeight: 'bold' }}>
          <p>{confirmationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default WarehousePage;