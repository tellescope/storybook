import type { IMessage } from "../Molecules";

export const mockMessages: IMessage[] = [
  {
    type: "OUTGOING",
    text: "Hello world!",
    avatar: "https://example.com/avatar.jpg",
    isTranslated: true,
    scheduledTime: null,
    reactions: [
      {
        icon: "😎",
        count: 1,
      },
      {
        icon: "🙈",
        count: 1,
      },
    ],
  },
  {
    type: "INCOMING",
    text: "Hello world!",
    avatar: "https://example.com/avatar.jpg",
    isTranslated: false,
    scheduledTime: null,
  },
  {
    type: "INCOMING",
    text: "Hello world!",
    avatar: "https://example.com/avatar.jpg",
    isTranslated: true,
    scheduledTime: null,
  },
    {
    type: "INCOMING",
    text: "Hello world!",
    avatar: "https://example.com/avatar.jpg",
    isTranslated: false,
    reactions: [
      {
        icon: "😎",
        count: 1,
      },
      {
        icon: "🙈",
        count: 1,
      },
    ],
    scheduledTime: null,
     image: {
        fileName: "image.jpg",
        url: "https://picsum.photos/200/300",
    },
  },
  {
    type: "OUTGOING",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://avatar.iran.liara.run/public",
    isTranslated: false,
    scheduledTime: new Date(),
  },
    {
    type: "TEAM_CHAT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "",
    role: "Nutritionist",
    isTranslated: false,
    scheduledTime: null,
    reactions: [
      {
        icon: "😎",
        count: 1,
      },
      {
        icon: "🙈",
        count: 1,
      },
    ],
  },
];
