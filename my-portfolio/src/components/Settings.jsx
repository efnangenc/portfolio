import { useEffect, useState } from "react";
import "../styles/Settings.scss";
import React from "react";
import { useLanguage } from "../providers/LanguageProvider";

function Settings() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll threshold - minimum hareket miktarı
      const scrollThreshold = 10;

      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
        return; // Küçük hareketleri ignore et
      }

      // Yukarı scroll → navbar göster
      if (currentScrollY < lastScrollY) {
        setNavbarVisible(true);
      }
      // Aşağı scroll → navbar gizle
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 100px'den sonra gizle (en üstte hep görünsün)
        setNavbarVisible(false);
      }

      // En üstteyse her zaman göster
      if (currentScrollY < 50) {
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle için timeout
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [lastScrollY]);

  return (
    <div className={`languageCont ${navbarVisible ? "visible" : "hidden"}`}>
      <div className="language-navbar">
        <div className="language-buttons">
          <button
            className={`langButton ${lang === "tr" ? "active" : ""}`}
            onClick={() => setLang("tr")}
          >
            {/* 🇹🇷 */} Türkçe
          </button>
          <button
            className={`langButton ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            {/* 🇬🇧 */} English
          </button>
        </div>
      </div>
    </div>
  );
}
export default Settings;
