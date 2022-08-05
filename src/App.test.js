import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hero Section in App", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("hero").length).toBe(1);
});

test("renders AboutMe Section in App", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("aboutMe").length).toBe(1);
});

test("renders Projects Section in App", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("projects").length).toBe(1);
});

test("renders NavBar in App", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("navBar").length).toBe(1);
});
