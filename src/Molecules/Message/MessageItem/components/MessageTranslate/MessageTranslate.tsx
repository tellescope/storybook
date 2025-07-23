import { Avatar, Box, Stack, Typography } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import TranslateIcon from '@mui/icons-material/Translate';
import {
  Container,
  MessageBubble,
  MessageContainer,
  MessageContent,
} from "./styles/maps";

interface TranslateProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
  isTranslated?: boolean;
}

export const MessageTranslate = ({
  children,
  messageType,
  reactions = [],
  avatar,
  isTranslated,
}: TranslateProps) => {
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
        <Stack display={"flex"} gap={1} flexDirection={"row"} mt={0.5}>
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={0.5}
            px={1.5}
            py={0.5}
            borderRadius={10}
            bgcolor={"#1C7AE01A"}
          >
            <TranslateIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              Translated from Spanish
            </Typography>
          </Stack>

          {messageType == "TEAM_CHAT" && (
            <Stack
              display={"flex"}
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
        </Stack>
      </MessageContainer>
    </Container>
  );
};
