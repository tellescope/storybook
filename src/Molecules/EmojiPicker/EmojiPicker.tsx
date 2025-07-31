import React from "react";
import Picker from 'emoji-picker-react';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: any) => void;
}

/**
 * EmojiPicker component
 *
 * @param {EmojiPickerProps} props - The props for the EmojiPicker component
 * @param {Function} props.onEmojiSelect - The function to call when an emoji is selected
 * @returns {JSX.Element} The EmojiPicker component
 */

const EmojiPickerComponent: React.FC<EmojiPickerProps> = ({ onEmojiSelect }) => {
  return <Picker lazyLoadEmojis previewConfig={{ showPreview: false }} skinTonesDisabled onEmojiClick={(e) => console.log(e)} />;
};

export const EmojiPicker = React.memo(EmojiPickerComponent);
