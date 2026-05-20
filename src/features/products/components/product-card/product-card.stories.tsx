import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProductCard from "./product-card";
import { mockProduct, mockProducts } from "@/features/products/mocks";

const meta: Meta<typeof ProductCard> = {
  title: "Products/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-56">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: mockProduct,
  },
};

export const TituloLargo: Story = {
  args: {
    product: mockProducts[3],
  },
};

export const PrecioAlto: Story = {
  args: {
    product: mockProducts[2],
  },
};
