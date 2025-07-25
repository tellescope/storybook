import type { IMessage } from "../../../../../Molecules/Message/types";
import { EmptyHeaderType, HeaderType } from "../enums";
import type { ChatInterface } from "../../../types";

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