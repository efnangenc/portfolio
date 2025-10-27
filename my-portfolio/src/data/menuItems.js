import HomePage from "../pages/Home.jsx";
import AboutPage from "../pages/About.jsx";
import WorkPage from "../pages/Work.jsx";
import TalentPage from "../pages/Talent.jsx";
import CareerPage from "../pages/Career.jsx";
import ContactPage from "../pages/Contact.jsx";
import themes from "../data/themes.js";

const getMenuItems = (selectedTheme = "pastel") => {
  const themeColors = themes[selectedTheme];

  return [
    {
      id: "home",
      no: "01",
      label: "Home",
      color: themeColors.home[0], // ana renk
      colors: themeColors.home,   // tüm tonlar
      Component: HomePage,
    },
    {
      id: "about",
      no: "02",
      label: "About",
      color: themeColors.about[0],
      colors: themeColors.about,
      Component: AboutPage,
    },
    {
      id: "work",
      no: "03",
      label: "Work",
      color: themeColors.work[0],
      colors: themeColors.work,
      Component: WorkPage,
    },
    {
      id: "talent",
      no: "04",
      label: "Talent",
      color: themeColors.talent[0],
      colors: themeColors.talent,
      Component: TalentPage,
    },
    {
      id: "career",
      no: "05",
      label: "Career",
      color: themeColors.career[0],
      colors: themeColors.career,
      Component: CareerPage,
    },
    {
      id: "contact",
      no: "06",
      label: "Contact",
      color: themeColors.contact[0],
      colors: themeColors.contact,
      Component: ContactPage,
    },
  ];
};

export default getMenuItems;
