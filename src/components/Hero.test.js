import Hero from "./Hero";
import { render, screen } from "@testing-library/react";

test("Renders Hero With Name displayed", () => {
  render(<Hero />);
  const text = screen.getByText("Nick Melms");
  expect(text).toBeInTheDocument();
});
