import React, { useEffect, useState } from "react";
import "../styles/Settings.scss";
import { useLanguage } from "../providers/LanguageProvider";
// import { useTheme } from "../providers/ThemeProvider";
import menuItems from "../data/menuItems";

function Settings({ theme, setTheme }) {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { lang, setLang } = useLanguage();
  // const { currentTheme, themeMenuItems, changeTheme } = useTheme();
  // const [theme, setTheme] = useState("pastel"); // varsayılan tema

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;

      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;

      if (currentScrollY < lastScrollY) setNavbarVisible(true);
      else if (currentScrollY > lastScrollY && currentScrollY > 100)
        setNavbarVisible(false);

      if (currentScrollY < 50) setNavbarVisible(true);

      setLastScrollY(currentScrollY);
    };

    const scrollListener = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [lastScrollY]);

  return (
    <div className={`languageCont ${navbarVisible ? "visible" : "hidden"}`}>
      {/* Dil Seçimi */}
      <div className="language-navbar">
        <div className="language-buttons">
          <button
            className={`langButton ${lang === "tr" ? "active" : ""}`}
            onClick={() => setLang("tr")}
          >
            Türkçe
          </button>
          <button
            className={`langButton ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            English
          </button>
        </div>
      </div>

      <div className="themes" style={{ margin: "20px" }}>
        {["pastel", "dark", "ocean"].map((themeName) => (
          <button
            className="theme-button"
            key={themeName}
            onClick={() => {
              // console.log("Tema tıklandı:", themeName);
              setTheme(themeName);
            }}
          >
            {/* {themeName.charAt(0).toUpperCase()} */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Settings;
