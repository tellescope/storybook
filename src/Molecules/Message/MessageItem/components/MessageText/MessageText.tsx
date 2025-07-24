import { Avatar, Stack } from "@mui/material";

import type { IMessage, MessageType } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import { Container, MessageBubble, MessageContainer, MessageContent } from "./styles/maps";
import { Image, Translated } from "../../../components";

interface TextProps {
  children: React.ReactNode;
  messageType: MessageType;
  message: IMessage;
}

export const MessageText = ({ children, messageType, message }: TextProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";

  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={message.avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <Image src={message.image?.url ?? ""} />
        <MessageBubble messageType={messageType}>
          <MessageContent variant="body1" messageType={messageType}>
            {children}
          </MessageContent>
        </MessageBubble>
        <Stack display={"flex"} flexDirection={"row"} gap={1.4} alignItems={"center"}>
          <Translated isTranslated={message.isTranslated ?? false} />
          <Reactions reactions={message.reactions} messageType={messageType} />
        </Stack>
      </MessageContainer>
    </Container>
  );
};
