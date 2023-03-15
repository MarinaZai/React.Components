import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { sneakers } from "../../static/data";
import { MainPage } from ".";

describe("MainPage", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("should render the header and SearchBar component", () => {
    const { getByText, getByPlaceholderText } = render(<MainPage />);
    const headerElement = getByText("What are you looking for today?");
    const searchInputElement = getByPlaceholderText("Search here");

    expect(headerElement).toBeInTheDocument();
    expect(searchInputElement).toBeInTheDocument();
  });

  it("should save the search input to localStorage when component unmounts", () => {
    const { getByPlaceholderText, unmount } = render(<MainPage />);
    const searchInputElement = getByPlaceholderText("Search here");

    fireEvent.change(searchInputElement, { target: { value: "jordan" } });

    unmount();

    expect(localStorage.getItem("searchInput")).toBe("jordan");
  });
});
