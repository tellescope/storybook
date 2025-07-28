import React from 'react';
import { Box, Alert, CircularProgress } from '@mui/material';
import type { MessageProps } from './types';
import { useMessageState } from './hooks/useMessageState';
import { MessageContainer } from './container/MessageContainer';
import { MessageHeader } from './MessageHeader/MessageHeader';
import { Messages } from './container/Messages';
import { MessageInput } from './container/MessageInput/MessageInput';

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
export const Message: React.FC<MessageProps> = React.memo(({
  messages,
  config = {},
  callbacks,
  loading,
  error,
  className,
  'data-testid': testId
}) => {
  const { state, actions } = useMessageState(config, callbacks);
  
  // Merge external loading state with internal state
  const combinedError = error || state.error;

  return (
    <Box
      className={className}
      data-testid={testId || 'message-component'}
      sx={{
        width: config.container?.width || '100%',
        height: config.container?.height || 'auto',
        maxWidth: config.container?.maxWidth || '800px',
        minHeight: config.container?.minHeight || '600px',
        display: 'flex',
        flexDirection: 'column'
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
        <Messages
          content={messages}
          enableTeamChat={state.enableTeamChat}
        />

        {/* Input */}
        <MessageInput
          enableTeamChat={state.enableTeamChat}
          chatInterface={state.chatInterface}
          setChatInterface={actions.setChatInterface}
          onSubmit={actions.submitMessage}
          onInputChange={actions.setInputValue}
          config={{
            ...config.input,
            error: !!combinedError
          }}
        />
      </MessageContainer>
    </Box>
  );
});

Message.displayName = 'Message'; 