import { Box, Typography, styled } from "@mui/material";
import type { MessageType } from "../../../types";
import {
  bubbleBackgroundColors,
  messageBubbleBorderBottomLeftRadius,
  messageBubbleBorderBottomRightRadius,
  messageContainerWidth,
  messageTextColors,
  reactionsContainerJustifyContent,
} from "./styles/maps";

export interface Reaction {
  icon: string;
  count: number;
}

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

const ReactionsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  display: "flex",
  justifyContent: reactionsContainerJustifyContent[messageType],
}));

const ReactionsWrapper = styled(Box)({
  marginTop: "3px",
  width: "fit-content",
  padding: "2px 8px",
  borderRadius: "100px",
  backgroundColor: "#EFF0F2",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const ReactionItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "3.2px",
});

interface ReactionsProps {
  reactions: Reaction[];
  messageType: MessageType;
}

const Reactions = ({ reactions, messageType }: ReactionsProps) => {
  if (reactions.length === 0) {
    return null;
  }

  return (
    <ReactionsContainer messageType={messageType}>
      <ReactionsWrapper>
        {reactions.map((reaction) => (
          <ReactionItem key={reaction.icon}>
            <Box>{reaction.icon}</Box>
            <Typography variant="caption" color="black">
              {reaction.count}
            </Typography>
          </ReactionItem>
        ))}
      </ReactionsWrapper>
    </ReactionsContainer>
  );
};

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
