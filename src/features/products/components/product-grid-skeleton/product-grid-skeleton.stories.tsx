import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProductGridSkeleton from "./product-grid-skeleton";

const meta: Meta<typeof ProductGridSkeleton> = {
  title: "Products/ProductGridSkeleton",
  component: ProductGridSkeleton,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ProductGridSkeleton>;

export const Default: Story = {};
