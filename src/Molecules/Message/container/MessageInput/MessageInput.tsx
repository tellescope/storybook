import { Box, InputBase, Stack } from "@mui/material";
import { useState, useCallback, useRef, useEffect } from "react";
import { IconButton } from "../../../../components/atoms/button/icon-button";
import { Icon } from "../../../../Atoms";
import { AddCircleOutline, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Toolbar } from "../../components/Toolbar";
import type { ChatInterface } from "../../types";
import { useMessageInputStyles } from "./styles/maps";
import { Send } from "../../Icons";
import { styles } from "../MessageHeader";

// Simplified and grouped props
interface InputConfig {
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
}

interface MessageInputProps {
  enableTeamChat: boolean;
  chatInterface: ChatInterface;
  setChatInterface: (chatInterface: ChatInterface) => void;
  onSubmit: (content: string) => void;
  onInputChange?: (value: string) => void;
  config?: InputConfig;
}

// Custom hook for better state management
const useMessageInput = ({
  onSubmit,
  onInputChange,
  config = {}
}: Pick<MessageInputProps, 'onSubmit' | 'onInputChange'> & { config?: InputConfig }) => {
  const { disabled = false, maxLength = 1000 } = config;
  const [value, setValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((newValue: string) => {
    if (maxLength && newValue.length > maxLength) return;
    setValue(newValue);
    onInputChange?.(newValue);
  }, [maxLength, onInputChange]);

  const handleSubmit = useCallback(() => {
    const trimmedValue = value.trim();
    if (!trimmedValue || disabled || isComposing) return;
    
    onSubmit(trimmedValue);
    setValue("");
    inputRef.current?.focus();
  }, [value, disabled, isComposing, onSubmit]);

  const canSubmit = value.trim().length > 0 && !disabled && !isComposing;

  return {
    value,
    setValue: handleChange,
    handleSubmit,
    canSubmit,
    inputRef,
    isComposing,
    setIsComposing,
    characterCount: value.length,
    remainingChars: maxLength - value.length
  };
};

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
          {maxLength && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              fontSize: '0.75rem', 
              color: remainingChars < 50 ? 'error.main' : 'text.secondary',
              px: 1
            }}>
              {characterCount}/{maxLength}
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};
