import { Box, InputBase, Stack } from "@mui/material";
import { useCallback, useEffect } from "react";
import { IconButton } from "../../../../components/atoms/button/icon-button";
import { Icon } from "../../../../Atoms";
import { AddCircleOutline, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Toolbar } from "../../components/Toolbar";
import { styles, useMessageInputStyles } from "./styles/maps";
import { Send } from "../../Icons";
import { useMessageInput, type MessageInputProps } from "../../hooks/useMessageInput";


export const MessageInput = ({ 
  enableTeamChat, 
  chatInterface, 
  setChatInterface, 
  onSubmit,
  onInputChange,
  config = {}
}: MessageInputProps) => {
  const {
    placeholder = "Type a message...",
    maxLength = 1000,
    autoFocus = false,
    disabled = false,
    error = false
  } = config;

  const inputStyles = useMessageInputStyles({ disabled, error });
  const {
    value,
    setValue,
    handleSubmit,
    canSubmit,
    inputRef,
    isComposing,
    setIsComposing,
    characterCount,
    remainingChars
  } = useMessageInput({ onSubmit, onInputChange, config });

  // Auto-focus on mount if specified
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit, isComposing]);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, [setIsComposing]);

  const handleCompositionEnd = useCallback(() => {
    setIsComposing(false);
  }, [setIsComposing]);

  return (
    <Box sx={styles.inputContainer(enableTeamChat)}>
      {enableTeamChat && (
        <Box sx={{ display: "flex" }}>
          <IconButton color="secondary">
            <Icon icon={AddCircleOutline} size="medium" />
          </IconButton>
          <IconButton color="secondary">
            <Icon icon={EmojiEmotionsOutlined} size="medium" />
          </IconButton>
        </Box>
      )}
      <Stack display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
        {!enableTeamChat && <Toolbar chatInterface={chatInterface} setChatInterface={setChatInterface} />}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
          <Box sx={inputStyles.root}>
            <IconButton disabled={disabled} sx={inputStyles.textFieldsButton}>
              {/* <TextFieldsIcon /> */}
            </IconButton>
            <InputBase
              ref={inputRef}
              disabled={disabled}
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
              sx={inputStyles.inputBase}
              placeholder={placeholder}
              inputProps={{ 
                "aria-label": "Type a message",
                maxLength: maxLength
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton disabled={disabled} sx={inputStyles.micButton}>
                <Mic />
              </IconButton>
              <IconButton
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="send-button"
                sx={{
                  ...inputStyles.sendButton,
                  opacity: canSubmit ? 1 : 0.5,
                  transition: 'opacity 0.2s ease'
                }}
                aria-label="Send message"
              >
                <Send />
              </IconButton>
            </Box>
          </Box>
          {/* Character counter for better UX */}
          {/* {maxLength && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              fontSize: '0.75rem', 
              color: remainingChars < 50 ? 'error.main' : 'text.secondary',
              px: 1
            }}>
              {characterCount}/{maxLength}
            </Box>
          )} */}
        </Box>
      </Stack>
    </Box>
  );
};
