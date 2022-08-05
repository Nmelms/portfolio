import NavBar from "./NavBar";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders a  hamburger icon in the NavBar", () => {
  const { container } = render(<NavBar />);
  const element = screen.getByTitle("hamburgerMenu");
  expect(element).toBeInTheDocument();
});

test("when click hamburger icon dropdown menu apperas", () => {
  const { container } = render(<NavBar />);
  fireEvent.click(screen.getByTitle("hamburgerMenu"));
  const dropDownContent = container.querySelector(".dropDownContent");
  expect(dropDownContent).toBeVisible();
});
