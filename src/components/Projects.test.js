import Projects from "./Projects";
import { render, screen } from "@testing-library/react";

test("renders a projects component", () => {
  const { container } = render(<Projects />);
  expect(container.getElementsByClassName("projects").length).toBe(1);
});
