import { Box } from "@mui/material";
import { useMessageItemStyles } from "./styles/maps";
import { MessageOptions } from "../MessageOptions";
import type { IMessage } from "../types";
import { MessageText } from "./MessageText";

interface MessageBubbleProps {
  message: IMessage;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const styles = useMessageItemStyles({ messageType: message.type });

  return (
    <Box sx={styles.root}>
      <MessageText messageType={message.type} message={message} />
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
