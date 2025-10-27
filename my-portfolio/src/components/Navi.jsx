import React from "react";
import "../styles/Navi.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Navi({ active, setActive, setMobileActive, BarRef, isMobileVisible, menuItems }) {
  const { t } = useLanguage();

  return (
    <nav className="navi" ref={BarRef}>
      {menuItems.map((item) => (
        <div
          key={item.id} //home
          // ref={BarRef}
          className={`navi__item ${
            (active === item.id || isMobileVisible === item.id) &&
            item.id !== "home"
              ? "active"
              : ""
          }`}
          onClick={() => {
            setActive(item.id);
            setMobileActive(item.id);
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            backgroundColor: item.color,
            // fontFamily: item.fontFamily,
            // Active state için border rengi
            // borderBottomColor: activeItem === item.id ? item.color : 'transparent'
          }}
          href={`#${item.id}`}
        >
          {/* <a href={item.id}>{item.label}</a> */}
          <a className="no">{t(item.no)}</a>
          <a className="text">{t(item.label)}</a>
        </div>
      ))}
    </nav>
  );
}

export default Navi;
