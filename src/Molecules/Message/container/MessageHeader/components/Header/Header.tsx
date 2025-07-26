
import type { ChatInterface, IMessage } from "../../../../types";
import { HeaderType, EmptyHeaderType } from "../enums";

interface HeaderProps {
  content: IMessage[];
  chatInterface: ChatInterface;
  enableTeamChat: boolean;
  setEnableTeamChat: (value: boolean) => void;
}

export const MessageHeader = ({
  content,
  chatInterface,
  enableTeamChat,
  setEnableTeamChat,
}: HeaderProps) => {
  if (content?.length > 0) {
    const HeaderComponent = HeaderType[chatInterface].Component;
    return (
      <HeaderComponent
        enableTeamChat={enableTeamChat}
        setEnableTeamChat={setEnableTeamChat}
      />
    );
  }

  const EmptyHeaderComponent = EmptyHeaderType[chatInterface].Component;
  return EmptyHeaderComponent ? <EmptyHeaderComponent /> : null;
}; 