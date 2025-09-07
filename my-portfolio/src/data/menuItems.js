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
    Component: HomePage,
  },
  {
    id: "about",
    label: "About",
    Component: AboutPage,
  },
  {
    id: "work",
    label: "Work",
    Component: WorkPage,
  },
  {
    id: "talent",
    label: "Talent",
    Component: TalentPage,
  },
  {
    id: "career",
    label: "Career",
    Component: CareerPage,
  },
  {
    id: "contact",
    label: "Contact",
    Component: ContactPage,
  },
];

export default menuItems;
