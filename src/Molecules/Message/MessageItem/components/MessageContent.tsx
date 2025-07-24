import type {  IMessage, Reaction } from "../../types";
import { MessageImage } from "./MessageImage/MessageImage";
import { MessageLink } from "./MessageLink/MessageLink";
import { MessageText } from "./MessageText/MessageText";
import { MessageScheduled } from "./MessageScheduled/MessageScheduled";
import type { ChatInterface } from "../../../../Organism/ItemViewer/types";
import { MessageTranslate } from "./MessageTranslate/MessageTranslate";

interface MessageContentProps {
  message: IMessage;
  reactions?: Reaction[];
  avatar?: string;
  chatInterface?: ChatInterface;
  scheduledTime?: string;
  isTranslated?: boolean;
}

const getMessageComponent = (message: IMessage) => {
  if (message.image) {
    return { Component: MessageImage, props: { image: message.image } };
  }
  if (message.link) {
    return { Component: MessageLink, props: { link: message.link } };
  }
  if (message.isTranslated) {
    return { Component: MessageTranslate, props: { children: message.text, isTranslated: message.isTranslated } };
  } 
  if (message.scheduledTime) {
    return {
      Component: MessageScheduled,
      props: {
        scheduledTime: message.scheduledTime,
        children: message.text,
      },
    };
  }
  return { Component: MessageText, props: { children: message.text } };
};

export const MessageContent = ({
  message,
  reactions,
  avatar,
  chatInterface,
  scheduledTime,
  isTranslated,
}: MessageContentProps) => {
  const { Component, props } = getMessageComponent(message);
  const commonProps = {
    messageType: message.type,
    reactions,
    avatar,
    chatInterface,
    scheduledTime,
    isTranslated,
  };

  console.log(reactions)

  const TypedComponent = Component as any;
  return <TypedComponent {...commonProps} {...props} />;
}; 