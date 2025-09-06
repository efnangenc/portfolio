import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";
import Content from "./components/Content.jsx";


function App() {
  const { t, lang, setLang } = useLanguage();

  return (
    <>
     {/* //yabancı dil ayar */}
      {/* <p className="read-the-docs">{t("click")}</p>
      <button onClick={() => setLang("tr")}>🇹🇷 Türkçe</button>
      <button onClick={() => setLang("en")}>🇬🇧 English</button>
      <p>Şu anki dil: {lang}</p> */}


      <br />
            <Navi />
            <Content />

    </>
  );
}

export default App;
