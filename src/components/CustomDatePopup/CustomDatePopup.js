import React, { useState } from "react";
import "./CustomDatePopup.css"; // Importe o arquivo de estilos CSS
import { Calendar } from 'primereact/calendar';

function CustomDatePopup({ inputdatein, inputdateout, onInputChangeIn, onInputChangeOut, onClose }) {
  
  const [dates, setDates] = useState(null);
  
  return (
    <div className="overlay">
      <div className="custom-popup">
      <div className="card flex justify-content-center">
      <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
        </div>
    <div className="button-container">
        <button className="button-popup" onClick={onClose}>Buscar</button>
    </div>
</div>

    </div>
  );
}

export default CustomDatePopup;
