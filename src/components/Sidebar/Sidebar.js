// Sidebar.js
import React from "react";
import "./Sidebar.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';


function Sidebar({ onButtonClick }) {

    const handleClick = (content) => {
        onButtonClick(content);
      };

  return (
    <div className="sidebar">
        <h2>Explorer</h2>
      <button className="button" onClick={() => handleClick("top-musicas")}>
        <MusicNoteIcon/>
        Musicas
      </button>
      <button className="button" onClick={() => handleClick("conteudo2")}>
        <MicExternalOnIcon/>
        Artistas
      </button>
      <button className="button" onClick={() => handleClick("conteudo3")}>
        <LibraryMusicIcon/> 
        Albuns
      </button>
    </div>
  );
}

export default Sidebar;
