import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "./Message";

const meta: Meta<typeof Message> = {
  title: "Molecules/Message/Message",
  component: Message,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays a message and a message input.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "A view showing the Message component.",
      },
    },
  },
};
