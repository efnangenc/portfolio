import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import projectsData from "../data/workItems";
import "../styles/Work.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Work() {
  const workItem = menuItems.find((item) => item.id === "work");
  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const { t, lang, setLang } = useLanguage();

  const toggleItem = (itemId) => {
    const idStr = String(itemId);
    const isOpen = openItem === idStr;
    setOpenItem(isOpen ? null : idStr);

    if (!isOpen) {
      setActiveTab((prev) => ({ ...prev, [idStr]: 0 }));
    }
  };

  const toggleTab = (itemId, tabIndex) => {
    const idStr = String(itemId);
    setActiveTab((prev) => ({ ...prev, [idStr]: tabIndex }));
  };

  return (
    <div className="work">
      <CardHead item={workItem} />
      <div className="projects">
        {Object.keys(projectsData).map((key) => {
          const project = projectsData[key];
          const projectId = String(project.id);

          return (
            <div key={projectId} className={`project-item ${projectId}`}>
              <div
                className={`project-card ${
                  openItem === projectId ? "expanded" : ""
                }`}
              >
                {/* Project Header */}
                <div
                  className="project-header"
                  onClick={() => toggleItem(projectId)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-project-title">
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                </div>

                {openItem === projectId && (
                  <>
                    <div className="project-ss">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        {/* <div className="project-meta">
                          <span className="project-type">Full Stack Development</span>
                          <span className="project-status">Live Project</span>
                        </div> */}
                      </div>
                    </div>

                    <div className="big-title">
                      <div className="title-content">
                        <h1>{project.bigtitle}</h1>
                        {/* <div className="title-decoration">
                          <div className="decoration-line"></div>
                          <div className="decoration-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    {/* Enhanced Project Cards */}
                    <div className="project-showcase">
                      {Object.keys(project.showcase).map(
                        (cardKey, cardIndex) => {
                          const card = project.showcase[cardKey];

                          // Eğer card "technologiesused" ise farklı işleyelim
                          if (cardKey === "technologiesused") {
                            return (
                              <div
                                key={cardIndex}
                                className="showcase-card tech-card"
                              >
                                <div className="card-header">
                                  <h3>{card.title}</h3>
                                </div>
                                <div className="card-content">
                                  <div className="tech-grid">
                                    {card.content.map((techGroup, i) => (
                                      <div key={i} className="tech-category">
                                        <h4>{techGroup.part}</h4>
                                        <div className="tech-items">
                                          {techGroup.cont.map((tech, j) => (
                                            <span key={j} className="tech-item">
                                              {tech}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          // Eğer card "overview" ise farklı işleyelim
                          if (cardKey === "overview") {
                            return (
                              <div
                                key={cardIndex}
                                className="showcase-card overview-card"
                              >
                                <div className="card-header">
                                  <h3>{card.title}</h3>
                                </div>
                                <div className="card-content">
                                  <div className="project-timeline">
                                    <span className="timeline-period">
                                      {card.timeline}
                                    </span>
                                    <span className="timeline-company">
                                      {card.company}
                                    </span>
                                  </div>
                                  <p className="project-description">
                                    {card.description}
                                  </p>
                                  <div className="project-highlights">
                                    {card.highlights.map((highlight, i) => (
                                      <div key={i} className="highlight-item">
                                        <span className="highlight-icon">
                                          ⚡
                                        </span>
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          // Default: features gibi düz liste
                          return (
                            <div
                              key={cardIndex}
                              className="showcase-card features-card"
                            >
                              <div className="card-header">
                                <h3>{card.title}</h3>
                              </div>
                              <div className="card-content">
                                <div className="features-list">
                                  {card.content.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                      <div className="feature-bullet"></div>
                                      <div className="feature-text">
                                        {feature}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>

                    {/* Tab Container */}
                    <div className="tab-container">
                      <div className="tabs">
                        {Object.keys(project.tabs).map((tabKey, tabIndex) => (
                          <div
                            key={tabIndex}
                            className={
                              activeTab[projectId] === tabIndex
                                ? "tab-item active-tab"
                                : "tab-item"
                            }
                            onClick={() => toggleTab(projectId, tabIndex)}
                          >
                            {/* <span className="tab-icon">
                              {tabIndex === 0 && "🛠️"}
                              {tabIndex === 1 && "🎨"}
                              {tabIndex === 2 && "⚙️"}
                            </span> */}
                            {project.tabs[tabKey].title}
                          </div>
                        ))}
                      </div>

                      <div className="tab-content">
                        {Object.keys(project.tabs).map((tabKey, tabIndex) => (
                          <div key={tabIndex} className="content-panel">
                            {activeTab[projectId] === tabIndex && (
                              <div className="content active-content">
                                <div className="content-list">
                                  {project.tabs[tabKey].content.map(
                                    (item, index) => (
                                      <span
                                        key={index}
                                        className="content-item"
                                      >
                                        <span className="item-icon">
                                          {tabIndex === 0 && "⚡"}
                                          {tabIndex === 1 && "🎨"}
                                          {tabIndex === 2 && "🔧"}
                                        </span>
                                        {item}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
