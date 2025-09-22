// import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems";
// import "../styles/Career.scss";
// import path from "../assets/eman.png";
// import video from "../assets/SPACE TYPE GENERATOR - Google Chrome 2025-09-14 19-45-47.mp4.mp4";
// import careerItems from "../data/careerItems.js";

// function Career() {
//   const careerItem = menuItems.find((item) => item.id === "career");

//   return (
//     <div className="career">
//       <CardHead item={careerItem} />
//       <div className="career-plan">Plan</div>
//       <div className="video-wrapper">
//         <video
//           // controls
//           autoPlay
//           muted
//           loop
//           // poster="path/to/thumbnail.jpg" // Eğer thumbnail varsa
//         >
//           <source src={video} type="video/mp4" />
//           Tarayıcınız video elementini desteklemiyor.
//         </video>
//       </div>
//       <div className="career-route">
//         {/* <img type="png" src={path}></img> */}
//         {careerItems.map((item) => (
//           <div key={item.id} className={`item-${item.id}`}>
//             {/* className="item" */}

//             {item.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Career;



import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Career.scss";
import path from "../assets/eman.png";
import video from "../assets/SPACE TYPE GENERATOR - Google Chrome 2025-09-14 19-45-47.mp4.mp4";

function Career() {
  const careerItem = menuItems.find((item) => item.id === "career");

  const experiences = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "BilgeAdam Teknoloji",
      type: "Full-time",
      duration: "Jun 2024 - Mar 2025 · 10 months",
      location: "Ankara, Türkiye · On-site",
      description: "Developed Back-End applications using ASP.NET Core and Entity Framework Core, while designing modern and dynamic user interfaces with HTML5, CSS3, and JavaScript. Applied Object-Oriented Programming (OOP) principles and SOLID design patterns to deliver high-quality and maintainable software solutions.",
      skills: ["C#", "JavaScript", "ASP.NET Core", "Entity Framework", "MSSQL", "Azure"],
      achievements: [
        "Delivered 5+ full-stack web applications",
        "Improved code quality by implementing SOLID principles",
        "Collaborated in agile development environment"
      ],
      color: "#667eea",
      icon: "💻"
    },
    {
      id: 2,
      title: "Engineer Intern", 
      company: "RHI Magnesita",
      type: "Internship",
      duration: "Jan 2023 - Feb 2023 · 2 months",
      location: "Eskişehir, Türkiye · On-site",
      description: "Collaborated with colleagues to implement a new production tracking system that increased efficiency and reduced downtime. Cooperated with cross-functional teams to streamline production processes.",
      skills: ["Arduino IDE", "Maintenance and Repair", "Production Systems", "Team Collaboration"],
      achievements: [
        "Increased production efficiency by 15%",
        "Reduced system downtime significantly",
        "Successful electrical troubleshooting"
      ],
      color: "#f39c12",
      icon: "⚙️"
    },
    {
      id: 3,
      title: "Engineer Intern",
      company: "ENTES Elektronik", 
      type: "Internship",
      duration: "Jul 2022 - Aug 2022 · 2 months",
      location: "İstanbul, Türkiye · On-site",
      description: "Implemented rigorous quality control measures, reducing product defects within the first month. Diagnosed and resolved technical issues on PCB boards, resulting in a 20% reduction in production downtime.",
      skills: ["Analog Circuit Design", "PCB Design", "Quality Control", "5S Kaizen", "Production Optimization"],
      achievements: [
        "Reduced product defects in first month",
        "20% reduction in production downtime", 
        "Streamlined operations with Kaizen principles"
      ],
      color: "#e74c3c",
      icon: "🔧"
    }
  ];

  const futureGoals = [
    {
      title: "Senior Full Stack Developer",
      timeline: "2025-2026",
      description: "Lead complex projects and mentor junior developers",
      color: "#2ecc71"
    },
    {
      title: "Tech Lead / Solution Architect", 
      timeline: "2027-2028",
      description: "Design scalable systems and guide technical decisions",
      color: "#9b59b6"
    },
    {
      title: "Engineering Manager",
      timeline: "2029+",
      description: "Build and lead high-performing development teams",
      color: "#34495e"
    }
  ];

  return (
    <div className="career">
      <CardHead item={careerItem} />
      
      {/* Career Plan Section */}
      <div className="career-plan">
        <div className="plan-content">
          <div className="plan-header">
            <h2>Career Journey</h2>
            <p>From Hardware to Software: A Path of Continuous Learning</p>
          </div>
          <div className="plan-visual">
            <div className="growth-chart">
              <div className="chart-bar" data-height="30%">
                <span className="bar-label">2022</span>
              </div>
              <div className="chart-bar" data-height="60%">
                <span className="bar-label">2023</span>
              </div>
              <div className="chart-bar" data-height="90%">
                <span className="bar-label">2024</span>
              </div>
              <div className="chart-bar future" data-height="100%">
                <span className="bar-label">2025+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Tarayıcınız video elementini desteklemiyor.
        </video>
        <div className="video-overlay">
          <div className="video-text">
            <h3>Innovation in Motion</h3>
            <p>Crafting digital experiences with passion and precision</p>
          </div>
        </div>
      </div>

      {/* Enhanced Career Timeline */}
      <div className="career-route">
        <div className="timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Experience Items */}
          <div className="experiences-section">
            <h3 className="section-title">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`timeline-item experience-item item-${index + 1}`}>
                <div className="timeline-marker" style={{backgroundColor: exp.color}}>
                  <span className="marker-icon">{exp.icon}</span>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-card">
                    <div className="card-header" style={{borderLeftColor: exp.color}}>
                      <div className="job-info">
                        <h4 className="job-title">{exp.title}</h4>
                        <div className="company-info">
                          <span className="company">{exp.company}</span>
                          <span className="job-type">{exp.type}</span>
                        </div>
                        <div className="duration-location">
                          <span className="duration">{exp.duration}</span>
                          <span className="location">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <p className="description">{exp.description}</p>
                      
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="skills-used">
                        <h5>Technologies & Skills:</h5>
                        <div className="skill-tags">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="skill-tag" style={{backgroundColor: exp.color}}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Goals Section
          <div className="future-goals-section">
            <h3 className="section-title">Future Goals</h3>
            {futureGoals.map((goal, index) => (
              <div key={index} className="timeline-item future-item">
                <div className="timeline-marker future-marker" style={{backgroundColor: goal.color}}>
                  <span className="marker-icon">🎯</span>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-card future-card">
                    <div className="card-header" style={{borderLeftColor: goal.color}}>
                      <h4 className="goal-title">{goal.title}</h4>
                      <span className="goal-timeline">{goal.timeline}</span>
                    </div>
                    <div className="card-body">
                      <p className="goal-description">{goal.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Career;