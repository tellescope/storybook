import { Avatar, Box, Stack, Typography } from "@mui/material";

import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import {
  Container,
  MessageBubble,
  MessageContainer,
  MessageContent,
} from "./styles/maps";
import type { ChatInterface } from "../../../../../Organism/ItemViewer/types";

interface TextProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
  chatInterface?: ChatInterface;
}

export const MessageText = ({
  children,
  messageType,
  reactions = [],
  avatar,
  chatInterface,
}: TextProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";
  console.log(reactions)
  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <MessageBubble messageType={messageType}>
          <MessageContent variant="body1" messageType={messageType}>
            {children}
          </MessageContent>
        </MessageBubble>
        {messageType === "INCOMING" && chatInterface === "MMS" && (
          <Box>
            <Typography fontWeight={600} variant="caption">
              +1 202 555-0123
            </Typography>
          </Box>
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
