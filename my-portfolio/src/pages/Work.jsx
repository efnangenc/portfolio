import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import projectsData from "../data/workItems";
import "../styles/Work.scss";

function Work() {
  const workItem = menuItems.find((item) => item.id === "work");
  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  // const toggleItem = (itemId) => {
  //   setOpenItem(openItem === itemId ? null : itemId);
  //   if (openItem !== itemId) {
  //     setActiveTab({ ...activeTab, [itemId]: 0 }); // İlk tab'ı aktif yap
  //   }
  // };

  // const toggleTab = (itemId, tabIndex) => {
  //   setActiveTab({ ...activeTab, [itemId]: tabIndex });
  // };
  const toggleItem = (itemId) => {
    const isOpen = openItem === itemId;
    console.log(openItem);
    console.log(itemId);
    console.log(isOpen);
    setOpenItem(isOpen ? null : itemId);

    if (!isOpen) {
      // Yeni açılan item için tab 0'ı aktif yap
      setActiveTab((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  const toggleTab = (itemId, tabIndex) => {
    setActiveTab((prev) => ({ ...prev, [itemId]: tabIndex }));
  };

  return (
    <div className="work">
      <CardHead item={workItem} />
      <div className="projects">
        {Object.keys(projectsData).map((project, i) => (
          <div key={i} className={`project-item ${project.id}`}>
            <div
              className={`project-card ${
                openItem === project.id ? "expanded" : ""
              }`}
            >
              {/* Hover Preview */}
              <div className="preview-overlay">
                <div className="preview-content">
                  <h4>{project.title}</h4>
                  <p>Click to view project details</p>
                </div>
              </div>

              {/* Project Image & Title */}
              <div
                key={i}
                className="project-header"
                onClick={() => toggleItem(project.id)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay">
                    <h3>{project.title}</h3>
                    <div
                      className={`expand-icon ${
                        openItem === project.id ? "rotated" : ""
                      }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              {openItem === project.id && (
                <div className="tab-container">
                  {/* Tab Navigation */}
                  <div className="tabs">
                    {Object.keys(project.tabs).map((tabKey, tabIndex) => (
                      <div
                        key={tabIndex}
                        className={
                          activeTab[project.id] === tabIndex
                            ? "tab-item active-tab"
                            : "tab-item"
                        }
                        onClick={() => toggleTab(project.id, tabIndex)}
                      >
                        {project.tabs[tabKey].title}
                      </div>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {Object.keys(project.tabs).map((tabKey, tabIndex) => (
                      <div key={tabIndex} className="content-panel">
                        {activeTab[project.id] === tabIndex && (
                          <div className="content active-content">
                            <div className="content-list">
                              {project.tabs[tabKey].content.map(
                                (item, itemIndex) => (
                                  <span
                                    key={itemIndex}
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
