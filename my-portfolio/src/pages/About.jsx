import "../styles/About.scss";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems.js";

function About() {
  const aboutItem = menuItems.find((item) => item.id === "about");

  return (
    <div className="container">
      <CardHead item={aboutItem} />
      <div className="about">
        <div className="about-banner">EFnan Genç</div>
        <h1>Fullstack Software Developer</h1>
        {/* <div className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A velit
          suscipit error aperiam aspernatur, odit unde nihil quo facere nostrum!
          Blanditiis laborum a dolorem nulla
        </div> */}
         <div className="about-video">Slogan belki video</div>
        {/* <div className="card-sims">
          <div className="about-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            similique nemo eaque tempora voluptatem! Hic a nobis culpa quisquam
            harum
          </div>
          <div className="sims">burası video</div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
