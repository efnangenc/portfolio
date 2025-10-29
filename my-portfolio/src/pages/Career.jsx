import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems";
import React from "react";

import useExperiencesData from "../data/careerItems";
import "../styles/Career.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Career({ menuItems }) {
  const careerItem = menuItems.find((item) => item.id === "career");
  const [main, sub1, sub2, sub3] = careerItem.colors;
  const { t, lang, setLang } = useLanguage();
  const { experiences } = useExperiencesData();

  // console.log("EXPERIENCES TYPE:", typeof experiences, Array.isArray(experiences), experiences);

  return (
    <div className="career">
      <CardHead item={t(careerItem)} />

      {/* Career Plan Section */}
      <div style={{ backgroundColor: sub1 }} className="career-plan">
        <div className="plan-content">
          <div className="plan-header">
            <h2>{t("CareerJourney")}</h2>
            <p>{t("From")}</p>
          </div>
        </div>
      </div>

      {/* Enhanced Career Timeline */}
      <div style={{ backgroundColor: sub2 }} className="career-route">
        <div className="timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Experience Items */}
          <div className="experiences-section">
            <h3 className="section-title">{t("ProfessionalExperience")}</h3>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item experience-item item-${index + 1}`}
              >
                {/* <div
                  className="timeline-marker"
                  style={{ backgroundColor: exp.color }}
                >
                  <span className="marker-icon">{exp.icon}</span>
                </div> */}

                <div className="timeline-content">
                  <div className="timeline-card">
                    <div
                      className="card-header"
                      style={{ borderLeftColor: exp.color }}
                    >
                      <div className="job-info">
                        <h4 className="job-title">{exp.title}</h4>
                        <div className="company-info">
                          <span className="company">{exp.company}</span>
                          {/* <span className="job-type">{exp.type}</span> */}
                        </div>
                        <div className="duration-location">
                          <span style={{ color: sub3 }} className="duration">{exp.duration}</span>
                          <span style={{ color: sub3 }} className="location">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      {/* <p className="description">{exp.description}</p> */}

                      <div className="achievements">
                        <ul>
                          {exp.achievements.map((achievement, i) => (
                            <li style={{ color: sub3 }} key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="skills-used">
                        {/* <h5>Technologies & Skills:</h5> */}
                        {/* <div className="skill-tags">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="skill-tag"
                              style={{ backgroundColor: exp.color }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div> */}
                        <div className="skill-tags">
                          <div className="skill-tags-track">
                            {/* Skills'i 2 kere tekrarla - sonsuz döngü için */}
                            {[...exp.skills, ...exp.skills, ...exp.skills].map(
                              (skill, i) => (
                                <span
                                  key={i}
                                  className="skill-tag"
                                  style={{ backgroundColor: exp.color }}
                                >
                                  {skill}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Goals Section */}
          {/* <div className="future-goals-section">
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
          </div>  */}
        </div>
      </div>
    </div>
  );
}

export default Career;
