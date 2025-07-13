import { Box, Stack, Typography } from "@mui/material";
import type { IMessage, Reaction } from "../../../Molecules/Message/types";
import { DateSeparator } from "../shared/components";
import { MessageItem } from "../../../Molecules/Message/MessageItem";
import { MessageInput, Toolbar } from "../../../Molecules/Message/MessageInput";

import { Icon } from "../../../Atoms";
import { AddCircleOutline, EmojiEmotionsOutlined } from "@mui/icons-material";
import { IconButton } from "../../../components/atoms/button/icon-button";
import { styles } from "../shared/styles/maps";
import type { ChatInterface } from "../types";
import { Header } from "../shared/components/Header";

export interface EmailProps {
  content: IMessage[];
  reactions?: Reaction[];
  enableTeamChat?: boolean;
  setEnableTeamChat?: (value: boolean) => void;
  chatInterface: ChatInterface;
}

export const Email = ({
  content,
  reactions,
  enableTeamChat = false,
  setEnableTeamChat = () => {},
  chatInterface,
}: EmailProps) => {
  let lastDate: Date | null = null;

  return (
    <Box sx={styles.container}>
      <Header
        content={content}
        chatInterface={chatInterface}
        enableTeamChat={enableTeamChat}
        setEnableTeamChat={setEnableTeamChat}
      />
      <Box sx={styles.messagesContainer(enableTeamChat, content.length)}>
        {content.length > 0 ? (
          content.map((message, index) => {
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
                  scheduledTime={message.scheduledTime}
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
                You must specify participants and a subject to send an email
              </Typography>
            </Box>
          </Stack>
        )}
      </Box>
      <Box sx={styles.inputContainer(enableTeamChat)}>
        {enableTeamChat && (
          <Box sx={{ display: "flex" }}>
            <IconButton color="secondary">
              <Icon icon={AddCircleOutline} size="medium" />
            </IconButton>
            <IconButton color="secondary">
              <Icon icon={EmojiEmotionsOutlined} size="medium" />
            </IconButton>
          </Box>
        )}
        <Stack display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
          {!enableTeamChat && <Toolbar chatInterface={chatInterface} />}
          <MessageInput />
        </Stack>
      </Box>
    </Box>
  );
};
