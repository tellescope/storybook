import type { MessageType } from "../../../../types";

export const messageContainerWidth: Record<MessageType, string> = {
  INCOMING: "100%",
  OUTGOING: "fit-content",
  TEAM_CHAT: "fit-content",
};

export const messageBubbleBorderBottomLeftRadius: Record<MessageType, string> = {
  INCOMING: "8px",
  OUTGOING: "20px",
  TEAM_CHAT: "20px",
};

export const messageBubbleBorderBottomRightRadius: Record<MessageType, string> = {
  INCOMING: "20px",
  OUTGOING: "8px",
  TEAM_CHAT: "8px",
};

export const bubbleBackgroundColors: Record<MessageType, string> = {
  INCOMING: "#EFF0F2",
  OUTGOING: "#1C7AE0",
  TEAM_CHAT: "#8B5CF2",
};

export const messageTextColors: Record<MessageType, string> = {
  INCOMING: "#1D1B20",
  OUTGOING: "#FFFFFF",
  TEAM_CHAT: "#FFFFFF",
};

export const reactionsContainerJustifyContent: Record<MessageType, string> = {
  INCOMING: "flex-start",
  OUTGOING: "flex-end",
  TEAM_CHAT: "flex-end",
}; 