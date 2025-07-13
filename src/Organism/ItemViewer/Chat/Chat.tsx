import { Box, Stack, Typography } from "@mui/material";
import type { IMessage, Reaction } from "../../../Molecules/Message/types";
import { Header, EmptyHeader, DateSeparator } from "./components";
import { MessageItem } from "../../../Molecules/Message/MessageItem";
import { MessageInput } from "../../../Molecules/Message/MessageInput";
import { styles } from "./Chat.styles";
export interface ChatProps {
  messages: IMessage[];
  reactions?: Reaction[];
  enableTeamChat?: boolean;
  setEnableTeamChat?: (value: boolean) => void;
}

export const Chat = ({
  messages,
  reactions,
  enableTeamChat = false,
  setEnableTeamChat = () => {},
}: ChatProps) => {
  let lastDate: Date | null = null;

  return (
    <Box sx={styles.container}>
      {messages.length > 0 ? (
        <Header
          enableTeamChat={enableTeamChat}
          setEnableTeamChat={setEnableTeamChat}
        />
      ) : (
        <EmptyHeader />
      )}

      <Box
        sx={styles.messagesContainer(enableTeamChat, messages.length)}
      >
        {messages.length > 0 ? (
          messages.map((message, index) => {
            const showDateSeparator =
              message.createdAt &&
              (!lastDate ||
                lastDate.toDateString() !== message.createdAt.toDateString());
            lastDate = message.createdAt
              ? new Date(message.createdAt)
              : lastDate;

            return (
              <>
                {showDateSeparator && message.createdAt && (
                  <DateSeparator date={message.createdAt} />
                )}
                <MessageItem
                  avatar={message.avatar}
                  key={index}
                  message={message}
                  reactions={reactions}
                />
              </>
            );
          })
        ) : (
          <Stack sx={styles.emptyContainer}>
            <Box sx={styles.emptyMessageBox}>
              <Typography
                variant="body2"
                fontWeight={600}
                color="text.secondary"
              >
                You must specify a subject to send a chat
              </Typography>
            </Box>
          </Stack>
        )}
      </Box>
      <Box sx={styles.inputContainer(enableTeamChat)}>
        <MessageInput hideToolbar={enableTeamChat} />
      </Box>
    </Box>
  );
};
