import { Box } from "@mui/material";
import { MessageContent } from "./components";
import { MessageOptions } from "../MessageOptions";
import type { IMessage, Reaction } from "../types";
import { useMessageItemStyles } from "./styles/maps";
import type { ChatInterface } from "../../../Organism/ItemViewer/types";

interface MessageItemProps {
  message: IMessage;
  reactions?: Reaction[];
  avatar?: string;
  scheduledTime?: string;
  chatInterface?: ChatInterface;
}

export const MessageItem = ({
  message,
  reactions,
  avatar,
  scheduledTime,
  chatInterface,
}: MessageItemProps) => {
  const styles = useMessageItemStyles({ messageType: message.type });
  return (
    <Box sx={styles.root}>
      <MessageContent
        message={message}
        reactions={reactions}
        avatar={avatar}
        scheduledTime={scheduledTime}        
        chatInterface={chatInterface}
      />
      <Box className="message-options" sx={styles.messageOptions}>
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
