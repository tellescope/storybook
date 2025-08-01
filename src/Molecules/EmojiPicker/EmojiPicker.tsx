import React, { Suspense, lazy } from "react";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: any) => void;
}

// Lazy load the emoji picker to reduce initial bundle size
const LazyEmojiPicker = lazy(() =>
  import("emoji-picker-react").then((module) => ({
    default: module.default,
  }))
);

/**
 * Optimized EmojiPicker component with lazy loading
 *
 * @param {EmojiPickerProps} props - The props for the EmojiPicker component
 * @param {Function} props.onEmojiSelect - The function to call when an emoji is selected
 * @returns {JSX.Element} The EmojiPicker component
 */
const EmojiPickerComponent: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
}) => {
  return (
    <Suspense fallback={<div />}>
      <LazyEmojiPicker
        lazyLoadEmojis
        previewConfig={{ showPreview: false }}
        skinTonesDisabled
        onEmojiClick={onEmojiSelect}
        searchPlaceholder="Search emojis..."
        width={350}
        searchDisabled
        
        height={400}
      />
    </Suspense>
  );
};

export const EmojiPicker = React.memo(EmojiPickerComponent);
