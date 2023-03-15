import React from "react";
import { render } from "@testing-library/react";
import { SearchBar } from ".";


describe("SearchBar", () => {
  it("should render input element", () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}}/>);
    const inputElement = getByPlaceholderText("Search here");
    expect(inputElement).toBeInTheDocument();
  });
});
