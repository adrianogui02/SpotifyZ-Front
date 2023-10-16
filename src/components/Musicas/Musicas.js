import React, { useState } from "react";
import "./Musicas.css";

function Musicas() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
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

    setInputText(formattedText);
  };

  return (
    <div className="centered-container">
        <div className="date-container">
            <div>
                <span>input name</span>
                <input
                    className="input-date"
                    type="text"
                    placeholder="DD-MM-AAAA"
                    value={inputText}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <span>input date</span>
                <input
                    className="input-date"
                    type="text"
                    placeholder="DD-MM-AAAA"
                    value={inputText}
                    onChange={handleInputChange}
                />
            </div>
        </div>
      <button onClick={() => console.log("Botão clicado. Texto formatado:", inputText)}>
        Botão
      </button>
    </div>
  );
}

export default Musicas;
