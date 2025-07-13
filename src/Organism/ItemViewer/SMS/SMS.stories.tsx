import type { Meta, StoryObj } from "@storybook/react";
import { SMS } from "./SMS";
import { sampleMessages, reactions } from "./data";

const meta: Meta<typeof SMS> = {
  title: "Organism/ItemViewer/SMS",
  component: SMS,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays a message and a message input.",
      },
    },
  },
  argTypes: {
    setEnableTeamChat: { action: "setEnableTeamChat" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMessages: Story = {
  args: {
    chatInterface: "SMS",
    content: sampleMessages,
    reactions: reactions,
    enableTeamChat: false,
  },
  parameters: {
    docs: {
      description: {
        story: "A view showing the Message component.",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    chatInterface: "SMS",
    ...WithMessages.args,
    content: [],
  },
  parameters: {
    docs: {
      description: {
        story: "A view showing the Chat component with no messages.",
      },
    },
  },
};

export const TeamChatEnabled: Story = {
  args: {
    chatInterface: "SMS",
    reactions: [],
    ...WithMessages.args,
    enableTeamChat: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A view showing the Chat component with Team Chat switch enabled.",
      },
    },
  },
};
