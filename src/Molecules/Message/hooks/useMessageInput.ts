import { useCallback, useRef, useState } from "react";
import type { ChatInterface } from "../types";

export interface InputConfig {
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  showCharacterCount?: boolean;
  multiline?: boolean;
}

export interface MessageInputProps {
  enableTeamChat: boolean;
  chatInterface: ChatInterface;
  setChatInterface: (chatInterface: ChatInterface) => void;
  onSubmit: (content: string) => void;
  onInputChange?: (value: string) => void;
  config?: InputConfig;
}

export const useMessageInput = ({
  onSubmit,
  onInputChange,
  config = {},
}: Pick<MessageInputProps, "onSubmit" | "onInputChange"> & {
  config?: InputConfig;
}) => {
  const { disabled = false, maxLength = 1000 } = config;
  const [value, setValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (newValue: string) => {
      if (maxLength && newValue.length > maxLength) return;
      setValue(newValue);
      onInputChange?.(newValue);
    },
    [maxLength, onInputChange]
  );

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
    remainingChars: maxLength - value.length,
  };
};
