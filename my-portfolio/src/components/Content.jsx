import { useEffect, useRef } from "react";
import menuItems from "../data/menuItems.js";
import "../styles/Content.scss";

function Content({setIsVisible}) {
  const itemRefs = useRef([]); // tüm section’ları saklayacağız

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            setIsVisible(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setIsVisible]);

  return (
    <div className="content">
      {menuItems.map((item, index) => {
        const Component = item.Component; // referansı çekiyoruz
        return (
          <div
            key={item.id}
            id={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className="content__item"
          >
            <h2>{item.label}</h2>
            <Component />
          </div>
        );
      })}
    </div>
  );
}
export default Content;
