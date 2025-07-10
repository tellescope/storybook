export type MessageType = "INCOMING" | "OUTGOING" | "TEAM_CHAT";

export interface IMessage {
  type: MessageType;
  text: string;
}