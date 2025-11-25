import { render, screen} from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const defaultProduct = {
  id: "1",
  title: "Test Product",
  description: "This is a test product.",
  images: [
    { url: "https://example.com/image1.jpg", altText: "Image 1" },
    { url: "https://example.com/image2.jpg", altText: "Image 2" }
  ],
  createdAt: "2023-01-01",
  reviews: [
    {
      id: "r1",
      content: "Excellent sound quality and battery life!",
      date: "2025-10-06",
      user: { username: "SampritiSC", email: "sampriti@gmail.com" }
    }
  ]
};

vi.mock("../../../graphql/hooks", () => ({
  useProduct: vi.fn(() => ({
    loading: false,
    error: false,
    product: defaultProduct
  }))
}));

import ProductDetailsPage from "./ProductDetail";
import { useProduct as useProductMock } from "../../../graphql/hooks";

const mockedUseProduct = vi.mocked(useProductMock);

const renderWithRouter = () =>
  render(
    <MemoryRouter initialEntries={["/product/1"]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

describe("ProductDetailsPage", () => {
  it("shows loading state", () => {
    mockedUseProduct.mockImplementationOnce(() => ({
      loading: true,
      error: undefined,
      product: undefined
    }));
    renderWithRouter();
    expect(screen.getByText(/loading product details/i)).toBeInTheDocument();
  });

  it("shows error state", () => {
    mockedUseProduct.mockImplementationOnce(() => ({
      loading: false,
      error: new Error("error"),
      product: undefined
    }));
    renderWithRouter();
    expect(screen.getByText(/error loading product details/i)).toBeInTheDocument();
  });

  it("renders the active image", () => {
    renderWithRouter();
    const image = screen.getByAltText("Test Product") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("image1.jpg");
  });

  it("renders Add to Cart button", () => {
    renderWithRouter();
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

});
