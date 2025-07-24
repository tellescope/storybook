import { Box } from "@mui/material";
import { MessageContent } from "./components";
import { MessageOptions } from "../MessageOptions";
import type { IMessage } from "../types";
import { useMessageItemStyles } from "./styles/maps";

interface MessageItemProps {
  message: IMessage;
}

export const MessageItem = ({ message }: MessageItemProps) => {
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
