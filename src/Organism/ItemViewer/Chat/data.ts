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
  },
  {
    type: "OUTGOING",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
  },
  {
    type: "OUTGOING",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
  },
  {
    type: "INCOMING",
    text: "Healthy dumpling recipes!",
  },
]; 