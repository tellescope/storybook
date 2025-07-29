import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';

import { mockMessages } from "../../data/mock";
import type { MessageProps, MessageConfig, MessageCallbacks } from "../../Molecules";
import { ItemViewer } from "./ItemViewer";

const meta: Meta<typeof ItemViewer> = {
  title: "Organism/ItemViewer",
  component: ItemViewer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A unified Message component that provides a clean, simplified API for displaying and composing chat messages.

## Features
- **Unified API**: Single component with comprehensive configuration
- **Type Safety**: Full TypeScript support with proper validation
- **Error Handling**: Built-in error states and validation
- **Loading States**: Support for various loading indicators
- **Flexible Configuration**: Extensive customization options
- **Accessibility**: ARIA labels and keyboard navigation support

## Usage
\`\`\`tsx
import { Message } from './Message';

<Message
  messages={messages}
  config={{
    enableTeamChat: true,
    chatInterface: "EMAIL",
    input: { placeholder: "Type a message...", maxLength: 500 }
  }}
  callbacks={{
    onMessageSubmit: handleSubmit,
    onInputChange: handleInputChange
  }}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration object for the message component'
    },
    callbacks: {
      control: 'object',
      description: 'Callback functions for various events'
    },
    loading: {
      control: 'object',
      description: 'Loading state configuration'
    },
    error: {
      control: 'object',
      description: 'Error state configuration'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default configuration
const defaultConfig: MessageConfig = {
  enableTeamChat: false,
  chatInterface: "CHAT",
  input: {
    disabled: false,
    placeholder: "Type a message...",
    maxLength: 1000,
    autoFocus: true,
    showCharacterCount: true
  },
  container: {
    width: "800px",
    height: "600px"
  }
};

// Default callbacks
const defaultCallbacks: MessageCallbacks = {
  onMessageSubmit: fn(),
  onInputChange: fn(),
  onChatInterfaceChange: fn(),
  onTeamChatToggle: fn(),
  onHeaderFormChange: fn(),
  onMessageReaction: fn(),
  onMessageOptions: fn()
};

export const Default: Story = {
  args: {
    messages: mockMessages,
    config: defaultConfig,
    callbacks: defaultCallbacks
  },
  parameters: {
    docs: {
      description: {
        story: "Basic message component with default configuration. Shows a chat interface with message history and input field."
      }
    }
  }
};