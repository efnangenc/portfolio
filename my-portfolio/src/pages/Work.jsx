// import { useState } from "react";
// import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems";
// import projectsData from "../data/workItems";
// import "../styles/Work.scss";

// function Work() {
//   const workItem = menuItems.find((item) => item.id === "work");
//   const [openItem, setOpenItem] = useState(null);
//   const [activeTab, setActiveTab] = useState({});

//   const toggleItem = (itemId) => {
//     const idStr = String(itemId); // string yapıyoruz
//     const isOpen = openItem === idStr;
//     setOpenItem(isOpen ? null : idStr);

//     if (!isOpen) {
//       setActiveTab((prev) => ({ ...prev, [idStr]: 0 })); // yeni açılan item tab 0 aktif
//     }
//   };

//   const toggleTab = (itemId, tabIndex) => {
//     const idStr = String(itemId);
//     setActiveTab((prev) => ({ ...prev, [idStr]: tabIndex }));
//   };

//   return (
//     <div className="work">
//       <CardHead item={workItem} />
//       <div className="projects">
//         {Object.keys(projectsData).map((key) => {
//           const project = projectsData[key];
//           const projectId = String(project.id);
//           // console.log(project); // string olarak kullanıyoruz
//           // console.log(key); // string olarak kullanıyoruz
//           // console.log(project.id); // string olarak kullanıyoruz
//           return (
//             <div key={projectId} className={`project-item ${projectId}`}>
//               <div
//                 className={`project-card ${
//                   openItem === projectId ? "expanded" : ""
//                 }`}
//               >
//                 {/* Project Header */}
//                 <div
//                   className="project-header"
//                   onClick={() => toggleItem(projectId)}
//                 >
//                   <div className="project-image">
//                     <img src={project.image} alt={project.title} />
//                     <div className="image-project-title">
//                       <h3>{project.title}</h3>
//                     </div>
//                     {/* <div
//                       className={`expand-icon ${
//                         openItem === projectId ? "rotated" : ""
//                       }`}
//                     >
//                       <svg
//                         width="48"
//                         height="48"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M6 9L12 15L18 9"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     </div> */}
//                   </div>
//                 </div>
//                 {openItem === projectId && (
//                   <>
//                     <div className="project-ss">
//                       <img src={project.image} alt={project.title} />
//                     </div>

//                     <div className="big-title">
//                       <a>{project.bigtitle}</a>
//                     </div>

//                     <div className="slider">
//                       <div className="slider-item">Yazarım illaki bişey buraya</div>
//                       <div className="slider-item">Yazarım illaki bişey buraya</div>
//                       <div className="slider-item">Ya zarım illaki bişey buraya</div>
//                     </div>

//                     {/* Tab Content */}
//                     <div className="tab-container">
//                       {/* Tab Navigation */}
//                       <div className="tabs">
//                         {Object.keys(project.tabs).map((tabKey, tabIndex) => (
//                           <div
//                             key={tabIndex}
//                             className={
//                               activeTab[projectId] === tabIndex
//                                 ? "tab-item active-tab"
//                                 : "tab-item"
//                             }
//                             onClick={() => toggleTab(projectId, tabIndex)}
//                           >
//                             {project.tabs[tabKey].title}
//                           </div>
//                         ))}
//                       </div>

//                       {/* Tab Panels */}
//                       <div className="tab-content">
//                         {Object.keys(project.tabs).map((tabKey, tabIndex) => (
//                           <div key={tabIndex} className="content-panel">
//                             {activeTab[projectId] === tabIndex && (
//                               <div className="content active-content">
//                                 <div className="content-list">
//                                   {project.tabs[tabKey].content.map(
//                                     (item, index) => (
//                                       <span
//                                         key={index}
//                                         className="content-item"
//                                       >
//                                         {item}
//                                       </span>
//                                     )
//                                   )}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Work;




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
                        <div className="title-decoration">
                          <div className="decoration-line"></div>
                          <div className="decoration-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Project Cards */}
                    <div className="project-showcase">
                     
                      {/* Features Card */}
                      <div className="showcase-card features-card">
                        <div className="card-header">
                          {/* <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div> */}
                          <h3>Key Features</h3>
                        </div>
                        <div className="card-content">
                          <div className="features-list">
                            <div className="feature-item">
                              <div className="feature-bullet"></div>
                              <div className="feature-text">
                                <strong>Multi-Vendor Platform:</strong> Complete marketplace solution with vendor management
                              </div>
                            </div>
                            <div className="feature-item">
                              <div className="feature-bullet"></div>
                              <div className="feature-text">
                                <strong>MVC Architecture:</strong> Scalable and maintainable code structure
                              </div>
                            </div>
                            <div className="feature-item">
                              <div className="feature-bullet"></div>
                              <div className="feature-text">
                                <strong>Cloud Integration:</strong> Azure DevOps for seamless deployment and scaling
                              </div>
                            </div>
                            <div className="feature-item">
                              <div className="feature-bullet"></div>
                              <div className="feature-text">
                                <strong>API Development:</strong> RESTful services with HttpClient optimization
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Card */}
                      <div className="showcase-card tech-card">
                        <div className="card-header">
                          {/* <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                          </div> */}
                          <h3>Technologies Used</h3>
                        </div>
                        <div className="card-content">
                          <div className="tech-grid">
                            <div className="tech-category">
                              <h4>Frontend</h4>
                              <div className="tech-items">
                                <span className="tech-item react">React</span>
                                <span className="tech-item html">HTML5</span>
                                <span className="tech-item css">CSS3</span>
                                <span className="tech-item js">JavaScript</span>
                              </div>
                            </div>
                            <div className="tech-category">
                              <h4>Backend</h4>
                              <div className="tech-items">
                                <span className="tech-item csharp">C#</span>
                                <span className="tech-item dotnet">.NET Core</span>
                                <span className="tech-item api">REST API</span>
                              </div>
                            </div>
                            <div className="tech-category">
                              <h4>Database & Cloud</h4>
                              <div className="tech-items">
                                <span className="tech-item azure">Azure</span>
                                <span className="tech-item sql">SQL Server</span>
                                <span className="tech-item devops">DevOps</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      <div className="showcase-card overview-card">
                        <div className="card-header">
                          {/* <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div> */}
                          <h3>Project Overview</h3>
                        </div>
                        <div className="card-content">
                          <div className="project-timeline">
                            <span className="timeline-period">Nov 2024 - Present</span>
                            <span className="timeline-company">Associated with BilgeAdam Boost</span>
                          </div>
                          <p className="project-description">
                            I developed a comprehensive e-commerce platform integrated with Azure DevOps cloud database. 
                            Utilizing the MVC architecture, I designed a scalable application framework and developed an 
                            intuitive front-end using modern web technologies. Through seamless API integration, I created 
                            a robust multi-vendor platform, focusing on efficient data communication and user experience.
                          </p>
                          <div className="project-highlights">
                            <div className="highlight-item">
                              <span className="highlight-icon">⚡</span>
                              <span>High Performance Architecture</span>
                            </div>
                            <div className="highlight-item">
                              <span className="highlight-icon">🔐</span>
                              <span>Secure Payment Integration</span>
                            </div>
                            <div className="highlight-item">
                              <span className="highlight-icon">📱</span>
                              <span>Responsive Mobile Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <span className="tab-icon">
                              {tabIndex === 0 && "🛠️"}
                              {tabIndex === 1 && "🎨"}
                              {tabIndex === 2 && "⚙️"}
                            </span>
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