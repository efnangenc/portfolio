import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
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
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Tab 1
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Tab 2
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </div>
        </div>
        {/* TAB CONTENT */}
        <div className="content-tabs">
          {toggleState === 1 && (
            <div className="content active-content">
              <p>
                İçerik 1 – Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          )}

          {toggleState === 2 && (
            <div className="content active-content">
              <p>
                İçerik 2 – Doloremque assumenda libero excepturi aut
                consectetur.
              </p>
            </div>
          )}

          {toggleState === 3 && (
            <div className="content active-content">
              <p>
                İçerik 3 – Pariatur quas nostrum illo recusandae dolor
                blanditiis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Talent;
