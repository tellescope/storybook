import { Avatar, Box, Stack, Typography } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import {
  Container,
  MessageBubble,
  MessageContainer,
  messageTextColors,
} from "./styles/maps";
import type { ChatInterface } from "../../../../../Organism/ItemViewer/types";

interface LinkProps {
  link: string;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
  chatInterface?: ChatInterface;
}

export const MessageLink = ({
  link,
  messageType,
  reactions = [],
  avatar,
  chatInterface,
}: LinkProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";
  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <MessageBubble messageType={messageType}>
          <Stack display={"flex"} flexDirection={"column"} gap={1}>
            <img
              src={"https://placehold.co/60x60"}
              style={{
                borderRadius: "10px",
              }}
              alt="message-image"
            />
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="caption"
                sx={{ color: messageTextColors[messageType] }}
              >
                {link}
              </Typography>
            </Stack>
          </Stack>
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
