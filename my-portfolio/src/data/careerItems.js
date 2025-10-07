import { useLanguage } from "../providers/LanguageProvider";

export default function useExperiencesData() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      title: t("experiences[0]title"),
      company: t("experience.0.company"),
      type: t("experience.0.type"),
      duration: t("experience.0.duration"),
      location: t("experience.0.location"),
      description: t("experience.0.description"),
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
      ],
      achievements: [
        t("experience.0.achievement1"),
        t("experience.0.achievement2"),
        t("experience.0.achievement3"),
      ],
      color: "#667eea",
      icon: "💻",
    },
    {
      id: 2,
      title: t("experience.1.title"),
      company: t("experience.1.company"),
      type: t("experience.1.type"),
      duration: t("experience.1.duration"),
      location: t("experience.1.location"),
      description: t("experience.1.description"),
      skills: [
        "Arduino IDE",
        "Maintenance and Repair",
        "Production Systems",
        "Team Collaboration",
      ],
      achievements: [
        t("experience.1.achievement1"),
        t("experience.1.achievement2"),
        t("experience.1.achievement3"),
      ],
      color: "#f39c12",
      icon: "⚙️",
    },
    {
      id: 3,
      title: t("experience.2.title"),
      company: t("experience.2.company"),
      type: t("experience.2.type"),
      duration: t("experience.2.duration"),
      location: t("experience.2.location"),
      description: t("experience.2.description"),
      skills: [
        "Analog Circuit Design",
        "PCB Design",
        "Quality Control",
        "5S Kaizen",
        "Production Optimization",
      ],
      achievements: [
        t("experience.2.achievement1"),
        t("experience.2.achievement2"),
        t("experience.2.achievement3"),
      ],
      color: "#e74c3c",
      icon: "🔧",
    },
  ];

  return { experiences };
}
