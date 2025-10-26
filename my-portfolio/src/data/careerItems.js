import { useLanguage } from "../providers/LanguageProvider";

export default function useExperiencesData() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      title: t("experiences.0.title"),
      company: t("experiences.0.company"),
      type: t("experiences.0.type"),
      duration: t("experiences.0.duration"),
      location: t("experiences.0.location"),
      description: t("experiences.0.description"),
      skills: [
        "C#",
        "JavaScript",
        "ASP.NET Core",
        "Entity Framework",
        "MSSQL",
        "Azure",
        "HTML",
        "CSS",
        "OOP",
        "SOLID",
        "Agile Scrum",
      ],
      achievements: [
        t("experiences.0.achievements.0"),
        t("experiences.0.achievements.1"),
        t("experiences.0.achievements.2"),
      ],
      color: "#f8f8f85b",
      icon: "💻",
    },
    {
      id: 2,
      title: t("experiences.1.title"),
      company: t("experiences.1.company"),
      type: t("experiences.1.type"),
      duration: t("experiences.1.duration"),
      location: t("experiences.1.location"),
      description: t("experiences.1.description"),
      skills: [
        t("experiences.1.skills.0"),
        t("experiences.1.skills.1"),
        t("experiences.1.skills.2"),
        t("experiences.1.skills.3"),
      ],
      achievements: [
        t("experiences.1.achievements.0"),
        t("experiences.1.achievements.1"),
        t("experiences.1.achievements.2"),
      ],
      color: "#f8f8f85b",
      icon: "⚙️",
    },
    {
      id: 3,
      title: t("experiences.2.title"),
      company: t("experiences.2.company"),
      type: t("experiences.2.type"),
      duration: t("experiences.2.duration"),
      location: t("experiences.2.location"),
      description: t("experiences.2.description"),
      skills: [
        t("experiences.2.skills.0"),
        t("experiences.2.skills.1"),
        t("experiences.2.skills.2"),
        t("experiences.2.skills.3"),
        t("experiences.2.skills.4"),
      ],
      achievements: [
        t("experiences.2.achievements.0"),
        t("experiences.2.achievements.1"),
        t("experiences.2.achievements.2"),
      ],
      color: "#f8f8f85b",
      icon: "🔧",
    },
  ];

  return { experiences };
}
