import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Comprar ahora" },
};

export const Secondary: Story = {
  args: { variant: "secondary", size: "md", children: "Ver más" },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Cancelar" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { variant: "primary", size: "md", children: "No disponible", disabled: true },
};
