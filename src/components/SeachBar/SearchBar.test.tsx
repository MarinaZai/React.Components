import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from ".";

describe("SearchBar", () => {
  it("should render input element", () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText("Search here");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update search input in local storage", () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText("Search here");
    fireEvent.change(inputElement, { target: { value: "test search" } });
    expect(localStorage.getItem("searchInput")).toBe("test search");
  });
});
