import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Career.scss";

function Career() {
  const careerItem = menuItems.find((item) => item.id === "career");

  return (
    <div className="career">
      <CardHead item={careerItem} />
      <p>Career</p>
    </div>
  );
}

export default Career;
