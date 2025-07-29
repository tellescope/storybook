import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';

import { ItemViewer } from "./ItemViewer";
import { mockMessages } from "../../data/mock";

const meta: Meta<typeof ItemViewer> = {
  title: "Organism/ItemViewer/API Examples",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
# API Integration Examples

This section demonstrates how to extract all input data from the ItemViewer component and send it to APIs.

## Key Features
- **Complete Data Extraction**: Extract messages, form data, interface settings, and metadata
- **Multiple API Types**: Support for Chat, Email, SMS, and Form APIs
- **Validation**: Built-in data validation before submission
- **Error Handling**: Comprehensive error management
- **Type Safety**: Full TypeScript support
- **Auto-scroll**: Smooth auto-scroll to bottom when new messages are added

## Data Structure
When you submit a message, the API receives:
\`\`\`json
{
  "messages": [...],
  "headerForm": { "to": "...", "subject": "..." },
  "chatInterface": "EMAIL",
  "teamChatEnabled": false,
  "inputValue": "Message content",
  "timestamp": "2024-01-15T10:32:00.000Z",
  "metadata": {
    "userAgent": "...",
    "sessionId": "...",
    "deviceInfo": { ... }
  }
}
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic API Integration Story
export const Basic: Story = {
  render: () => (
    <ItemViewer
      messages={[]}
      config={{
        enableTeamChat: false,
        chatInterface: "CHAT",
        input: {
          placeholder: "Type a message...",
          maxLength: 1000,
          autoFocus: true,
          showCharacterCount: false,
        },
      }}
      callbacks={{
        onMessageSubmit: (content) => console.log('Message submitted:', content),
        onInputChange: (value) => console.log('Input changed:', value),
        onHeaderFormChange: (field, value) => console.log('Header form changed:', field, value),
        onChatInterfaceChange: (chatInterface) => console.log('Interface changed:', chatInterface),
        onTeamChatToggle: (enabled) => console.log('Team chat toggled:', enabled),
        onMessageReaction: (messageId, reaction) => console.log('Message reaction:', messageId, reaction),
        onMessageOptions: (messageId, action) => console.log('Message options:', messageId, action),
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Basic API Integration

Simple example showing how to extract message data and send it to a basic chat API.

### Key Features:
- Extracts message content and basic metadata
- Sends to mock API endpoint
- Handles success/error states
- Updates message list on success
- Auto-scroll to bottom when new messages are added

### API Endpoint: \`/api/chat/messages\`
        `,
      },
    },
  },
};

// Interactive Basic Example
export const Interactive: Story = {
  render: () => {
    const [messages, setMessages] = React.useState<any[]>([
      {
        type: "INCOMING",
        text: "Hello! How can I help you today?",
        createdAt: new Date(Date.now() - 60000), // 1 minute ago
      },
      {
        type: "OUTGOING", 
        text: "Hi! I have a question about the API integration.",
        createdAt: new Date(Date.now() - 30000), // 30 seconds ago
      }
    ]);
    const [loading, setLoading] = React.useState({ isSubmitting: false });
    const [error, setError] = React.useState<string | null>(null);
    
    const callbacks = {
      onMessageSubmit: async (content: string) => {
        setLoading({ isSubmitting: true });
        setError(null);
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Add new message
          const newMessage = {
            type: "OUTGOING",
            text: content,
            createdAt: new Date(),
          };
          
          setMessages(prev => [...prev, newMessage]);
          console.log('Message sent:', content);
          
        } catch (err) {
          setError('Failed to send message');
        } finally {
          setLoading({ isSubmitting: false });
        }
      },
      onInputChange: fn(),
      onHeaderFormChange: fn(),
      onChatInterfaceChange: fn(),
      onTeamChatToggle: fn(),
      onMessageReaction: fn(),
      onMessageOptions: fn(),
    };
    
    return (
      <div>
        <h3>Interactive Example - Auto-scroll to Bottom</h3>
        <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
          Type messages and watch the container automatically scroll to the bottom when new messages are added.
        </p>
        
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '10px',
            padding: '10px',
            background: '#ffebee',
            borderRadius: '4px'
          }}>
            Error: {error}
          </div>
        )}
        
        <ItemViewer
          messages={messages}
          config={{
            enableTeamChat: false,
            chatInterface: "CHAT",
            input: {
              placeholder: "Type a message and press Enter...",
              disabled: loading.isSubmitting,
              error: !!error,
            },
          }}
          callbacks={callbacks}
          loading={loading}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Interactive Example with Auto-scroll

Simple interactive example where you can add messages to the conversation with automatic scrolling.

### Features:
- Type messages and press Enter to send
- Messages appear in the conversation
- **Auto-scroll to bottom** when new messages are added
- Loading state while "sending"
- Error handling
- Console logging of sent messages

### Auto-scroll Behavior:
- Container automatically scrolls to bottom when new messages are added
- Smooth scrolling animation
- Works with both incoming and outgoing messages
- Maintains scroll position during typing

### Try it:
1. Type a message in the input field
2. Press Enter or click Send
3. Watch the message appear and the container scroll to bottom
4. Add multiple messages to see the auto-scroll in action
5. Check the console to see the logged messages
        `,
      },
    },
  },
};

// Test Auto-scroll Story
export const TestAutoScroll: Story = {
  render: () => {
    const [messages, setMessages] = React.useState<any[]>([
      {
        type: "INCOMING",
        text: "Welcome! This is a test message.",
        createdAt: new Date(Date.now() - 60000),
      }
    ]);
    
    const addMessage = () => {
      const newMessage = {
        type: "OUTGOING",
        text: `Test message ${messages.length + 1} - ${new Date().toLocaleTimeString()}`,
        createdAt: new Date(),
      };
      setMessages(prev => [...prev, newMessage]);
    };
    
    return (
      <div>
        <h3>Auto-scroll Test</h3>
        <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
          Click the button below to add messages and test auto-scroll functionality.
        </p>
        
        <button 
          onClick={addMessage}
          style={{
            marginBottom: '10px',
            padding: '8px 16px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Message
        </button>
        
        <ItemViewer
          messages={messages}
          config={{
            enableTeamChat: false,
            chatInterface: "CHAT",
            input: {
              placeholder: "Type a message...",
              disabled: true, // Disable input for this test
            },
          }}
          callbacks={{
            onMessageSubmit: fn(),
            onInputChange: fn(),
            onHeaderFormChange: fn(),
            onChatInterfaceChange: fn(),
            onTeamChatToggle: fn(),
            onMessageReaction: fn(),
            onMessageOptions: fn(),
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Auto-scroll Test

Simple test to verify auto-scroll functionality is working.

### Test Steps:
1. Click "Add Message" button
2. Watch the container scroll to the bottom
3. Click multiple times to add more messages
4. Verify each new message causes auto-scroll

### Expected Behavior:
- Container should automatically scroll to bottom when new messages are added
- Scroll should be smooth and immediate
- Should work with multiple rapid message additions
        `,
      },
    },
  },
}; 