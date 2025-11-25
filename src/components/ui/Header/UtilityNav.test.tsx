import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, afterEach } from "vitest";
import UtilityNav from "./UtilityNav";
import type { NavItem } from "./types";

describe("UtilityNav", () => {
  const mockOnItemChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders all utility items", () => {
    render(<UtilityNav openItem={null} onItemChange={mockOnItemChange} />);
    expect(screen.getByText("Help")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toHaveAttribute("href", "/signin");
  });

  it("calls onItemChange with Search submenu when Search is clicked", () => {
    render(<UtilityNav openItem={null} onItemChange={mockOnItemChange} />);
    const buttons = screen.getAllByRole("button");
    const searchButton = buttons[0]; // Search button
    fireEvent.click(searchButton);
    expect(mockOnItemChange).toHaveBeenCalledWith(
      expect.objectContaining({
        label: "Search",
        submenuContainerClassName: expect.any(String),
        subMenuContent: expect.any(Object),
      })
    );
  });

  it("closes Search submenu if it is already open", () => {
    const openItem: NavItem = {
      label: "Search",
      submenuContainerClassName: "h-18 !bg-gray-100 justify-center",
    };
    render(<UtilityNav openItem={openItem} onItemChange={mockOnItemChange} />);
    const buttons = screen.getAllByRole("button");
    const searchButton = buttons[0];
    fireEvent.click(searchButton);
    expect(mockOnItemChange).toHaveBeenCalledWith(null);
  });

  it("calls onItemChange with Help submenu when ChevronDown icon is clicked", () => {
    render(<UtilityNav openItem={null} onItemChange={mockOnItemChange} />);
    
    // Find the Help button container
    const helpButton = screen.getByText("Help").closest("button");
    expect(helpButton).toBeInTheDocument();

    const chevronDownIcon = helpButton!.querySelector("svg.lucide-chevron-down");
    expect(chevronDownIcon).toBeInTheDocument();

    fireEvent.click(chevronDownIcon!);

    expect(mockOnItemChange).toHaveBeenCalledWith(
      expect.objectContaining({
        label: "Help",
        submenuContainerClassName: "justify-end",
        submenus: expect.any(Array),
      })
    );
  });

  it("closes Help submenu when ChevronUp icon is clicked", () => {
    const openItem: NavItem = {
      label: "Help",
      submenuContainerClassName: "justify-end",
      submenus: [],
    };
    render(<UtilityNav openItem={openItem} onItemChange={mockOnItemChange} />);

    const helpButton = screen.getByText("Help").closest("button");
    expect(helpButton).toBeInTheDocument();

    // The ChevronUp icon is rendered when Help is open
    // Find the SVG with class "lucide-chevron-up"
    const chevronUpIcon = helpButton!.querySelector("svg.lucide-chevron-up");
    expect(chevronUpIcon).toBeInTheDocument();

    fireEvent.click(chevronUpIcon!);

    expect(mockOnItemChange).toHaveBeenCalledWith(null);
  });
});
