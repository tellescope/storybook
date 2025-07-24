export type MessageType = "INCOMING" | "OUTGOING" | "TEAM_CHAT";

export interface IMessage {
  type: MessageType;
  text: string;
  avatar?: string;
  createdAt?: Date;
  role?: string;
  image?: {
    url: string;
    fileName: string;
  };
  link?: string;
  reactions?: Reaction[];
  scheduledTime?: Date | null;
  isTranslated?: boolean;
}


export interface Reaction {
  icon: string;
  count: number;
}