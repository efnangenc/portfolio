import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Talent.scss";

function Talent() {
  const talentItem = menuItems.find((item) => item.id === "talent");

  return (
    <div className="talent">
      <CardHead item={talentItem}/>
      <div>aa</div>
      <p>Talent</p>
    </div>
  );
}

export default Talent;
