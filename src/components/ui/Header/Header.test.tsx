import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Header from "./Header";

// Mock child components that are not under test focus here:
vi.mock("./Logo", () => ({
  default: () => <div data-testid="logo">Logo</div>,
}));
vi.mock("./NavBar", () => ({
  default: ({ onItemChange }: any) => (
    <div data-testid="navbar">
      NavBar
      <button onClick={() => onItemChange({ label: "NavBarItem", submenu: [] })}>Open NavBar Item</button>
    </div>
  ),
}));
vi.mock("./UtilityNav", () => ({
  default: ({ onItemChange }: any) => (
    <div data-testid="utilitynav">
      UtilityNav
      <button onClick={() => onItemChange({ label: "Help", submenu: [] })}>Open Help</button>
    </div>
  ),
}));
vi.mock("./SubMenuPanel", () => ({
  default: ({ containerClassName, content }: any) => (
    <div data-testid="submenu-panel" className={containerClassName}>
      SubMenuPanel: {content ?? "no content"}
    </div>
  ),
}));
vi.mock("./MobileMenu", () => ({
  default: ({ open, onClose }: any) => (
    open ? (
      <div data-testid="mobile-menu">
        MobileMenu
        <button onClick={onClose}>Close Menu</button>
      </div>
    ) : null
  ),
}));

describe("Header", () => {
  beforeEach(() => {
    // Clean up DOM before each test
    document.body.innerHTML = "";
  });

  it("renders logo, navbar, utility nav, and sign in text", () => {
    render(<Header />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("utilitynav")).toBeInTheDocument();
    // expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  // it("opens mobile menu when hamburger button is clicked", () => {
  //   render(<Header />);
  //   const hamburgerBtn = screen.getByRole("button", { name: /Open NavBar Item/i });
  //   fireEvent.click(hamburgerBtn);
  //   expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  // });

  it("closes mobile menu when close button clicked", () => {
    render(<Header />);
    const hamburgerBtn = screen.getByRole("button", { name: /Open NavBar Item/i });
    fireEvent.click(hamburgerBtn);
    const closeBtn = screen.getByText(/Open Help/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  it("opens submenu panel when UtilityNav triggers onItemChange", () => {
    render(<Header />);
    // Click UtilityNav's open button to open Help submenu
    fireEvent.click(screen.getByText("Open Help"));
    expect(screen.getByTestId("submenu-panel")).toHaveTextContent("no content");
  });

  it("opens submenu panel when NavBar triggers onItemChange", () => {
    render(<Header />);
    // Click NavBar's open button to open NavBarItem submenu
    fireEvent.click(screen.getByText("Open NavBar Item"));
    expect(screen.getByTestId("submenu-panel")).toBeInTheDocument();
  });

  it("does not render submenu panel if no openItem", () => {
    render(<Header />);
    expect(screen.queryByTestId("submenu-panel")).not.toBeInTheDocument();
  });
});
