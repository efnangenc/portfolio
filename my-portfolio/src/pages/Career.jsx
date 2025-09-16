import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Career.scss";
import path from "../assets/eman.png";
import video from "../assets/SPACE TYPE GENERATOR - Google Chrome 2025-09-14 19-45-47.mp4.mp4";
import careerItems from "../data/careerItems.js";

function Career() {
  const careerItem = menuItems.find((item) => item.id === "career");

  return (
    <div className="career">
      <CardHead item={careerItem} />
      <div className="career-plan">Plan</div>
      <div className="video-wrapper">
        <video
          // controls
          autoPlay
          muted
          loop
          // poster="path/to/thumbnail.jpg" // Eğer thumbnail varsa
        >
          <source src={video} type="video/mp4" />
          Tarayıcınız video elementini desteklemiyor.
        </video>
      </div>
      <div className="career-route">
        <img type="png" src={path}></img>
        {careerItems.map((item) => (
          <div key={item.id} className={`item-${item.id}`}>
            {/* className="item" */}

            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
