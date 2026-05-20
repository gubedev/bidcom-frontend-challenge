import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EmptyState from "./empty-state";
import type { Category } from "@/features/products/types";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const categories: Category[] = [
  { slug: "laptops", name: "Laptops", url: "" },
  { slug: "smartphones", name: "Smartphones", url: "" },
  { slug: "tablets", name: "Tablets", url: "" },
];

describe("EmptyState", () => {
  it("renders empty state message", () => {
    render(<EmptyState categories={[]} />);
    expect(
      screen.getByText(/No se encontró ningún producto/)
    ).toBeInTheDocument();
  });

  it("renders category suggestion links", () => {
    render(<EmptyState categories={categories} />);
    expect(screen.getByText("Laptops")).toBeInTheDocument();
    expect(screen.getByText("Smartphones")).toBeInTheDocument();
    expect(screen.getByText("Tablets")).toBeInTheDocument();
  });

  it("each category link points to search page", () => {
    render(<EmptyState categories={categories} />);
    const laptopLink = screen.getByRole("link", { name: "Laptops" });
    expect(laptopLink).toHaveAttribute("href", "/search?s=laptops");
  });

  it("renders correct number of category links", () => {
    render(<EmptyState categories={categories} />);
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("renders no links when categories is empty", () => {
    render(<EmptyState categories={[]} />);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
