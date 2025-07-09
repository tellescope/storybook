import type { Meta, StoryObj } from "@storybook/react";
import { MessageInput } from "./MessageInput";

const meta: Meta<typeof MessageInput> = {
  title: "Molecules/Message/MessageInput",
  component: MessageInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A complete message input interface with a toolbar for various actions and a text input field with send functionality.",
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the entire message input interface",
    },
    error: {
      control: "boolean",
      description: "Shows error state with red border on input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    error: false,
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minWidth: "400px",
      }}
    >
      <div>
        <h3
          style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold" }}
        >
          Default
        </h3>
        <MessageInput />
      </div>
      <div>
        <h3
          style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold" }}
        >
          Disabled
        </h3>
        <MessageInput disabled />
      </div>
      <div>
        <h3
          style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold" }}
        >
          Error
        </h3>
        <MessageInput error />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A comparison view showing all possible states of the Message component.",
      },
    },
  },
};
