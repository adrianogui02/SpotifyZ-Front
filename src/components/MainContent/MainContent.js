import React from "react";
import "./MainContent.css";
import Musicas from "../Musicas/Musicas"; // Importe o componente TopMusicas

function MainContent({ content }) {
    let renderedContent;

    if (content === "top-musicas") {
      renderedContent = 
        <div> 
            <h2>Top Musicas</h2>
            <Musicas/>
        </div>;

    } else if (content === "conteudo2") {
      renderedContent = 
        <div> 
            <h2>Top Artistas</h2>
        </div>;
    } else if (content === "conteudo0") {
        renderedContent = 
          <div> 
              <h2>NADA</h2>
          </div>;
    } else {
      renderedContent = 
        <div> 
            <h2>Top Albuns</h2>
        </div>;
    }
  
    return <div className="mainContent">{renderedContent}</div>;
}

export default MainContent;
