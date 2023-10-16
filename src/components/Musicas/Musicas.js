import React, { useState } from "react";
import "./Musicas.css";
import CustomDatePopup from "../CustomDatePopup/CustomDatePopup"; // Importe o componente de popup


function Musicas() {
  const [inputdatein, setinputdatein] = useState("");
  const [inputdateout, setinputdateout] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup

  const handleInputChangeIn = (e) => {
    let formattedText = e.target.value;

    // Remove caracteres não numéricos
    formattedText = formattedText.replace(/\D/g, '');

    // Limita o dia a 2 dígitos
    if (formattedText.length > 2) {
      formattedText = formattedText.substring(0, 2) + '-' + formattedText.substring(2);
    }

    // Limita o mês a 2 dígitos
    if (formattedText.length > 5) {
      formattedText = formattedText.substring(0, 5) + '-' + formattedText.substring(5);
    }

    // Limita o ano a 4 dígitos
    if (formattedText.length > 10) {
      formattedText = formattedText.substring(0, 10);
    }

    setinputdatein(formattedText);

  };

  const handleInputChangeOut = (e) => {
    let formattedText = e.target.value;

    // Remove caracteres não numéricos
    formattedText = formattedText.replace(/\D/g, '');

    // Limita o dia a 2 dígitos
    if (formattedText.length > 2) {
      formattedText = formattedText.substring(0, 2) + '-' + formattedText.substring(2);
    }

    // Limita o mês a 2 dígitos
    if (formattedText.length > 5) {
      formattedText = formattedText.substring(0, 5) + '-' + formattedText.substring(5);
    }

    // Limita o ano a 4 dígitos
    if (formattedText.length > 10) {
      formattedText = formattedText.substring(0, 10);
    }

    setinputdateout(formattedText);

  };

  const handleCustomButtonClick = () => {
    // Mostra o popup quando o botão "Custom" é clicado
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    // Fecha o popup quando o botão "Confirmar" dentro do popup é clicado
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div>
        <h2>Top Musicas</h2>
      </div>
      <div className="centered-container">
        <p className="filter-text">Filter</p>
        <button className="button-opt">Day</button>
        <button className="button-opt">Week</button>
        <button className="button-opt">Month</button>
        <button className="button-opt" onClick={handleCustomButtonClick}>Custom</button>
      </div>

      {/* Renderiza o popup se showPopup for true */}
      {showPopup && (
        <CustomDatePopup
          inputdatein={inputdatein}
          inputdateout={inputdateout}
          onInputChangeIn={handleInputChangeIn}
          onInputChangeOut={handleInputChangeOut}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default Musicas;
