export type MessageType = "INCOMING" | "OUTGOING" | "TEAM_CHAT";

export interface IMessage {
  type: MessageType;
  text: string;
  avatar?: string;
  createdAt?: Date;
  image?: {
    url: string;
    fileName: string;
  };
  link?: string;
  reactions?: Reaction[];
  scheduledTime?: string;
  isTranslated?: boolean;
}


export interface Reaction {
  icon: string;
  count: number;
}