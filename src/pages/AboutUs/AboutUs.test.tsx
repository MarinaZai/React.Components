import React from "react";
import { render } from "@testing-library/react";
import { AboutUs } from ".";


describe("AboutUs", () => {
  it("should render the AboutUs text", () => {
    const { getByText } = render(<AboutUs />);
    const aboutUsText = getByText("AboutUs");
    expect(aboutUsText).toBeInTheDocument();
  });
});