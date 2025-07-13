import { styled, Box, Typography } from "@mui/material";
import type { MessageType } from "../../../types";
import {
  bubbleBackgroundColors,
  messageBubbleBorderBottomLeftRadius,
  messageBubbleBorderBottomRightRadius,
  messageContainerWidth,
  messageTextColors,
} from "./styles/maps";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  display: "flex",
  gap: "8px",
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: messageType === "INCOMING" ? "row" : "row-reverse",
  alignItems: "flex-start",
}));

export const MessageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  width: messageContainerWidth[messageType],
  display: "flex",
  flexDirection: "column",
  alignItems: messageType === "INCOMING" ? "flex-start" : "flex-end",
}));

export const MessageBubble = styled(Box, {
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

export const MessageContent = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  color: messageTextColors[messageType],
  fontSize: "16px",
})); 