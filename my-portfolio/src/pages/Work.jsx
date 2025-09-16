import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import projectsData from "../data/workItems";
import "../styles/Work.scss";

function Work() {
  const workItem = menuItems.find((item) => item.id === "work");
  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const toggleItem = (itemId) => {
    const idStr = String(itemId); // string yapıyoruz
    const isOpen = openItem === idStr;
    setOpenItem(isOpen ? null : idStr);

    if (!isOpen) {
      setActiveTab((prev) => ({ ...prev, [idStr]: 0 })); // yeni açılan item tab 0 aktif
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
          // console.log(project); // string olarak kullanıyoruz
          // console.log(key); // string olarak kullanıyoruz
          // console.log(project.id); // string olarak kullanıyoruz
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
                    {/* <div
                      className={`expand-icon ${
                        openItem === projectId ? "rotated" : ""
                      }`}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
                {openItem === projectId && (
                  <>
                    <div className="project-ss">
                      <img src={project.image} alt={project.title} />
                    </div>

                    <div className="big-title">
                      <a>{project.bigtitle}</a>
                    </div>

                    <div className="slider">
                      <div className="slider-item">A</div>
                      <div className="slider-item">A</div>
                      <div className="slider-item">A</div>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-container">
                      {/* Tab Navigation */}
                      <div className="tabs">
                        {Object.keys(project.tabs).map((tabKey, tabIndex) => (
                          <div
                            // key={tabIndex}
                            className={
                              activeTab[projectId] === tabIndex
                                ? "tab-item active-tab"
                                : "tab-item"
                            }
                            onClick={() => toggleTab(projectId, tabIndex)}
                          >
                            {project.tabs[tabKey].title}
                          </div>
                        ))}
                      </div>

                      {/* Tab Panels */}
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
