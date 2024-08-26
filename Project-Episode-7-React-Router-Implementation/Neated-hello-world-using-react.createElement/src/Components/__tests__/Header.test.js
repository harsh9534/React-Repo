import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

it("Should load the header component with an login button", () => {
  render(<Header />);
  const button = screen.getByRole("button");
  expect(button).toBeInDocument();
});
