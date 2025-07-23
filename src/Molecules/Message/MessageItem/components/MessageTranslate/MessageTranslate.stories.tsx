import type { Meta, StoryObj } from "@storybook/react";
import { MessageTranslate } from "./MessageTranslate";

const meta: Meta<typeof MessageTranslate> = {
  title: "Molecules/Message/MessageItem/MessageTranslate",
  component: MessageTranslate,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays a translated message text.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a translated message.",
    messageType: "INCOMING",
    reactions: [],
    isTranslated: true,
  },
};