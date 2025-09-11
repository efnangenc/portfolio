import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Work.scss";

function Work() {
  const workItem = menuItems.find((item) => item.id === "work");

  return (
    <div className="work">
      <CardHead item={workItem} />
      <div className="projects">
        <div className="item1">1 tanesi</div>
        <div className="item2">1 tanesi</div>
        <div className="item3">1 tanesi</div>
      </div>
      {/* <p>Work</p> */}
    </div>
  );
}
export default Work;
