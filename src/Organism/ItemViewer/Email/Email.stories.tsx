import type { Meta, StoryObj } from "@storybook/react";
import { Email } from "./Email";
import { sampleMessages, reactions } from "./data";

const meta: Meta<typeof Email> = {
  title: "Organism/ItemViewer/Email",
  component: Email,
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
    chatInterface: "EMAIL",
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
    chatInterface: "EMAIL",
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
    chatInterface: "EMAIL",
    reactions: [],
    ...WithMessages.args,
    enableTeamChat: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A view showing the Email component with Team Chat switch enabled.",
      },
    },
  },
};
