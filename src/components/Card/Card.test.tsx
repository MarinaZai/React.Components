import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card Component", () => {
  const cardProps = {
    src: "test.jpg",
    name: "Test Sneaker",
    size: "10",
    price: "100",
    tel: 1234567890,
    email: "test@example.com",
  };

  test("renders card image", () => {
    const { getByAltText } = render(<Card {...cardProps} />);
    const cardImage = getByAltText(cardProps.price);
    expect(cardImage).toBeInTheDocument();
  });

  test("renders card name", () => {
    const { getByText } = render(<Card {...cardProps} />);
    const cardName = getByText(cardProps.name);
    expect(cardName).toBeInTheDocument();
  });

  test("renders card size", () => {
    const { getByText } = render(<Card {...cardProps} />);
    const cardSize = getByText(`Size: ${cardProps.size}`);
    expect(cardSize).toBeInTheDocument();
  });

  test("renders card price", () => {
    const { getByText } = render(<Card {...cardProps} />);
    const cardPrice = getByText(`Price: ${cardProps.price}`);
    expect(cardPrice).toBeInTheDocument();
  });

  test("renders phone and email icons", () => {
    const { getAllByAltText } = render(<Card {...cardProps} />);
    const icons = getAllByAltText(/tel|email/i);
    expect(icons.length).toBe(2);
  });
});
