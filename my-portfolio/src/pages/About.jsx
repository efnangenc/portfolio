import "../styles/About.scss";
import CardHead from "../components/CardHead";
import React from "react";

// import menuItems from "../data/menuItems.js";
import { useLanguage } from "../providers/LanguageProvider";

function About({ menuItems }) {
  const aboutItem = menuItems.find((item) => item.id === "about");
  const [main, sub1, sub2, sub3] = aboutItem.colors;
  const { t } = useLanguage();

  return (
    <div className="container">
      <CardHead item={aboutItem} />

      <div className="about">
        <div className="about-banner">
          <div className="banner-content">
            <div className="name-title">
              <h1 className="name">Efnan Genç</h1>
              <div className="title-wrapper">
                <h2 className="title">Fullstack Software Developer</h2>
                <div className="title-underline"></div>
              </div>
            </div>
            <div className="banner-visual">
              <img
                // src="dist/assets/portrait1"
                // alt="foto1"
                loading="eager"
              />
              <img
                // src="https://i.pinimg.com/736x/6b/cf/cf/6bcfcf277778f5a2297adcdb30385843.jpg"
                // alt="foto2"
                loading="eager"
              />
              <img
                // src="https://i.pinimg.com/736x/be/7a/82/be7a82fd48f568249d602d6ec65d0235.jpg"
                // alt="foto3"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div style={{backgroundColor:sub1}} className="about-skills">
        {/* <div  className="about-skills"> */}
          <div className="skills-content">
            <div className="skills-text">
              <h3>Crafting Digital Experiences</h3>
              <p>{t("AboutText")}</p>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:sub2}} className="mission-block">
          <div className="mission-sidebar">
            <div className="step">Mission</div>
            <div className="step">
              <span className="step-number">01</span>
              Challenge
            </div>
            <div className="step">
              <span className="step-number">02</span>
              Goal
            </div>
          </div>

          <div className="mission-content">
            <div className="mission-section">
              <h3>Deliver high-impact solutions</h3>
              <p>Efficient, scalable, and reliable software</p>
            </div>

            <div className="mission-section">
              <h3>Performance drives my process</h3>
              <p>Clean code, fast response, smooth UX</p>
            </div>

            <div className="mission-section">
              <h3>Transforming ideas into impact</h3>
              <p>
                Powered by<span className="highlight"> precision</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
