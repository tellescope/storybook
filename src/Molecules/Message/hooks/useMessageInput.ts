import { useState, useCallback, useRef } from 'react';

export interface UseMessageInputOptions {
  onSubmit: (content: string) => void;
  onInputChange?: (value: string) => void;
  disabled?: boolean;
  maxLength?: number;
  validateInput?: (value: string) => string | null; // Returns error message or null
}

export const useMessageInput = ({
  onSubmit,
  onInputChange,
  disabled = false,
  maxLength = 1000,
  validateInput
}: UseMessageInputOptions) => {
  const [value, setValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((newValue: string) => {
    // Length validation
    if (maxLength && newValue.length > maxLength) return;
    
    // Custom validation
    const validationError = validateInput?.(newValue) || null;
    setError(validationError);
    
    setValue(newValue);
    onInputChange?.(newValue);
  }, [maxLength, onInputChange, validateInput]);

  const handleSubmit = useCallback(() => {
    const trimmedValue = value.trim();
    if (!trimmedValue || disabled || isComposing || error) return;
    
    onSubmit(trimmedValue);
    setValue("");
    setError(null);
    inputRef.current?.focus();
  }, [value, disabled, isComposing, error, onSubmit]);

  const canSubmit = value.trim().length > 0 && !disabled && !isComposing && !error;

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const clear = useCallback(() => {
    setValue("");
    setError(null);
  }, []);

  return {
    value,
    setValue: handleChange,
    handleSubmit,
    canSubmit,
    inputRef,
    isComposing,
    setIsComposing,
    error,
    characterCount: value.length,
    remainingChars: maxLength - value.length,
    focus,
    clear
  };
};