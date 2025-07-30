import type { Meta, StoryObj } from "@storybook/react";
import SendChatButton from "./SendChatButton";

const meta: Meta<typeof SendChatButton> = {
  title: "Atoms/Send Chat Button",
  component: SendChatButton,
};

export default meta;

type Story = StoryObj<typeof SendChatButton>;

export const Default: Story = {
  args: {
    message: "How many patients are in the sync to healthie journey?",
  },
  argTypes: {
    message: {
      control: {
        table: {
          disable: true,
        },
      },
    },
  },
  render: (args) => {
    return <SendChatButton {...args} />;
  },
};
