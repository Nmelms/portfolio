import NavBar from "./NavBar";
import App from "../App.js";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

afterEach(cleanup);

test("renders a  hamburger icon in the NavBar", () => {
  const { container } = render(<NavBar />);
  const element = screen.getByTitle("hamburgerMenu");
  expect(element).toBeInTheDocument();
});

test("when click hamburger icon dropdown menu apperas", () => {
  const { container } = render(<NavBar />);
  fireEvent.click(screen.getByTitle("hamburgerMenu"));
  const dropDownContent = container.querySelector(".open");
  expect(dropDownContent).toBeVisible();
});

// test("corret page appears when nav item is clicked...this test does not corretly test", () => {
//   const { container } = render(<App />);
//   fireEvent.click(screen.getByTitle("hamburgerMenu"));
//   const dropDownContent = container.querySelector(".dropDownContent");
//   const navItem = screen.getByText("about");
//   fireEvent.click(navItem);
//   const aboutMe = screen.getByText("About");
//   expect(aboutMe).toBeVisible();
// });
