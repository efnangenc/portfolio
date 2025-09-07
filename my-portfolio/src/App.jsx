// import { createRef, useEffect, useState } from "react";
// import "./App.css";
// import { useLanguage } from "./providers/LanguageProvider";
// import Navi from "./components/Navi.jsx";
// import Content from "./components/Content.jsx";
// // import menuItems from "../data/menuItems.js";
// import Layout, { Section } from "./components/Layout.jsx";

// function App() {
//   const { t, lang, setLang } = useLanguage();
//   const [active, setActive] = useState("home");
//   const refs = [];

//   // create and track refs for later use
//   const newRef = () => {
//     const ref = createRef();

//     refs.push(ref);

//     return ref;
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         console.log(entries);
//         for (let entry of entries) {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         }
//       },
//       {
//         // root property defaults to the browser viewport

//         // intersection ratio (90% of section must be visibile)
//         threshold: 0.9,
//       }
//     );

//     refs.forEach((ref) =>
//       // observe the refs that were applied to the sections
//       observer.observe(ref.current)
//     );

//     return () => {
//       refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
//     };
//   }, []);

//   return (
//     <>
//       {/* //yabancı dil ayar */}
//       <p className="read-the-docs">{t("click")}</p>
//       <button className="langButton" onClick={() => setLang("tr")}>
//         🇹🇷 Türkçe
//       </button>
//       <button className="langButton" onClick={() => setLang("en")}>
//         🇬🇧 English
//       </button>
//       <p>Şu anki dil: {lang}</p>

//       <br />

//       <Layout refs={refs}>
//         <Section
//           id="home"
//           ref={newRef()}
//           active={active === "home" ? true : false}
//         ></Section>
//       </Layout>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import { useLanguage } from "./providers/LanguageProvider";
import Navi from "./components/Navi.jsx";
import Content from "./components/Content.jsx";

function App() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState("home");

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if(entry.isIntersecting){
  //       console.log(entry.target)
  //     }
  //   })
  // }, {});

  // const todoElements = document.querySelector(".todo")
  // todoElements.forEach(el => observer.observe(el))

  return (
    <>
      {/* //yabancı dil ayar */}
      <p className="read-the-docs">{t("click")}</p>
      <button className="langButton" onClick={() => setLang("tr")}>
        🇹🇷 Türkçe
      </button>
      <button className="langButton" onClick={() => setLang("en")}>
        🇬🇧 English
      </button>
      <p>Şu anki dil: {lang}</p>

      <br />
      <Navi active={isVisible} setActive={setActive} />
      <Content setIsVisible = {setIsVisible}/>
    </>
  );
}

export default App;
