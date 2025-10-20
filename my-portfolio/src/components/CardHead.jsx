import { useLanguage } from "../providers/LanguageProvider";
import "../styles/CardHead.scss"
import React from "react";


function CardHead({ item }) {
  const { t, lang, setLang } = useLanguage();
  return (
    <div className="container">
      <div className="header" style={{backgroundColor:item.color}}>
        <p className="number">{item.no}</p>
        <p className="text">{t(item.label)}</p>
      </div>
    </div>
  );
}

export default CardHead;
