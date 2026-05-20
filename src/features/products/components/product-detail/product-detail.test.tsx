import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductDetail from "./product-detail";
import { mockProduct } from "@/features/products/mocks";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; sizes?: string; priority?: boolean }) => {
    const { fill: _fill, sizes: _sizes, priority: _priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} />;
  },
}));

describe("ProductDetail", () => {
  it("renderiza el título como heading", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(
      screen.getByRole("heading", { name: mockProduct.title })
    ).toBeInTheDocument();
  });

  it("renderiza el precio formateado", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(/1\.299/)).toBeInTheDocument();
  });

  it("renderiza la marca", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("renderiza la descripción", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(mockProduct.description!)).toBeInTheDocument();
  });

  it("renderiza el SKU en la tabla", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(mockProduct.sku)).toBeInTheDocument();
  });

  it("renderiza la categoría", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(/laptops/i)).toBeInTheDocument();
  });

  it("renderiza el stock", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText("10 unidades")).toBeInTheDocument();
  });

  it("renderiza el rating", () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText("4.8 / 5")).toBeInTheDocument();
  });

  it("no renderiza la marca si no está presente", () => {
    const { brand: _brand, ...productSinBrand } = mockProduct;
    render(<ProductDetail product={productSinBrand} />);
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });

  it("usa images[0] como imagen principal cuando está disponible", () => {
    const productConImages = {
      ...mockProduct,
      images: ["https://cdn.dummyjson.com/product-images/1/1.jpg"],
    };
    render(<ProductDetail product={productConImages} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", productConImages.images[0]);
  });

  it("usa thumbnail como fallback cuando no hay images", () => {
    const { images: _images, ...productSinImages } = mockProduct;
    render(<ProductDetail product={productSinImages} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProduct.thumbnail);
  });
});
