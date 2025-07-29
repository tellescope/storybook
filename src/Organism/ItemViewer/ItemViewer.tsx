import React, { useState } from "react";
import { Box } from "@mui/material";

import {
  MessageContainer,
  MessageInput,
  Messages,
  useMessageState,
  MessageHeader,
} from "../../Molecules";

import type { MessageProps, IMessage } from "../../Molecules/Message";
import { mockMessages } from "../../data/mock";

/**
 * Unified Message component for displaying and composing chat messages
 *
 * @example
 * ```tsx
 * <ItemViewer
 *   messages={messages}
 *   config={{ enableTeamChat: true }}
 *   callbacks={{ onMessageSubmit: handleSubmit }}
 * />
 * ```
 */
export const ItemViewer: React.FC<MessageProps> = React.memo(
  ({
    messages: externalMessages,
    config = {},
    callbacks: externalCallbacks,
    loading: externalLoading,
    error: externalError,
    className,
    "data-testid": dataTestId,
  }) => {
    // Internal state management
    const [messages, setMessages] = useState<IMessage[]>(
      externalMessages || mockMessages
    );
    const [loading, setLoading] = useState({ isSubmitting: false });
    const [error, setError] = useState<string | null>(null);

    // Track all form state
    const [headerFormData, setHeaderFormData] = useState<any>({});
    const [chatInterface, setChatInterface] = useState<any>("CHAT");
    const [teamChatEnabled, setTeamChatEnabled] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // Use the centralized state management hook
    const { state, actions } = useMessageState(config, {
      onMessageSubmit: async (content: string) => {
        setLoading({ isSubmitting: true });
        setError(null);

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Add new message
          const newMessage: IMessage = {
            type: "OUTGOING",
            text: content,
            createdAt: new Date(),
          };

          setMessages((prev) => [...prev, newMessage]);
          console.log("Message sent:", content);

          // Call external callback if provided
          externalCallbacks?.onMessageSubmit?.(content);
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "Failed to send message";
          setError(errorMessage);
          console.error("API Error:", errorMessage);
        } finally {
          setLoading({ isSubmitting: false });
        }
      },
      onInputChange: (value: string) => {
        setInputValue(value);
        externalCallbacks?.onInputChange?.(value);
      },
      onHeaderFormChange: (field, value) => {
        setHeaderFormData((prev: any) => ({ ...prev, [field]: value }));
        externalCallbacks?.onHeaderFormChange?.(field, value);
      },
      onChatInterfaceChange: (newInterface) => {
        setChatInterface(newInterface);
        // Reset header form data when chat interface changes
        setHeaderFormData({});
        externalCallbacks?.onChatInterfaceChange?.(newInterface);
      },
      onTeamChatToggle: (enabled) => {
        setTeamChatEnabled(enabled);
        externalCallbacks?.onTeamChatToggle?.(enabled);
      },
      onMessageReaction: (messageId, reaction) => {
        externalCallbacks?.onMessageReaction?.(messageId, reaction);
      },
      onMessageOptions: (messageId, action) => {
        externalCallbacks?.onMessageOptions?.(messageId, action);
      },
    });

    // Merge external loading and error states with internal state
    const combinedLoading = {
      ...state.loading,
      ...loading,
      ...externalLoading,
    };
    const combinedError = error || state.error || externalError;

    return (
      <Box
        className={className}
        data-testid={dataTestId}
        sx={{
          width: config.container?.width || "100%",
          height: config.container?.height || "auto",
          maxWidth: config.container?.maxWidth,
          minHeight: config.container?.minHeight,
        }}
      >
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
              ...config.input,
              error: !!combinedError,
              disabled: combinedLoading.isSubmitting,
            }}
          />
        </MessageContainer>
      </Box>
    );
  }
);

ItemViewer.displayName = "ItemViewer";
