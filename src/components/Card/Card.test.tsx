import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card"; // Adjust path if needed

describe("Card Component", () => {
  it("renders children content", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies default Tailwind classes", () => {
    const { container } = render(<Card>Styled content</Card>);
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement.className).toContain("bg-white");
    expect(cardElement.className).toContain("rounded-lg");
    expect(cardElement.className).toContain("shadow-md");
    expect(cardElement.className).toContain("border");
    expect(cardElement.className).toContain("p-4");
  });

  it("applies custom className if provided", () => {
    const { container } = render(
      <Card className="custom-class">Custom content</Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement.className).toContain("custom-class");
  });

  it("passes additional props to div", () => {
    render(
      <Card data-testid="custom-card">Extra props</Card>
    );

    expect(screen.getByTestId("custom-card")).toBeInTheDocument();
  });
});
