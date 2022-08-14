import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import DropDown from "./DropDown";

afterEach(cleanup);

test("render home link", () => {
  render(<DropDown />);
  const element = screen.getByTitle("home link");
  expect(element).toBeInTheDocument();
});
test("render about link", () => {
  render(<DropDown />);
  const element = screen.getByTitle("about link");
  expect(element).toBeInTheDocument();
});
test("render projects link", () => {
  render(<DropDown />);
  const element = screen.getByTitle("projects link");
  expect(element).toBeInTheDocument();
});
