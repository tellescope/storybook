import { Box, Stack, Typography } from "@mui/material";
import type { IMessage } from "../types";

import { MessageBubble } from "../MessageBubble/MessageBubble";
import { styles } from "./MessageHeader";
import { DateSeparator } from "../components/DateSeparator";

export interface ChatProps {
  content: IMessage[];
  enableTeamChat: boolean;
}
export const Messages = ({ content, enableTeamChat }: ChatProps) => {
  let lastDate: Date | null = null;

  return (
    <Box sx={styles.messagesContainer(content?.length, enableTeamChat)}>
      {content?.length > 0 ? (
        content.map((message, index) => {
          const showDateSeparator = message.createdAt && (!lastDate || lastDate.toDateString() !== message.createdAt.toDateString());
          lastDate = message.createdAt ? new Date(message.createdAt) : lastDate;

          return (
            <>
              {showDateSeparator && message.createdAt && <DateSeparator date={message.createdAt} />}
              <MessageBubble key={index} message={message} />
            </>
          );
        })
      ) : (
        <Stack sx={styles.emptyContainer}>
          <Box sx={styles.emptyMessageBox}>
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              You must specify a subject to send a chat
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};
