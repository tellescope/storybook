import { Avatar, Box, Stack, Typography } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import {
  Container,
  MessageBubble,
  MessageContainer,
  MessageContent,
} from "./styles/maps";

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
            gap={1.4}
            mt={0.5}
            px={1}
            borderRadius={10}
            bgcolor={"#1C7AE01A"}
          >
            <Typography fontWeight={600} variant="caption">
              {scheduledTime}
            </Typography>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => console.log("cancel")}
            >
              <Typography fontWeight={600} color={"#1C7AE0"} variant="caption">
                Cancel
              </Typography>
            </Box>
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
