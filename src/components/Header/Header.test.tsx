import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from ".";


describe("Header Component", () => {
  test("renders main page link", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const mainPageLink = getByText(/main page/i);
    expect(mainPageLink).toBeInTheDocument();
  });

  test("renders about us link", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const aboutUsLink = getByText(/about us/i);
    expect(aboutUsLink).toBeInTheDocument();
  });
});
