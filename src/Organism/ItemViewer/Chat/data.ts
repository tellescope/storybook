import type { IMessage, Reaction } from "../../../Molecules/Message/types";

export const reactions: Reaction[] = [
  {
    icon: "😭",
    count: 1,
  },
  {
    icon: "😭",
    count: 2,
  },

  {
    icon: "😭",
    count: 3,
  },
];

export const sampleMessages: IMessage[] = [
  {
    type: "INCOMING",
    text: "Healthy dumpling recipes!",
    createdAt: new Date(),
  },
  {
    type: "OUTGOING",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    type: "TEAM_CHAT",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    type: "INCOMING",
    text: "Healthy dumpling recipes!",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
]; 