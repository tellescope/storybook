import { HeaderChat, HeaderSMS } from "../Header";
import { EmptyHeaderChat, EmptyHeaderSMS } from "../EmptyHeader";

export const HeaderType = {
  CHAT: {
    name: "CHAT",
    Component: HeaderChat,
  },
  SMS: {
    name: "SMS",
    Component: HeaderSMS,
  },
  EMAIL: {
    name: "EMAIL",
    Component: HeaderChat,
  },
  GROUP: {
    name: "GROUP",
    Component: HeaderChat,
  },
};

export const EmptyHeaderType = {
  CHAT: {
    name: "CHAT",
    Component: EmptyHeaderChat,
  },
  SMS: {
    name: "SMS",
    Component: EmptyHeaderSMS,
  },
  EMAIL: {
    name: "EMAIL",
    Component: null,
  },
  GROUP: {
    name: "GROUP",
    Component: null,
  },
};
