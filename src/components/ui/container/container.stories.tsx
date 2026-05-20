import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Container from "./container";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <div className="bg-gray-100 min-h-screen py-8">
      <Container>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">max-w-7xl · px-4 sm:px-6 lg:px-8</p>
          <p className="text-body-text font-medium">
            Este bloque está dentro del Container. El ancho máximo es 80rem (1280px)
            con padding horizontal responsivo.
          </p>
        </div>
      </Container>
    </div>
  ),
};
