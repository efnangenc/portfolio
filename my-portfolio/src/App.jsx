import { useRef, useState } from "react";
import "./styles/App.scss";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";
import Content from "./components/Content.jsx";

function App() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState("home");
  const [isMobileVisible, setMobileIsVisible] = useState("home");
  const [progressWidth, setProgressWidth] = useState(0);

  const BarRef = useRef(null);

  return (
    <>
      <div className="languageCont">
        {/* //yabancı dil ayar */}
        <p>{t("click")}</p>
        <button className="langButton" onClick={() => setLang("tr")}>
          🇹🇷 Türkçe
        </button>
        <button className="langButton" onClick={() => setLang("en")}>
          🇬🇧 English
        </button>
        <p>Şu anki dil: {lang}</p>
      </div>

      <br />
      <div className="layout">
        <Navi
          className="navi"
          active={isVisible}
          setActive={setActive}
          BarRef={BarRef}
        />
        <Content
          className="content"
          setIsVisible={setIsVisible}
          setMobileIsVisible={setMobileIsVisible}
          BarRef={BarRef}
          setProgressWidth={setProgressWidth}
        />
      </div>
    </>
  );
}

export default App;
