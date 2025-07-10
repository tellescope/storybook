import { Box, Typography, styled } from "@mui/material";
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
}

const MessageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  width: messageContainerWidth[messageType],
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  padding: "10px 16px",
  maxWidth: "fit-content",
  backgroundColor: bubbleBackgroundColors[messageType],
  borderTopRightRadius: "20px",
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
}: TextProps) => {
  return (
    <MessageContainer messageType={messageType}>
      <MessageBubble messageType={messageType}>
        <MessageContent variant="body1" messageType={messageType}>
          {children}
        </MessageContent>
      </MessageBubble>
      <Reactions reactions={reactions} messageType={messageType} />
    </MessageContainer>
  );
};
