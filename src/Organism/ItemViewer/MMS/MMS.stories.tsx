import type { Meta, StoryObj } from "@storybook/react";
import { MMS } from "./MMS";
import { sampleMessages } from "./data";

const meta: Meta<typeof MMS> = {
  title: "Organism/ItemViewer/MMS",
  component: MMS,
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
    chatInterface: "MMS",
    content: sampleMessages,
    reactions: [],
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
    chatInterface: "MMS",
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
    chatInterface: "MMS",
    reactions: [],
    ...WithMessages.args,
    enableTeamChat: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A view showing the MMS component with Team Chat switch enabled.",
      },
    },
  },
};
