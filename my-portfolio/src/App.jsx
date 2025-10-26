import { useEffect, useRef, useState } from "react";
import React from "react";
import "./styles/App.scss";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";
import Content from "./components/Content.jsx";
import Settings from "./components/Settings.jsx";

function App() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [MobileActive, setMobileActive] = useState("home");
  const [isVisible, setIsVisible] = useState("home");
  const [isMobileVisible, setMobileIsVisible] = useState("home");
  // Navbar scroll state

  // Sadece navbar ref'i gerekli
  const BarRef = useRef(null);

  return (
    <>
      <Settings/>
      <div className="layout">
        <Navi
          className="navi"
          active={isVisible}
          setActive={setActive}
          setMobileActive={setMobileActive}
          BarRef={BarRef}
          isMobileVisible={isVisible}
        />
        <Content
          className="content"
          setIsVisible={setIsVisible}
          setMobileIsVisible={setMobileIsVisible}
          BarRef={BarRef}
        />
      </div>
    </>
  );
}

export default App;
