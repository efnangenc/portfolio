import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";

function App() {
  const [count, setCount] = useState(0);
  const { t, lang, setLang } = useLanguage();

  return (
    <>
      <div className="card">
      </div>
      <p className="read-the-docs">{t("click")}</p>
      <button onClick={() => setLang("tr")}>🇹🇷 Türkçe</button>
      <button onClick={() => setLang("en")}>🇬🇧 English</button>

      <p>Şu anki dil: {lang}</p>
      <br />
            <Navi />
      <main>
        <section id="home">
          <h1>Hoş geldiniz 👋</h1>
        </section>
        <section id="about">
          <h2>Hakkımda</h2>
        </section>
        <section id="projects">
          <h2>Projeler</h2>
        </section>
        <section id="contact">
          <h2>İletişim</h2>
        </section>
      </main>

    </>
  );
}

export default App;
