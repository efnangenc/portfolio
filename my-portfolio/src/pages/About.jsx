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
              <div className="code-snippet">
                <div className="code-line">
                  <span className="keyword">const</span>{" "}
                  <span className="variable">developer</span>{" "}
                  <span className="operator">=</span>{" "}
                  <span className="string">"passionate"</span>
                </div>
                <div className="code-line">
                  <span className="keyword">function</span>{" "}
                  <span className="function">createSolutions</span>
                  <span className="bracket">()</span>{" "}
                  <span className="bracket">{"{"}</span>
                </div>
                <div className="code-line indent">
                  <span className="keyword">return</span>{" "}
                  <span className="string">"innovation"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">{"}"}</span>
                </div>
              </div>
              {/* <div className="floating-elements">
                <div className="element react">⚛️</div>
                <div className="element js">JS</div>
                <div className="element node">📦</div>
                <div className="element database">🗄️</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="about-skills">
          <div className="skills-content">
            <div className="skills-text">
              <h3>Crafting Digital Experiences</h3>
              <p>
                Tutkulu bir geliştirici olarak, modern teknolojilerle kullanıcı odaklı 
                çözümler üretiyorum. Frontend'den backend'e, tasarımdan deployment'a 
                kadar her aşamada kaliteli kod yazıyorum.
              </p>
              {/* <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">MongoDB</span>
                <span className="tag">AWS</span>
                <span className="tag">Docker</span>
              </div> */}
            </div>
            <div className="skills-visual">
              <div className="progress-rings">
                <div className="ring frontend">
                  <div className="ring-progress" data-progress="90">
                    <span className="ring-text">Frontend<br/>90%</span>
                  </div>
                </div>
                <div className="ring backend">
                  <div className="ring-progress" data-progress="85">
                    <span className="ring-text">Backend<br/>85%</span>
                  </div>
                </div>
                <div className="ring design">
                  <div className="ring-progress" data-progress="80">
                    <span className="ring-text">Design<br/>80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Showcase */}
        <div className="about-showcase">
          <div className="showcase-content">
            <div className="showcase-info">
              <h3>Sürekli Öğrenen, Sürekli Gelişen</h3>
              <div className="info-cards">
                <div className="info-card">
                  <div className="card-icon">🚀</div>
                  <div className="card-content">
                    <h4>Performance</h4>
                    <p>Optimize edilmiş, hızlı çözümler</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card-icon">🎨</div>
                  <div className="card-content">
                    <h4>Modern Design</h4>
                    <p>Kullanıcı deneyimi odaklı tasarım</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card-icon">⚡</div>
                  <div className="card-content">
                    <h4>Scalability</h4>
                    <p>Büyüyen projeler için esnek yapılar</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>

        {/* Personal Touch
        <div className="about-personal">
          <div className="personal-content">
            <div className="personal-text">
              <h3>Kod Yazmaktan Fazlası</h3>
              <p>
                Teknoloji sadece bir araç - asıl önemli olan, bu araçla neler yaratabildiğimiz. 
                Her projede, kullanıcıların hayatını kolaylaştıran, işlerini daha verimli hale 
                getiren çözümler üretmeyi hedefliyorum.
              </p>
              <div className="personal-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Tamamlanan Proje</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Yıllık Deneyim</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Öğrenme İsteği</span>
                </div>
              </div>
            </div>
            <div className="personal-visual">
              <div className="quote-card">
                <div className="quote-icon">"</div>
                <div className="quote-text">
                  Code is like humor.<br/>
                  When you have to explain it,<br/>
                  it's bad.
                </div>
                <div className="quote-author">- Cory House</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;