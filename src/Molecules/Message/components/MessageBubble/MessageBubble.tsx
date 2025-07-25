import { Box } from "@mui/material";
import { MessageContent } from "./components";

import { useMessageItemStyles } from "./styles/maps";
import type { IMessage } from "../../types";
import { MessageOptions } from "../../MessageOptions";

interface MessageBubbleProps {
  message: IMessage;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const styles = useMessageItemStyles({ messageType: message.type });

  return (
    <Box sx={styles.root}>
      <MessageContent message={message} />
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
