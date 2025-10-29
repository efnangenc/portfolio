import { useState } from "react";
import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems";
import React from "react";

import skillsData from "../data/skillsData";
import "../styles/Talent.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Talent({ menuItems }) {
  const talentItem = menuItems.find((item) => item.id === "talent");
  const [main, sub1, sub2, sub3] = talentItem.colors;
  const [toggleState, setToggleState] = useState(1);
  const { t, lang, setLang } = useLanguage();
  const { skills } = skillsData();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const skillLevels = {
    Expert: 95,
    Advanced: 85,
    Intermediate: 70,
    Beginner: 50,
  };

  return (
    <div className="talent">
      <CardHead item={talentItem} />

      {/* Enhanced Slogan Section */}
      <div style={{ backgroundColor: sub1 }} className="slogan">
        <div className="slogan-content">
          <div className="slogan-text">
            <h2 className="slogan-title">{t("Continuous")}</h2>
            <p className="slogan-subtitle">{t("SloganTalent")}</p>
          </div>
          {/* <div className="slogan-visual">
            <div className="floating-code">
              <span className="code-bracket">{"{"}</span>
              <span className="code-property">skills</span>
              <span className="code-colon">:</span>
              <span className="code-value">∞</span>
              <span className="code-bracket">{"}"}</span>
            </div>
          </div> */}
        </div>
      </div>

      <div style={{ backgroundColor: sub2 }} className="talent-container">
        {/* Tabs */}
        <div className="tabs">
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{ backgroundColor: sub2 }}
              className={toggleState === i ? "tab-item active-tab" : "tab-item"}
              onClick={() => toggleTab(i)}
            >
              <span className="tab-text">{skill.title}</span>
            </div>
          ))}
        </div>

        {/* Enhanced Tab Content */}
        {skills.map((key, i) => (
          <div key={i} className="content-tabs">
            {toggleState === i && (
              <div className="active-content">
                <div className="skill-section">
                  {/* Section Header */}
                  <h3 className="section-title">{key.title}</h3>
                  {/* <div className="section-header">
                    <p className="section-description">
                      {i === 0 &&
                        "Frontend technologies for creating beautiful, interactive user interfaces"}
                      {i === 1 &&
                        "Design tools and frameworks for creating stunning visual experiences"}
                      {i === 2 &&
                        "Backend technologies and databases for robust server-side development"}
                      {i === 3 &&
                        "Mobile and cross-platform development solutions"}
                    </p>
                  </div> */}

                  {/* Skills Grid */}
                  <div className="skills-grid">
                    {skills[i].skills.map((item, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          {/* <div className="skill-icon">{item.icon}</div> */}
                          <div className="skill-info">
                            <h4 className="skill-name">{item.name}</h4>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {/* <div className="skill-progress">
                          <div 
                            className="progress-bar" 
                            style={{
                              width: `${skillLevels[item.level] || skillLevels[index % 4 === 0 ? "Expert" : index % 3 === 0 ? "Advanced" : index % 2 === 0 ? "Intermediate" : "Beginner"]}%`
                            }}
                          ></div>
                        </div> */}

                        {/* Hover Details */}
                        {/* <div className="skill-details">
                          <p className="skill-description">
                            {i === 0 &&
                              index === 0 &&
                              "Modern JavaScript framework for building user interfaces"}
                            {i === 0 &&
                              index === 1 &&
                              "Markup language for structuring web content"}
                            {i === 0 &&
                              index === 2 &&
                              "Styling language for designing beautiful layouts"}
                            {i === 1 &&
                              index === 0 &&
                              "Vector graphics editor for creating stunning designs"}
                            {i === 2 &&
                              index === 0 &&
                              "Server-side JavaScript runtime environment"}
                            {i === 3 &&
                              index === 0 &&
                              "Cross-platform mobile development framework"}
                            {!(
                              (i === 0 && [0, 1, 2].includes(index)) ||
                              (i === 1 && index === 0) ||
                              (i === 2 && index === 0) ||
                              (i === 3 && index === 0)
                            ) &&
                              "Professional experience in modern development practices"}
                          </p>
                        </div> */}
                      </div>
                    ))}
                  </div>

                  {/* <div className="category-summary">
                    <div className="summary-stats">
                      <div className="stat-item">
                        <span className="stat-number">{skillsData[key].skills.length}</span>
                        <span className="stat-label">Technologies</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{Math.floor(Math.random() * 50) + 20}</span>
                        <span className="stat-label">Projects</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{i + 1}+</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Talent;
