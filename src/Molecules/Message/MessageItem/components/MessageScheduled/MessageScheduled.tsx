import { Avatar, Box, Stack, Typography } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import { Icon } from "../../../../../Atoms/Icon/Icon";
import {
  Container,
  MessageBubble,
  MessageContainer,
  MessageContent,
} from "../MessageText/styles/maps";

interface ScheduledProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
  scheduledTime?: string;
}

export const MessageScheduled = ({
  children,
  messageType,
  reactions = [],
  avatar,
  scheduledTime,
}: ScheduledProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";
  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <MessageBubble messageType={messageType}>
          <MessageContent variant="body1" messageType={messageType}>
            {children}
          </MessageContent>
        </MessageBubble>
        {scheduledTime && (
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={0.5}
            mt={0.5}
          >
            <Icon icon={AccessTime} size="small" />
            <Typography variant="caption">{scheduledTime}</Typography>
          </Stack>
        )}
        {messageType == "TEAM_CHAT" && (
          <Stack
            display={"flex"}
            mt={0.5}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Typography variant="caption" color="#8B5CF2">
              Nutritionist
            </Typography>
            <Box px={1} py={0.5} bgcolor="#F4F0FF" borderRadius={10}>
              <Typography variant="caption" color="#8B5CF2">
                Team
              </Typography>
            </Box>
          </Stack>
        )}
        <Reactions reactions={reactions} messageType={messageType} />
      </MessageContainer>
    </Container>
  );
};
