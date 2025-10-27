import { useEffect, useRef, useState } from "react";
import React from "react";
import "./styles/App.scss";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";
import Content from "./components/Content.jsx";
import Settings from "./components/Settings.jsx";
import getMenuItems from "./data/menuItems.js";

function App() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [MobileActive, setMobileActive] = useState("home");
  const [isVisible, setIsVisible] = useState("home");
  const [isMobileVisible, setMobileIsVisible] = useState("home");
  const [theme, setTheme] = useState("pastel");
  const menuItems = getMenuItems(theme);
  // Navbar scroll state

  // Sadece navbar ref'i gerekli
  const BarRef = useRef(null);

  // Theme değiştiğinde root class güncellensin
  useEffect(() => {
    const root = document.getElementById("root"); // index.html’deki root
    if (root) {
      root.className = ""; // önce tüm classları temizle
      root.classList.add(theme); // yeni theme class ekle
    }
  }, [theme]);

  return (
    <>
      <div className="layout">
        <Settings theme={theme} setTheme={setTheme} />
        <Navi
          className="navi"
          active={isVisible}
          setActive={setActive}
          setMobileActive={setMobileActive}
          BarRef={BarRef}
          isMobileVisible={isVisible}
          menuItems={menuItems}
        />
        <Content
          className="content"
          setIsVisible={setIsVisible}
          setMobileIsVisible={setMobileIsVisible}
          BarRef={BarRef}
          menuItems={menuItems}
        />
      </div>
    </>
  );
}

export default App;
