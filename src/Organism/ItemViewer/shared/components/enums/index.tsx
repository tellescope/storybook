import { HeaderChat, HeaderEmail, HeaderMMS, HeaderSMS } from "../Header";
import { EmptyHeaderChat, EmptyHeaderEmail, EmptyHeaderSMS } from "../EmptyHeader";
import type { ChatInterface } from "../../../types";
import type { ComponentType } from "react";

type HeaderComponentProps = {
  enableTeamChat: boolean;
  setEnableTeamChat: (value: boolean) => void;
};

type HeaderTypeObject = {
  name: string;
  Component: ComponentType<HeaderComponentProps>;
};

type EmptyHeaderTypeObject = {
  name: string;
  Component: ComponentType | null;
};

export const HeaderType: Record<ChatInterface, HeaderTypeObject> = {
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
    Component: HeaderEmail,
  },
  MMS: {
    name: "MMS",
      Component: HeaderMMS,
  },
};

export const EmptyHeaderType: Record<ChatInterface, EmptyHeaderTypeObject> = {
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
    Component: EmptyHeaderEmail,
  },
  MMS: {
    name: "MMS",
    Component: null,
  },
};
