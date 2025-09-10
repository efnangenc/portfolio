import { useEffect, useRef } from "react";
import menuItems from "../data/menuItems.js";
import "../styles/Content.scss";

function Content({ setIsVisible }) {
  const itemRefs = useRef([]); // tüm section’ları saklayacağız

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            setIsVisible(entry.target.id); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el); //izlediklerimi observer değişkenine ekle
    });

    return () => observer.disconnect(); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
  }, [setIsVisible]);

  // ✅ Doğru - callback ref kullan
  const setRef = (id) => (el) => {
    if (el) {
      const index = itemRefs.current.findIndex((item) => item?.id === id);
      if (index === -1) {
        itemRefs.current.push(el);
      } else {
        itemRefs.current[index] = el;
      }
    }
  };

  return (
    <div className="content">
      {menuItems.map((item, index) => {
        const Component = item.Component; // referansı çekiyoruz
        return (
          <div
            key={item.id}
            id={item.id}
            // ref={(el) => (itemRefs.current[index] = el)}
            ref={setRef(item.id)}
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
