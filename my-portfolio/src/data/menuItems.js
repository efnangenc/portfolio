import HomePage from "../pages/Home.jsx";
import AboutPage from "../pages/About.jsx";
import WorkPage from "../pages/Work.jsx";
import TalentPage from "../pages/Talent.jsx";
import CareerPage from "../pages/Career.jsx";
import ContactPage from "../pages/Contact.jsx";

const menuItems = [
  {
    id: "home",
    label: "Home",
    color: "#99999C",
    Component: HomePage,
  },
  {
    id: "about",
    label: "About",
    color: "#2E2B22",
    Component: AboutPage,
  },
  {
    id: "work",
    label: "Work",
    color: "#A2B08B",
    Component: WorkPage,
  },
  {
    id: "talent",
    label: "Talent",
    color: "#DAD7C6",
    Component: TalentPage,
  },
  {
    id: "career",
    label: "Career",
    color: "#887F73",
    Component: CareerPage,
  },
  {
    id: "contact",
    label: "Contact",
    color: "#A2B08B",
    Component: ContactPage,
  },
];

export default menuItems;
