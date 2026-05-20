import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EmptyState from "./empty-state";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const categories = ["laptops", "smartphones", "tablets"];

describe("EmptyState", () => {
  it("renders empty state message", () => {
    render(<EmptyState categories={[]} />);
    expect(
      screen.getByText(/No se encontró ningún producto/)
    ).toBeInTheDocument();
  });

  it("renders category suggestion links", () => {
    render(<EmptyState categories={categories} />);
    expect(screen.getByText("laptops")).toBeInTheDocument();
    expect(screen.getByText("smartphones")).toBeInTheDocument();
    expect(screen.getByText("tablets")).toBeInTheDocument();
  });

  it("each category link points to search page", () => {
    render(<EmptyState categories={categories} />);
    const laptopLink = screen.getByRole("link", { name: "laptops" });
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
