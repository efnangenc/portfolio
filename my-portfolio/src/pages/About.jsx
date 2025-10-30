import "../styles/About.scss";
import CardHead from "../components/CardHead";
import React, { useEffect, useState } from "react";

import { useLanguage } from "../providers/LanguageProvider";

function About({ menuItems }) {
  const aboutItem = menuItems.find((item) => item.id === "about");
  const [main, sub1, sub2, sub3] = aboutItem.colors;
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/portfolio/assets/portrait1.png",
    "/portfolio/assets/portrait2.png",
    "/portfolio/assets/portrait3.png",
    "/portfolio/assets/portrait4.png",
    "/portfolio/assets/portrait5.png",
    "/portfolio/assets/portrait6.png",
    "/portfolio/assets/portrait7.png",
    "/portfolio/assets/portrait8.png",
    "/portfolio/assets/portrait9.png",
    "/portfolio/assets/portrait10.png",
    "/portfolio/assets/portrait11.png",
    "/portfolio/assets/portrait12.png",
    "/portfolio/assets/portrait13.png",
    "/portfolio/assets/portrait14.png",
    "/portfolio/assets/portrait15.png",
    "/portfolio/assets/portrait16.png",
    // "./public/assets/portrait17.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500); // 0.5 saniyede bir değişim

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      <CardHead item={aboutItem} />

      <div className="about">
        <div className="about-banner">
          <div className="banner-content">
            <div className="name-title">
              <h1 className="name">Efnan Genç</h1>
              <div className="title-wrapper">
                <h2 style={{ color: sub3 }} className="title">Fullstack Software Developer</h2>
                <div className="title-underline"></div>
              </div>
            </div>
            <div className="banner-visual">
              <img
                src={images[currentIndex]}
                alt="portrait"
                className="fade-image"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: sub1 }} className="about-skills">
          <div className="skills-content">
            <div className="skills-text">
              <h3>{t("CraftingDigitalEx")}</h3>
              <p>{t("AboutText")}</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: sub2 }} className="mission-block">
          <div className="mission-sidebar">
            <div className="step">{t("Mission")}</div>
            <div className="step">
              <span className="step-number">01</span>
              {t("Challenge")}
            </div>
            <div className="step">
              <span className="step-number">02</span>
              {t("Goal")}
            </div>
          </div>

          <div className="mission-content">
            <div className="mission-section">
              <h3>{t("Deliver")}</h3>
              <p>{t("Efficient")}</p>
            </div>

            <div className="mission-section">
              <h3>{t("Performance")}</h3>
              <p>{t("Clean")}</p>
            </div>

            <div className="mission-section">
              <h3>{t("Trans")}</h3>
              <p>
                {t("Poweredby")}<span style={{ color: sub3 }} className="highlight"> {t("precision")}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
