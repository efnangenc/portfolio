import React, { useState } from "react";
import "../styles/Navi.scss";
import menuItems from "../data/menuItems.js";

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

function Navi({ active, setActive }) {
  // const [active, setActive] = useState("#home"); // default seçili olan

  return (
    <nav className="navi">
      {menuItems.map((item) => (
        <div
          key={item.id} //home
          className={`navi__item  ${
            active === item.id && item.id !== "home" ? "active" : ""
          }`}
          onClick={() => {
            setActive(item.id);
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          href={`#${item.id}`}
        >
          {/* <a href={item.id}>{item.label}</a> */}
          <a>{item.label}</a>
        </div>
      ))}
    </nav>
  );
}

export default Navi;
