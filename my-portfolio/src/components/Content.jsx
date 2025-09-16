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
            // console.log(entry.target);
            console.log(entry.target.id, entry.intersectionRatio);
            setIsVisible(entry.target.id); // çalışır - parent component'e hangi section'ın aktif olduğu bildirilir
          }
        });
      },
      {
        // threshold: 0.3,
         threshold: [0, 0.25, 0.5, 0.75, 1.0]
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

// import { useEffect, useRef, useState } from "react";
// import menuItems from "../data/menuItems.js";
// import "../styles/Content.scss";

// function Content({ setIsVisible }) {
//   const itemRefs = useRef([]);
//   const observerRef = useRef(null);
//   const [loadedVideos, setLoadedVideos] = useState(new Set());

//   // Observer'ı yeniden başlat
//   const reinitializeObserver = () => {
//     if (observerRef.current) {
//       observerRef.current.disconnect();
//     }

//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             console.log(entry.target);
//             setIsVisible(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.3,
//         rootMargin: '50px' // Biraz daha erken tetikleme
//       }
//     );

//     itemRefs.current.forEach((el) => {
//       if (el) observerRef.current.observe(el);
//     });
//   };

//   // Video yüklendiğinde observer'ı yenile
//   const handleVideoLoad = (itemId) => {
//     setLoadedVideos(prev => {
//       const newSet = new Set(prev);
//       newSet.add(itemId);
//       return newSet;
//     });
//   };

//   useEffect(() => {
//     // İlk observer'ı başlat
//     reinitializeObserver();

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, [setIsVisible]);

//   // Videolar yüklendiğinde observer'ı yenile
//   useEffect(() => {
//     if (loadedVideos.size > 0) {
//       // Kısa bir delay ile observer'ı yenile
//       const timeout = setTimeout(() => {
//         reinitializeObserver();
//       }, 100);

//       return () => clearTimeout(timeout);
//     }
//   }, [loadedVideos]);

//   const setRef = (id) => (el) => {
//     if (el) {
//       const index = itemRefs.current.findIndex((item) => item?.id === id);
//       if (index === -1) {
//         itemRefs.current.push(el);
//       } else {
//         itemRefs.current[index] = el;
//       }

//       // Element eklendiğinde observer'a ekle
//       if (observerRef.current) {
//         observerRef.current.observe(el);
//       }
//     }
//   };

//   return (
//     <div className="content">
//       {menuItems.map((item, index) => {
//         const Component = item.Component;
//         return (
//           <div
//             key={item.id}
//             id={item.id}
//             ref={setRef(item.id)}
//             className="content__item"
//             // Video yüklenme event'lerini dinle
//             onLoad={() => handleVideoLoad(item.id)}
//             onTransitionEnd={() => handleVideoLoad(item.id)}
//           >
//             <h2>{item.label}</h2>
//             <div
//               // Video içeren component'ler için
//               onLoadedMetadata={() => handleVideoLoad(item.id)}
//               onCanPlay={() => handleVideoLoad(item.id)}
//             >
//               <Component />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Content;
