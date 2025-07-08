import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "./Message";

const meta: Meta<typeof Message> = {
  title: "Molecules/MessageInput",
  component: Message,
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Default</h3>
        <Message />
      </div>
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Disabled</h3>
        <Message disabled />
      </div>
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Error</h3>
        <Message error />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A comparison view showing all possible states of the Message component.",
      },
    },
  },
}; 