import { Avatar } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import {
  Container,
  MessageBubble,
  MessageContainer,
  MessageContent,
} from "./MessageText.styles";

interface TextProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
}

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
