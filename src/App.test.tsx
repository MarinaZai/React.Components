import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders main page on home route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const mainPageElement = screen.getByText("What are you looking for today?");
    expect(mainPageElement).toBeInTheDocument();
  });

  test("renders about page on about route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    const aboutPageElement = screen.getByText("AboutUs");
    expect(aboutPageElement).toBeInTheDocument();
  });
});
