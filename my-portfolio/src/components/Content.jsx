// import { useEffect, useRef } from "react";
// import menuItems from "../data/menuItems.js";
// import "../styles/Content.scss";

// function Content({
//   setIsVisible,
//   setMobileIsVisible,
//   BarRef,
//   setProgressWidth,
// }) {
//   const itemRefs = useRef([]); // tüm section’ları saklayacağız

//   useEffect(() => {
//     let observer;
//     let mobileObserver;

//     observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionId = entry.target.id;
//             // console.log(entry.target);
//             console.log(entry.target.id, entry.intersectionRatio);

//             if (window.innerWidth > 768) setIsVisible(sectionId); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
//           }
//         });
//       },
//       {
//         threshold: 0.3,
//         // threshold: [0, 0.25, 0.5, 0.75, 1.0],
//         rootMargin: "0px",
//         scrollMargin: "0px",
//       }
//     );

//     mobileObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionId = entry.target.id;

//             if (window.innerWidth <= 768) {
//               setMobileIsVisible(sectionId);

//               // Navbar scroll hesaplama - sadece mobilde
//               const currentIndex = menuItems.findIndex(
//                 (item) => item.id === sectionId
//               );
//               const totalItems = menuItems.length;

//               // Navbar'ın scroll edilebilir genişliğini hesapla
//               if (navbarRef?.current) {
//                 const navbar = navbarRef.current;
//                 const maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
//                 const scrollPosition =
//                   (currentIndex / (totalItems - 1)) * maxScrollLeft;

//                 // Navbar'ı smooth scroll et
//                 navbar.scrollTo({
//                   left: scrollPosition,
//                   behavior: "smooth",
//                 });

//                 console.log(
//                   `Mobile Active: ${sectionId}, Navbar Scroll: ${scrollPosition}px`
//                 );
//               }
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     itemRefs.current.forEach((el) => {
//       if (el) {
//         observer.observe(el); //izlediklerimi observer değişkenine ekle
//         mobileObserver.observe(el);
//       }
//     });

//     return () => {
//       observer?.disconnect(); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
//       mobileObserver?.disconnect();
//     };
//   }, [setIsVisible, setMobileIsVisible, BarRef, setProgressWidth]);

//   //   useEffect(() => {
//   //   if (containerRef.current) {
//   //     containerRef.current.scrollLeft = scrollAmount;
//   //   }
//   // }, [scrollAmount]);

//   // ✅ Doğru - callback ref kullan
//   const setRef = (id) => (el) => {
//     if (el) {
//       const index = itemRefs.current.findIndex((item) => item?.id === id);
//       if (index === -1) {
//         itemRefs.current.push(el);
//       } else {
//         itemRefs.current[index] = el;
//       }
//     }
//   };

//   return (
//     <div className="content">
//       {menuItems.map((item, index) => {
//         const Component = item.Component; // referansı çekiyoruz
//         return (
//           <div
//             key={item.id}
//             id={item.id}
//             // ref={(el) => (itemRefs.current[index] = el)}
//             ref={setRef(item.id)}
//             className="content__item"
//           >
//             {item.id !== "home" && (
//               <h2 style={{ backgroundColor: item.color }}>
//                 Şu an buradasınız -- {item.label} Section
//                 <p>{item.no}</p>
//               </h2>
//             )}
//             <Component />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default Content;

import { useEffect, useRef } from "react";
import menuItems from "../data/menuItems.js";
import "../styles/Content.scss";

function Content({ setIsVisible, setMobileIsVisible, BarRef }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    let observer;
    let mobileObserver;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log(entry.target.id, entry.intersectionRatio);

            if (window.innerWidth > 768) setIsVisible(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
        // rootMargin: "0px",
        // scrollMargin: "0px",
      }
    );

    mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            if (window.innerWidth <= 768) {
              setMobileIsVisible(sectionId);

              // Navbar scroll hesaplama - sadece mobilde
              const currentIndex = menuItems.findIndex(
                (item) => item.id === sectionId
              );
              const totalItems = menuItems.length;

              if (BarRef?.current) {
                const navbar = BarRef.current;
                const maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
                const scrollPosition =
                  (currentIndex / (totalItems - 1)) * maxScrollLeft;

                navbar.scrollTo({
                  left: scrollPosition,
                  behavior: "smooth",
                });

                console.log(
                  `Mobile Active: ${sectionId}, Navbar Scroll: ${scrollPosition}px`
                );
                console.log("Window width:", window.innerWidth);
                console.log(
                  "Content items:",
                  document.querySelectorAll(".content__item").length
                );
                console.log("Navbar ref:", document.querySelector(".navi"));
              }
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
        mobileObserver.observe(el);
      }
    });

    return () => {
      observer?.disconnect();
      mobileObserver?.disconnect();
    };
  }, [setIsVisible, setMobileIsVisible, BarRef]);

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
        const Component = item.Component;
        return (
          <div
            key={item.id}
            id={item.id}
            ref={setRef(item.id)}
            className="content__item"
          >
            {item.id !== "home" && (
              <h2 style={{ backgroundColor: item.color }}>
                Şu an buradasınız -- {item.label} Section
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
