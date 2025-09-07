import React, { useState } from "react";
import "../styles/Navi.scss";
import menuItems from "../data/menuItems.js";
import { useLanguage } from "../providers/LanguageProvider";

function Navi({ active, setActive }) {
 const { t, lang, setLang } = useLanguage();

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
          <a>{t(item.label)}</a>
        </div>
      ))}
    </nav>
  );
}

export default Navi;
