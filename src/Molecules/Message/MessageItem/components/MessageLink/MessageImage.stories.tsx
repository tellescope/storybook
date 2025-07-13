import type { Meta, StoryObj } from "@storybook/react";
import { MessageLink } from "./MessageLink";

const meta: Meta<typeof MessageLink> = {
  title: "Molecules/Message/MessageItem/MessageLink",
  component: MessageLink,
  tags: ["autodocs"],
  argTypes: {
    messageType: {
      control: {
        type: "select",
        options: ["INCOMING", "OUTGOING", "TEAM_CHAT"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Incoming: Story = {
  args: {
    link: "https://www.google.com",
    messageType: "INCOMING",
  },
};

export const Outgoing: Story = {
  args: {
    link: "https://www.google.com",
    messageType: "OUTGOING",
    avatar: "https://i.pravatar.cc/32",
  },
};

export const TeamChat: Story = {
  args: {
    link: "https://www.google.com",
    messageType: "TEAM_CHAT",
    avatar: "https://i.pravatar.cc/32",
    reactions: [
      { icon: "👍", count: 2 },
      { icon: "❤️", count: 1 },
    ],
  },
};
