import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
interface EmojiPickerProps {
  onEmojiSelect: (emoji: any) => void;
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
}) => {
  return (
    <Picker
      data={data}
      previewPosition="none"
      onEmojiSelect={onEmojiSelect}
      theme="light"
    />
  );
};
