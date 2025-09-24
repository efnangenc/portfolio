// import "../styles/About.scss";
// import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems.js";

// function About() {
//   const aboutItem = menuItems.find((item) => item.id === "about");

//   return (
//     <div className="container">
//       <CardHead item={aboutItem} />
//       <div className="about">
//         <div className="about-banner">EFnan Genç</div>
//         <h1>Fullstack Software Developer</h1>
//         {/* <div className="about-text">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. A velit
//           suscipit error aperiam aspernatur, odit unde nihil quo facere nostrum!
//           Blanditiis laborum a dolorem nulla
//         </div> */}
//          <div className="about-video">Slogan belki video</div>
//         {/* <div className="card-sims">
//           <div className="about-card">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//             similique nemo eaque tempora voluptatem! Hic a nobis culpa quisquam
//             harum
//           </div>
//           <div className="sims">burası video</div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default About;

import "../styles/About.scss";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems.js";

function About() {
  const aboutItem = menuItems.find((item) => item.id === "about");

  const defaultData = [
    {
      id: 1,
      icon: "🚀",
      title: "Performance",
      description: "Optimize edilmiş, hızlı çözümler",
    },
    {
      id: 2,
      icon: "🎨",
      title: "Modern Design",
      description: "Kullanıcı deneyimi odaklı tasarım",
    },
    {
      id: 3,
      icon: "⚡",
      title: "Scalability",
      description: "Büyüyen projeler için esnek yapılar",
    },
  ];

  const showcaseData = defaultData;

  return (
    <div className="container">
      <CardHead item={aboutItem} />

      <div className="about">
        {/* Hero Banner */}
        <div className="about-banner">
          <div className="banner-content">
            <div className="name-title">
              <h1 className="name">Efnan Genç</h1>
              <div className="title-wrapper">
                <h2 className="title">Fullstack Software Developer</h2>
                <div className="title-underline"></div>
              </div>
            </div>
            <div className="banner-visual">
              <img src="https://i.pinimg.com/1200x/08/30/b2/0830b2a711fc53167562d967ad53dc83.jpg" alt="foto1" />
              <img src="https://i.pinimg.com/736x/6b/cf/cf/6bcfcf277778f5a2297adcdb30385843.jpg" alt="foto2" />
              <img src="https://i.pinimg.com/736x/be/7a/82/be7a82fd48f568249d602d6ec65d0235.jpg" alt="foto3" />
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="about-skills">
          <div className="skills-content">
            <div className="skills-text">
              <h3>Crafting Digital Experiences</h3>
              <p>
                Tutkulu bir geliştirici olarak, modern teknolojilerle kullanıcı
                odaklı çözümler üretiyorum. Frontend'den backend'e, tasarımdan
                deployment'a kadar her aşamada kaliteli kod yazıyorum.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Showcase */}
        <div className="mission-block">
          <div className="mission-sidebar">
            <div>Our Mission</div>
            <div className="step">
              <span className="step-number">01</span>
              Challenge
            </div>
            <div className="step">
              <span className="step-number">02</span>
              Goal
            </div>
          </div>

          <div className="mission-content">
            <div className="mission-header">
              <h2>We are building</h2>
              <h1>Raw Materials to:</h1>
            </div>

            <div className="mission-section">
              <h3>Performance</h3>
              <p>Optimize edilmiş, hızlı çözümler</p>
            </div>

            <div className="mission-section">
              <h3>Design a better thing</h3>
              <p>
                Go to that <span className="highlight">way forward.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
