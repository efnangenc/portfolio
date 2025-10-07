import "../styles/About.scss";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems.js";
import { useLanguage } from "../providers/LanguageProvider";

function About() {
  const aboutItem = menuItems.find((item) => item.id === "about");
  const { t, lang, setLang } = useLanguage();

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
              <img
                src="https://i.pinimg.com/1200x/08/30/b2/0830b2a711fc53167562d967ad53dc83.jpg"
                alt="foto1"
              />
              <img
                src="https://i.pinimg.com/736x/6b/cf/cf/6bcfcf277778f5a2297adcdb30385843.jpg"
                alt="foto2"
              />
              <img
                src="https://i.pinimg.com/736x/be/7a/82/be7a82fd48f568249d602d6ec65d0235.jpg"
                alt="foto3"
              />
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="about-skills">
          <div className="skills-content">
            <div className="skills-text">
              <h3>Crafting Digital Experiences</h3>
              <p>
                {/* Tutkulu bir geliştirici olarak, modern teknolojilerle kullanıcı
                odaklı çözümler üretiyorum. Frontend'den backend'e, tasarımdan
                deployment'a kadar her aşamada kaliteli kod yazıyorum. */}
                {t("AboutText")}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Showcase */}
        <div className="mission-block">
          <div className="mission-sidebar">
            <div className="step">Mission</div>
            <div className="step">
              {/* <span className="step-number">01</span> */}
              Challenge
            </div>
            <div className="step">
              {/* <span className="step-number">02</span> */}
              Goal
            </div>
          </div>

          <div className="mission-content">
            <div className="mission-section">
              <h3>I am building</h3>
              <p>Raw Materials to:</p>
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
