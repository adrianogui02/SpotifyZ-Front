import React from "react";
import "./CustomDatePopup.css"; // Importe o arquivo de estilos CSS

function CustomDatePopup({ inputdatein, inputdateout, onInputChangeIn, onInputChangeOut, onClose }) {
  return (
    <div className="overlay">
      <div className="custom-popup">
        <input className="input-date" type="text" value={inputdatein} onChange={onInputChangeIn} placeholder="DD-MM-AAAA" />
        <input className="input-date" type="text" value={inputdateout} onChange={onInputChangeOut} placeholder="DD-MM-AAAA" />
        <button onClick={onClose}>Buscar</button>
      </div>
    </div>
  );
}

export default CustomDatePopup;
