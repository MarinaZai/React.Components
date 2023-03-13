import { render } from "@testing-library/react";
import { ErrorPage } from ".";

describe("ErrorPage Component", () => {
  test("renders error message", () => {
    const { getByText } = render(<ErrorPage />);
    const errorMessage = getByText(/404 error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders image", () => {
    const { getByAltText } = render(<ErrorPage />);
    const image = getByAltText("toy");
    expect(image).toBeInTheDocument();
  });
});
