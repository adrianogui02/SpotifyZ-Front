// Header.js
import React from "react";
import "./Header.css";
import logo from "./spotify.svg"; // Suponha que seu logo esteja na pasta public

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="Spotify Logo" />
        <span className="header__text">SpotifyZ</span>
      </div>
      <div className="header__right">
        <button className="button">Fazer Login</button>
      </div>
    </div>
  );
}

export default Header;
