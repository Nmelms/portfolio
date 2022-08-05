import About from "./About";
import { render, screen } from "@testing-library/react";

test("Renders AboutMe", () => {
  const { container } = render(<About />);
  expect(container.getElementsByClassName("aboutMe").length).toBe(1);
});
