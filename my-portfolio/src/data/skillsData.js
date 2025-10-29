import { useLanguage } from "../providers/LanguageProvider";

export default function skillsData() {
  const { t } = useLanguage();

  const skills = [
    {
      title: t("talent.0.title"),
      icon: "💻",
      skills: [
        { name: "C#", level: 90, color: "#239120", icon: "🔷" },
        { name: "HTML5", level: 95, color: "#E34F26", icon: "🌐" },
        { name: "CSS3", level: 90, color: "#1572B6", icon: "🎨" },
        { name: "JavaScript", level: 85, color: "#F7DF1E", icon: "⚡" },
        { name: "React.js", level: 80, color: "#61DAFB", icon: "⚛️" },
      ],
    },
    {
      title: t("talent.1.title"),
      icon: "🏗️",
      skills: [
        { name: "ASP.NET Core", level: 88, color: "#512BD4", icon: "🔧" },
        {
          name: "Entity Framework Core",
          level: 85,
          color: "#512BD4",
          icon: "🔗",
        },
        { name: "ASP.NET MVC", level: 90, color: "#512BD4", icon: "🏛️" },
      ],
    },
    {
      title: t("talent.2.title"),
      icon: "🗄️",
      skills: [
        { name: "MSSQL", level: 85, color: "#CC2927", icon: "📊" },
        { name: "Microsoft Azure", level: 75, color: "#0078D4", icon: "☁️" },
      ],
    },
    {
      title: t("talent.3.title"),
      icon: "📚",
      skills: [
        { name: "OOP", level: 90, color: "#4CAF50", icon: "🧩" },
        { name: "SOLID Principles", level: 85, color: "#FF9800", icon: "🏗️" },
        { name: "Clean Code", level: 88, color: "#9C27B0", icon: "✨" },
        { name: "Layered Architecture", level: 82, color: "#607D8B", icon: "🏢" },
      ],
    },
    {
      title: t("talent.4.title"),
      icon: "🕹",
      skills: [
        { name: "Visual Studio", level: 90, color: "#4CAF50", icon: "🧩" },
        { name: "Visual Studio Code", level: 85, color: "#FF9800", icon: "🏗️" },
        { name: "Git & Github", level: 88, color: "#9C27B0", icon: "✨" },
        { name: "Azure Devops", level: 82, color: "#607D8B", icon: "🏢" },
        { name: "Docker Desktop", level: 82, color: "#607D8B", icon: "🏢" },
        { name: "Postman", level: 82, color: "#607D8B", icon: "🏢" },
      ],
    },
  ];
  return { skills };
}
