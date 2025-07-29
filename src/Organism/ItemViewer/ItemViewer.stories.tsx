import React from "react";
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
import { ItemViewer } from './ItemViewer';

<ItemViewer
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

// Default callbacks for stories
const defaultCallbacks: MessageCallbacks = {
  onMessageSubmit: fn(),
  onInputChange: fn(),
  onHeaderFormChange: fn(),
  onChatInterfaceChange: fn(),
  onTeamChatToggle: fn(),
  onMessageReaction: fn(),
  onMessageOptions: fn(),
};

export const Default: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "CHAT",
      input: {
        placeholder: "Type a message...",
        maxLength: 1000,
        autoFocus: true,
        showCharacterCount: false,
      },
      container: {
        width: "800px",
        height: "600px",
      },
    },
    callbacks: defaultCallbacks,
  },
};

export const WithTeamChat: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: true,
      chatInterface: "CHAT",
      input: {
        placeholder: "Team chat message...",
        maxLength: 500,
        showCharacterCount: true,
      },
    },
    callbacks: defaultCallbacks,
  },
};

export const EmailInterface: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "EMAIL",
      header: {
        showForm: true,
        formData: {
          to: "recipient@example.com",
          subject: "Test Email",
        },
      },
      input: {
        placeholder: "Compose your email...",
        multiline: true,
        maxLength: 2000,
      },
    },
    callbacks: defaultCallbacks,
  },
};

export const SMSInterface: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "SMS",
      header: {
        showForm: true,
        formData: {
          to: "+1234567890",
          from: "+0987654321",
        },
      },
      input: {
        placeholder: "SMS message (160 chars)",
        maxLength: 160,
        showCharacterCount: true,
      },
    },
    callbacks: defaultCallbacks,
  },
};

export const WithError: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "CHAT",
      input: {
        placeholder: "Type a message...",
        error: true,
      },
    },
    callbacks: defaultCallbacks,
    error: {
      type: 'VALIDATION',
      message: 'Message cannot be empty',
      field: 'input',
    },
  },
};

export const WithLoading: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "CHAT",
      input: {
        placeholder: "Type a message...",
        disabled: true,
      },
    },
    callbacks: defaultCallbacks,
    loading: {
      isSubmitting: true,
      isTyping: false,
      isUploading: false,
    },
  },
};

export const CustomContainer: Story = {
  args: {
    messages: mockMessages,
    config: {
      enableTeamChat: false,
      chatInterface: "CHAT",
      container: {
        width: "600px",
        height: "400px",
        maxWidth: "100%",
        minHeight: "300px",
      },
      input: {
        placeholder: "Type a message...",
      },
    },
    callbacks: defaultCallbacks,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [messages, setMessages] = React.useState(mockMessages);
    const [loading, setLoading] = React.useState({ isSubmitting: false });
    
    const callbacks: MessageCallbacks = {
      onMessageSubmit: async (content: string) => {
        setLoading({ isSubmitting: true });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newMessage = {
          type: "OUTGOING" as const,
          text: content,
          createdAt: new Date(),
        };
        
        setMessages(prev => [...prev, newMessage]);
        setLoading({ isSubmitting: false });
      },
      onInputChange: fn(),
      onHeaderFormChange: fn(),
      onChatInterfaceChange: fn(),
      onTeamChatToggle: fn(),
      onMessageReaction: fn(),
      onMessageOptions: fn(),
    };
    
    return (
      <ItemViewer
        {...args}
        messages={messages}
        callbacks={callbacks}
        loading={loading}
      />
    );
  },
  args: {
    config: {
      enableTeamChat: false,
      chatInterface: "CHAT",
      input: {
        placeholder: "Type a message and press Enter...",
        maxLength: 500,
        showCharacterCount: true,
      },
    },
  },
};