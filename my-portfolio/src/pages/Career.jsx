import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Career.scss";

function Career() {
  const careerItem = menuItems.find((item) => item.id === "career");

  return (
    <div className="career">
      <CardHead item={careerItem} />
      <div className="career-plan">Plan</div>
      <div className="career-route">Yol</div>
    </div>
  );
}

export default Career;
