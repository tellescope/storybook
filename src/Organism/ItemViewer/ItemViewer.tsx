import React, { useState } from "react";
import { Box } from "@mui/material";

import {
  MessageContainer,
  MessageInput,
  Messages,
  useMessageState,
  MessageHeader,
} from "../../Molecules";

import { mockMessages } from "../../data/mock";
import type {
  ChatInterface,
  IMessage,
  MessageProps,
  MessageType,
} from "../../Molecules/Message";

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

// const defaultConfig: MessageConfig = {
//   enableTeamChat: false,
//   chatInterface: "CHAT",
//   input: {
//     disabled: false,
//     placeholder: "Type a message...",
//     maxLength: 1000,
//     autoFocus: true,
//     showCharacterCount: false,
//   },
//   container: {
//     width: "800px",
//     height: "600px",
//   },
// };

// Default callbacks

export const ItemViewer: React.FC<MessageProps> = React.memo(() => {
  const [enableTeamChat, setEnableTeamChat] = useState(false);
  const [chatInterface, setChatInterface] = useState<ChatInterface>("CHAT");
  const [messages, setMessages] = useState<IMessage[]>(mockMessages);

  const { state, actions } = useMessageState({
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
  });

  // Merge external loading state with internal state
  const combinedError = state.error;

  const handleSubmit = (value: string) => {
    console.log("value", value);
  };

  const handleInputChange = (value: string) => {
    console.log("value", value);
  };

  const handleChatInterfaceChange = (value: ChatInterface) => {
    console.log("value", value);
    setChatInterface(value);
  };

  const handleTeamChatToggle = (value: boolean) => {
    setEnableTeamChat(value);
  };

  return (
    <Box>
      <MessageContainer>
        {/* Header */}
        <MessageHeader
          chatInterface={chatInterface}
          content={messages}
          enableTeamChat={enableTeamChat}
          setEnableTeamChat={handleTeamChatToggle}
          headerFormData={state.headerFormData}
          onHeaderFormChange={actions.setHeaderFormData}
        />

        {/* Messages List */}
        <Messages content={messages} enableTeamChat={enableTeamChat} />

        {/* Input */}
        <MessageInput
          enableTeamChat={enableTeamChat}
          chatInterface={chatInterface}
          setChatInterface={handleChatInterfaceChange}
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
          config={{
            placeholder: "Type a message...",
            error: !!combinedError,
          }}
        />
      </MessageContainer>
    </Box>
  );
});

ItemViewer.displayName = "ItemViewer";
