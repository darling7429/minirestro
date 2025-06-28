import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("loading conatct and checking all features ", () => {
  render(<Contact />);
  const heading = screen.getByRole("button")
  expect(heading).toBeInTheDocument()
});
