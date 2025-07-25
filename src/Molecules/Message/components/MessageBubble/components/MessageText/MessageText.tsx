import { Avatar, Stack } from "@mui/material";
import { Container, MessageBubble, MessageContainer, MessageContent } from "./styles/maps";
import type { IMessage, MessageType } from "../../../../types";
import { MessageImage } from "../../../MessageImage";
import { MessageTranslated } from "../../../MessageTranslated";
import { MessageScheduled } from "../../../MessageScheduled";
import { MessageRole } from "../../../MessageRole";
import { Reactions } from "../../../Reactions/Reactions";

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
          <MessageImage image={message.image || null} messageType={messageType} />
          <MessageContent variant="body1" messageType={messageType}>
            {message.text}
          </MessageContent>
        </MessageBubble>
        <Stack display={"flex"} flexDirection={"row"} gap={1.4} mt={0.5} alignItems={"center"}>
          <MessageTranslated isTranslated={message.isTranslated ?? false} />
          <MessageScheduled scheduledTime={message.scheduledTime ?? null} />
          <MessageRole isTeamChatEnabled={message.type == "TEAM_CHAT"} role={message?.role} />
          <Reactions reactions={message.reactions} messageType={messageType} />
        </Stack>
      </MessageContainer>
    </Container>
  );
};
