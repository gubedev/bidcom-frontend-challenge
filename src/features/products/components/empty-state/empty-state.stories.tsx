import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import EmptyState from "./empty-state";
import { mockCategories } from "@/features/products/mocks";

const meta: Meta<typeof EmptyState> = {
  title: "Products/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const CincoCategorias: Story = {
  args: {
    categories: mockCategories,
  },
};

export const UnaCategoria: Story = {
  args: {
    categories: [mockCategories[0]],
  },
};
