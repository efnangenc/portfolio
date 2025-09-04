import React, { useState } from "react";
import "../styles/Navi.scss";

// function Navi() {
//   const [active, setActive] = useState("#home"); // default seçili olan

//   return (
//     <nav className="navi">
//       {/* Logo */}
//       {/* <div className="navbar__logo">
//         <a href="#home">MyPortfolio</a>
//       </div> */}

//       <div className="navi__item">
//         <a href="#home">Ana Sayfa</a>
//       </div>
//       <div className="navi__item">
//         <a href="#about">Hakkımda</a>
//       </div>
//       <div className="navi__item">
//         <a href="#projects">Projeler</a>
//       </div>
//       <div className="navi__item">
//         <a href="#contact">Tecrübeler</a>
//       </div>
//       <div className="navi__item">
//         <a href="#contact">Yetenekler</a>
//       </div>
//       <div className="navi__item">
//         <a href="#contact">İletişim</a>
//       </div>
//       <div className="navi__item">
//         <a href="#contact">İletişim</a>
//       </div>

//       {/* Dil seçici */}
//       {/* <div className="navbar__actions">
//         <button className="btn">EN</button>
//         <button className="btn">TR</button>
//       </div> */}
//     </nav>
//   );
// }
// export default Navi;

function Navi() {
  const [active, setActive] = useState("#home"); // default seçili olan

  const menuItems = [
    { id: "#home", label: "Ana Sayfa" },
    { id: "#about", label: "Hakkımda" },
    { id: "#projects", label: "Projeler" },
    { id: "#experience", label: "Tecrübeler" },
    { id: "#skills", label: "Yetenekler" },
    { id: "#contact", label: "İletişim" },
  ];

  return (
    <nav className="navi">
      {menuItems.map((item) => (
        <div
          key={item.id}
          // to={item.id}
          // href={item.id}
          className={`navi__item ${active === item.id ? "active" : ""}`}
          onClick={() => {
            setActive(item.id);
            window.location.hash = item.id;
          }}
        >
          {/* <a href={item.id}>{item.label}</a> */}
          <a>{item.label}</a>
        </div>
      ))}
    </nav>
  );
}

export default Navi;
