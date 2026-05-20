import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProductGrid from "./product-grid";
import { mockProducts, mockProduct } from "@/features/products/mocks";
import type { Product } from "@/features/products/types";

const meta: Meta<typeof ProductGrid> = {
  title: "Products/ProductGrid",
  component: ProductGrid,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

export const CuatroItems: Story = {
  args: {
    products: mockProducts,
  },
};

export const UnItem: Story = {
  args: {
    products: [mockProduct],
  },
};

export const VeinteItems: Story = {
  args: {
    products: Array.from({ length: 20 }, (_, i): Product => ({
      ...mockProduct,
      id: i + 1,
      sku: `${mockProduct.sku}-${i + 1}`,
      title: `${mockProduct.title} ${i + 1}`,
    })),
  },
};
