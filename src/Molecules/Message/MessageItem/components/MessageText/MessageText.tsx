import { Avatar, Box, Typography, styled } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import {
  bubbleBackgroundColors,
  messageBubbleBorderBottomLeftRadius,
  messageBubbleBorderBottomRightRadius,
  messageContainerWidth,
  messageTextColors,
} from "./styles/maps";
import { Reactions } from "../Reactions/Reactions";

interface TextProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
}

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  display: "flex",
  gap: "8px",
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: messageType === "INCOMING" ? "row" : "row-reverse",
  alignItems: "flex-start",
}));

const MessageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  width: messageContainerWidth[messageType],
  display: "flex",
  flexDirection: "column",
  alignItems: messageType === "INCOMING" ? "flex-start" : "flex-end",
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  padding: "10px 16px",
  maxWidth: "fit-content",
  backgroundColor: bubbleBackgroundColors[messageType],
  borderTopRightRadius: "20px",
  display: "flex",
  flexDirection: "row",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: messageBubbleBorderBottomLeftRadius[messageType],
  borderBottomRightRadius: messageBubbleBorderBottomRightRadius[messageType],
}));

const MessageContent = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  color: messageTextColors[messageType],
  fontSize: "16px",
}));

export const MessageText = ({
  children,
  messageType,
  reactions = [],
  avatar,
}: TextProps) => {
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
        <Reactions reactions={reactions} messageType={messageType} />
      </MessageContainer>
    </Container>
  );
};
