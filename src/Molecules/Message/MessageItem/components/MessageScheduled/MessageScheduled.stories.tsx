import type { Meta, StoryObj } from "@storybook/react";
import { MessageScheduled } from "./MessageScheduled";

const meta: Meta<typeof MessageScheduled> = {
  title: "Molecules/Message/MessageItem/MessageScheduled",
  component: MessageScheduled,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays a scheduled message text.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a scheduled message.",
    messageType: "OUTGOING",
    scheduledTime: "Scheduled for 3/5/2025 at 1:00PM",
    reactions: [],
  },
};

export const WithAvatar: Story = {
  args: {
    ...Default.args,
    avatar: "https://i.pravatar.cc/32",
  },
};
