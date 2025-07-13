import { Box } from "@mui/material";
import { MessageImage, MessageText } from "./components";
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
      {message.image && (
        <MessageImage image={message.image} messageType={message.type} />
      )}

      {!message.image && (
        <MessageText
          messageType={message.type}
          reactions={reactions}
          avatar={avatar}
        >
          {message.text}
        </MessageText>
      )}
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
