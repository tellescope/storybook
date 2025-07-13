import type { IMessage, Reaction } from "../../types";
import { MessageImage } from "./MessageImage/MessageImage";
import { MessageLink } from "./MessageLink/MessageLink";
import { MessageText } from "./MessageText/MessageText";

interface MessageContentProps {
  message: IMessage;
  reactions?: Reaction[];
  avatar?: string;
}

export const MessageContent = ({
  message,
  reactions,
  avatar,
}: MessageContentProps) => {
  if (message.image) {
    return (
      <MessageImage
        image={message.image}
        messageType={message.type}
        reactions={reactions}
        avatar={avatar}
      />
    );
  }

  if (message.link) {
    return (
      <MessageLink
        link={message.link}
        messageType={message.type}
        reactions={reactions}
        avatar={avatar}
      />
    );
  }

  return (
    <MessageText
      messageType={message.type}
      reactions={reactions}
      avatar={avatar}
    >
      {message.text}
    </MessageText>
  );
}; 