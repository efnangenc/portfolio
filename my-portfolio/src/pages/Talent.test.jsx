import { render, screen } from "@testing-library/react";
import Talent from "./Talent.jsx";
import skillsData from "../data/skillsData.js";

test("renders tabs from skillsData", () => {
  render(<Talent />);

  // 1️⃣ skillsData'nın key sayısı kadar element var mı
  const tabElements = screen.getAllByText((content) => {
    // skillsData'nın değerlerini alıyoruz ve bunların title'ı ile eşleştiriyoruz
    return Object.keys(skillsData).some(
      (key) => content === skillsData[key].title
    );
  });

  expect(tabElements.length).toBe(Object.keys(skillsData).length);
});