import type { Meta, StoryObj } from "@storybook/react";
import { MessageImage } from "./MessageImage";

const meta: Meta<typeof MessageImage> = {
  title: "Molecules/Message/MessageItem/MessageImage",
  component: MessageImage,
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
    image: {
      url: "https://picsum.photos/seed/picsum/200/300",
      fileName: "image.png",
    },
    messageType: "INCOMING",
  },
};

export const Outgoing: Story = {
  args: {
    image: {
      url: "https://picsum.photos/seed/picsum/200/300",
      fileName: "image.png",
    },
    messageType: "OUTGOING",
    avatar: "https://i.pravatar.cc/32",
  },
};

export const TeamChat: Story = {
  args: {
    image: {
      url: "https://picsum.photos/seed/picsum/200/300",
      fileName: "image.png",
    },
    messageType: "TEAM_CHAT",
    avatar: "https://i.pravatar.cc/32",
    reactions: [
      { icon: "👍", count: 2 },
      { icon: "❤️", count: 1 },
    ],
  },
};
