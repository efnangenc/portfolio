import React from "react";
import "../styles/variables.scss"

function Navi() {
  return (
    <nav className="navi">
      {/* Logo */}
      {/* <div className="navbar__logo">
        <a href="#home">MyPortfolio</a>
      </div> */}

      <div className="navi__item">
        <a href="#home">Ana Sayfa</a>
      </div>
      <div className="navi__item">
        <a href="#about">Hakkımda</a>
      </div>
      <div className="navi__item">
        <a href="#projects">Projeler</a>
      </div>
      <div className="navi__item">
        <a href="#contact">İletişim</a>
      </div>

      {/* Dil seçici */}
      {/* <div className="navbar__actions">
        <button className="btn">EN</button>
        <button className="btn">TR</button>
      </div> */}
    </nav>
  );
}
export default Navi;
