import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies default variant styling", () => {
    const { container } = render(<Button>Default</Button>);
    const button = container.querySelector("button")!;
    
    expect(button.className).toContain("bg-blue-600");
    expect(button.className).toContain("text-white");
  });

  it("applies outline variant styling", () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    const button = container.querySelector("button")!;
    
    expect(button.className).toContain("border");
    expect(button.className).toContain("text-blue-600");
    expect(button.className).toContain("hover:bg-blue-50");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Button className="custom-class">Custom</Button>
    );
    const button = container.querySelector("button")!;
    expect(button.className).toContain("custom-class");
  });

  it("triggers onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards extra props (like type)", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });
});
