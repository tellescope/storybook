import type { Meta, StoryObj } from "@storybook/react";
import { MessageText } from "./MessageText";

const meta: Meta<typeof MessageText> = {
  title: "Molecules/Message/MessageItem/MessageText",
  component: MessageText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays a message text.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Healthy dumpling recipes!",
    messageType: "INCOMING",
    reactions: [
      {
        icon: "😭",
        count: 1,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "A view showing all possible states of the MessageText component.",
      },
    },
  },
};

export const Outgoing: Story = {
  args: {
    children: "Healthy dumpling recipes!",
    messageType: "OUTGOING",
    reactions: [
      {
        icon: "😭",
        count: 1,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "A view showing all possible states of the MessageText component.",
      },
    },
  },
};

export const IncomingWithAvatar: Story = {
  args: {
    ...Default.args,
    avatar: "https://i.pravatar.cc/32",
  },
};

export const OutgoingWithAvatar: Story = {
  args: {
    ...Outgoing.args,
    avatar: "https://i.pravatar.cc/32",
  },
};

