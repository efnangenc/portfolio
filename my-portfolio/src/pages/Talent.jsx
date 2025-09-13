import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import skillsData from "../data/skillsData";
import "../styles/Talent.scss";

function Talent() {
  const talentItem = menuItems.find((item) => item.id === "talent");

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="talent">
      <CardHead item={talentItem} />
      <div className="slogan"> ?? </div>
      <div className="talent-container">
        <div className="tabs">
          {Object.keys(skillsData).map((key, i) => (
            <div
              key={i}
              className={toggleState === i ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(i)}
            >
              {skillsData[key].title}
            </div>
          ))}
        </div>
        {/* TAB CONTENT */}
        {Object.keys(skillsData).map((key, i) => (
          <div key={i} className="content-tabs">
            {toggleState === i && (
              <div className="content active-content">
                <div className="skill-card">
                  <p>
                    {skillsData[key].skills.map((item, index) => (
                      <span key={index}>
                        {item.icon} {item.name}
                      </span>
                    ))}
                  </p>
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
