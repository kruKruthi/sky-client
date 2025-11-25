import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "./ProductCard";
import type { Product } from "../../../graphql/queries";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard Component", () => {
  const product: Product = {
    id: "1",
    title: "Test Product",
    description: "This is a test product.",
    images: [
      { url: "https://example.com/image1.jpg", altText: "Image 1" }
    ],
    // reviews: []
  };

  it("renders product title, description, and image", () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product.")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product-0")).toBeInTheDocument();
  });

  it("handles missing images gracefully", () => {
    const productNoImage = { ...product, images: [] };
    render(
      <MemoryRouter>
        <ProductCard {...productNoImage} />
      </MemoryRouter>
    );
    // You can check for a fallback image or absence of image
    // Example: expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
