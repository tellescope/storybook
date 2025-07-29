import React, { useState } from "react";
import { Box } from "@mui/material";

import {
  MessageContainer,
  MessageInput,
  Messages,
  useMessageState,
  type IMessage,
  type MessageCallbacks,
  type MessageConfig,
  type MessageProps,
} from "../../Molecules";
import { fn } from "storybook/internal/test";
import MessageHeader from "../../Molecules/Message/MessageHeader";
import { mockMessages } from "../../data/mock";

/**
 * Unified Message component for displaying and composing chat messages
 *
 * @example
 * ```tsx
 * <Message
 *   messages={messages}
 *   config={{ enableTeamChat: true }}
 *   callbacks={{ onMessageSubmit: handleSubmit }}
 * />
 * ```
 */

const defaultConfig: MessageConfig = {
  enableTeamChat: false,
  chatInterface: "CHAT",
  input: {
    disabled: false,
    placeholder: "Type a message...",
    maxLength: 1000,
    autoFocus: true,
    showCharacterCount: false,
  },
  container: {
    width: "800px",
    height: "600px",
  },
};

// Default callbacks

export const ItemViewer: React.FC<MessageProps> = React.memo(() => {
  const [messages, setMessages] = useState<IMessage[]>(mockMessages);
  const defaultCallbacks: MessageCallbacks = {
    onMessageSubmit: fn(),
    onInputChange: fn(),
    onChatInterfaceChange: fn(),
    onTeamChatToggle: fn(),
    onHeaderFormChange: fn(),
    onMessageReaction: fn(),
    onMessageOptions: fn(),
  };
  const { state, actions } = useMessageState(
    {
      chatInterface: "CHAT",
      enableTeamChat: false,
      input: {
        disabled: false,
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
    defaultCallbacks
  );

  // Merge external loading state with internal state
  const combinedError = state.error;

  return (
    <Box>
      <MessageContainer>
        {/* Header */}
        <MessageHeader
          chatInterface={state.chatInterface}
          content={messages}
          enableTeamChat={state.enableTeamChat}
          setEnableTeamChat={actions.setEnableTeamChat}
          headerFormData={state.headerFormData}
          onHeaderFormChange={actions.setHeaderFormData}
        />

        {/* Messages List */}
        <Messages content={messages} enableTeamChat={state.enableTeamChat} />

        {/* Input */}
        <MessageInput
          enableTeamChat={state.enableTeamChat}
          chatInterface={state.chatInterface}
          setChatInterface={actions.setChatInterface}
          onSubmit={actions.submitMessage}
          onInputChange={actions.setInputValue}
          config={{
            ...defaultConfig.input,
            error: !!combinedError,
          }}
        />
      </MessageContainer>
    </Box>
  );
});

ItemViewer.displayName = "ItemViewer";
