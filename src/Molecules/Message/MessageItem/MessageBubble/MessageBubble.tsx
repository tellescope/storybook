import { Box } from "@mui/material";
import { useMessageItemStyles } from "./styles/maps";
import { MessageOptions } from "../../MessageOptions";
import type { IMessage } from "../../types";
import { MessageText } from "./MessageText";
import { useState } from "react";

interface MessageBubbleProps {
  message: IMessage;
  messageId: string;
  isEmojiPickerActive: boolean;
  onAddReactionClick: (messageId: string, buttonElement: HTMLElement, messageType: string) => void;
  onMessageMouseLeave?: () => void;
}

export const MessageBubble = ({ 
  message, 
  messageId, 
  isEmojiPickerActive, 
  onAddReactionClick,
  onMessageMouseLeave
}: MessageBubbleProps) => {
  const styles = useMessageItemStyles({ messageType: message.type });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMessageMouseLeave) {
      onMessageMouseLeave();
    }
  };

  return (
    <Box 
      sx={styles.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MessageText messageType={message.type} message={message} />
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions 
          createdAt={message.createdAt || new Date()} 
          messageType={message.type}
          messageId={messageId}
          isEmojiPickerActive={isEmojiPickerActive}
          onAddReactionClick={onAddReactionClick}
        />
      </Box>
    </Box>
  );
};
