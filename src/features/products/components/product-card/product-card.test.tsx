import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "./product-card";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; sizes?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const product = {
  id: 1,
  sku: "apple-mbp-14",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  title: "Apple MacBook Pro 14 M3",
  price: 1299,
};

describe("ProductCard", () => {
  it("renders product title", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("Apple MacBook Pro 14 M3")).toBeInTheDocument();
  });

  it("renders formatted price", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(/1\.299/)).toBeInTheDocument();
  });

  it("links to product detail page", () => {
    render(<ProductCard product={product} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/product/apple-mbp-14");
  });

  it("renders product thumbnail image", () => {
    render(<ProductCard product={product} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", product.thumbnail);
    expect(img).toHaveAttribute("alt", product.title);
  });
});
