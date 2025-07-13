
import { HeaderChat } from "../Header";
import { EmptyHeaderChat } from "../EmptyHeader/EmptyHeaderChat";

export const HeaderType = {
  CHAT: {
    name: "CHAT",
    Component: HeaderChat,
  },
  SMS: {
    name: "SMS",
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
    Component: null,
  },
};