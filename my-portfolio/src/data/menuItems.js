import HomePage from "../pages/Home.jsx";
import AboutPage from "../pages/About.jsx";
import WorkPage from "../pages/Work.jsx";
import TalentPage from "../pages/Talent.jsx";
import CareerPage from "../pages/Career.jsx";
import ContactPage from "../pages/Contact.jsx";

const menuItems = [
  {
    id: "home",
    no: "01",
    // label: "Home",
    // color: "#99999C",
    color: "#98B0B6",
    Component: HomePage,
  },
  {
    id: "about",
    no: "02",
    label: "About",
    // color: "#2E2B22",
    color: "#E1E3DA",
    Component: AboutPage,
  },
  {
    id: "work",
    no: "03",
    label: "Work",
    // color: "#A2B08B",
    color: "#FCE9C5",
    Component: WorkPage,
  },
  {
    id: "talent",
    no: "04",
    label: "Talent",
    // color: "#DAD7C6",
    color: "#D8D9BC",
    Component: TalentPage,
  },
  {
    id: "career",
    no: "05",
    label: "Career",
    // color: "#887F73",
    color: "#D7AB77",
    Component: CareerPage,
  },
  {
    id: "contact",
    no: "06",
    label: "Contact",
    // color: "#A2B08B",
    color: "#C7C2D0",
    Component: ContactPage,
  },
];

export default menuItems;
