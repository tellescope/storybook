import { Avatar, Stack } from "@mui/material";

import type { IMessage, MessageType } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import { Container, MessageBubble, MessageContainer, MessageContent } from "./styles/maps";
import { Image, Translated, Scheduled } from "../../../components";


interface TextProps {
  messageType: MessageType;
  message: IMessage;
}

export const MessageText = ({ messageType, message }: TextProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";

  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={message.avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <MessageBubble haveImage={!!message.image} messageType={messageType}>
          <Image image={message.image || null} messageType={messageType} />
          <MessageContent variant="body1" messageType={messageType}>
            {message.text}
          </MessageContent>
        </MessageBubble>
        <Stack display={"flex"} flexDirection={"row"} gap={1.4} mt={0.5} alignItems={"center"}>
          <Translated isTranslated={message.isTranslated ?? false} />
          <Scheduled scheduledTime={message.scheduledTime ?? null} />
          <Reactions reactions={message.reactions} messageType={messageType} />
        </Stack>
      </MessageContainer>
    </Container>
  );
};
