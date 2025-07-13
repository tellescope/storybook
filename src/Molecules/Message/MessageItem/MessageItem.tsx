import { Box } from "@mui/material";
import { MessageContent } from "./components";
import { MessageOptions } from "../MessageOptions";
import type { IMessage, Reaction } from "../types";
import { useMessageItemStyles } from "./styles/maps";

interface MessageItemProps {
  message: IMessage;
  reactions?: Reaction[];
  avatar?: string;
}

export const MessageItem = ({
  message,
  reactions,
  avatar,
}: MessageItemProps) => {
  const styles = useMessageItemStyles({ messageType: message.type });
  return (
    <Box sx={styles.root}>
      <MessageContent message={message} reactions={reactions} avatar={avatar} />
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
