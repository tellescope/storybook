import type { Meta, StoryObj } from "@storybook/react";
import { MessageOptions } from "./MessageOptions";

const meta: Meta<typeof MessageOptions> = {
  title: "Molecules/Message/MessageOptions",
  component: MessageOptions,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays a list of options for a message.",
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
        story: "A view showing all possible states of the MessageOptions component.",
      },
    },
  },
};
