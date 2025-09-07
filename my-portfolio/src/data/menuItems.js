import HomePage from "../pages/Home.jsx"
import AboutPage from "../pages/About.jsx"
import ProjectsPage from "../pages/Projects.jsx"

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
        id: "projects",
        label: "Projects",
        Component: ProjectsPage,
    },
    {
        id: "work",
        label: "Work",
        Component: AboutPage,
    },
    {
        id: "talent",
        label: "Talent",
        Component: HomePage,
    },
    {
        id: "contact",
        label: "Contact",
        Component: ProjectsPage,
    },
]

export default menuItems;