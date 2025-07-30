import type { IMessage } from "../Molecules";

export const mockMessages: IMessage[] = [
  {
    type: "INCOMING",
    text: "Welcome! Send a message to see sample messages with different features.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    createdAt: new Date(Date.now() - 60000), // 1 minute ago
    isTranslated: false,
  },
  {
    type: "OUTGOING",
    text: "Hello! I'm ready to test the message features.",
    avatar: "https://avatar.iran.liara.run/public",
    createdAt: new Date(Date.now() - 30000), // 30 seconds ago
    role: "User",
  },
];
