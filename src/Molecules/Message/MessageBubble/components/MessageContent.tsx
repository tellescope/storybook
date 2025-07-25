
import type { IMessage } from "../../../types";
import { MessageText } from "./MessageText/MessageText";

interface MessageContentProps {
  message: IMessage;
}

const getMessageComponent = (message: IMessage) => {
  return { Component: MessageText, props: message };
};

export const MessageContent = ({
  message,
}: MessageContentProps) => {
  const { Component, props } = getMessageComponent(message);

  const commonProps = {
    messageType: message.type,
    message
  };

  const TypedComponent = Component as any;
  return <TypedComponent {...commonProps} {...props} />;
}; 