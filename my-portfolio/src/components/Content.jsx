import { useEffect, useRef, useState } from "react";
import menuItems from "../data/menuItems.js";
import "../styles/Content.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Content({ setIsVisible, setMobileIsVisible, navbarRef }) {
  const itemRefs = useRef([]); // tüm section’ları saklayacağız
  const [mobileActive, setMobileActive] = useState(null); // ✅ aktif section state
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    if (!itemRefs.current) return;

    // Ekran genişliğine göre threshold seç
    const isMobile = window.innerWidth <= 768;
    // const threshold = isMobile ? 0.2 : 0.3;

    // let observer;
    // let mobileObserver;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionId = entry.target.id;

          if (entry.isIntersecting) {
            // console.log(entry.target);
            console.log(entry.target.id, entry.intersectionRatio);

            if (!isMobile) {
              setIsVisible(sectionId);
            } // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
            else {
              setMobileIsVisible(sectionId);
              setMobileActive(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.1,
        // threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: "0px",
        scrollMargin: "0px",
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el); //izlediklerimi observer değişkenine ekle
      }
    });

    return () => {
      observer?.disconnect(); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
    };
  }, [setIsVisible, setMobileIsVisible, navbarRef]);

  useEffect(() => {
    if (!mobileActive || !navbarRef.current) return;
    const navbar = navbarRef.current;
    const activeItem = navbar.querySelector(".navi__item.active");
    if (!activeItem) return;

    const scrollPosition =
      activeItem.offsetLeft -
      navbar.clientWidth / 2 +
      activeItem.clientWidth / 2;

    navbar.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }, [setMobileIsVisible]);

  //   useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft = scrollAmount;
  //   }
  // }, [scrollAmount]);

  // ✅ Doğru - callback ref kullan
  const setRef = (id) => (el) => {
    if (el) {
      const index = itemRefs.current.findIndex((item) => item?.id === id);
      if (index === -1) {
        itemRefs.current.push(el);
      } else {
        itemRefs.current[index] = el;
      }
    } else return;
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
            {item.id !== "home" && (
              <h2 style={{ backgroundColor: item.color }}>
                {t("YoureHere")} -- {t(item.label)} {t("Section")}
                <p>{item.no}</p>
              </h2>
            )}
            <Component />
          </div>
        );
      })}
    </div>
  );
}
export default Content;
