export type MessageType = "INCOMING" | "OUTGOING" | "TEAM_CHAT";

export interface IMessage {
  type: MessageType;
  text: string;
  avatar?: string;
  createdAt?: Date;
}


export interface Reaction {
  icon: string;
  count: number;
}