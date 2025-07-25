import { useState } from "react";
import type { ChatInterface, IMessage } from "../../Molecules";
import { MessageContainer } from "../../Molecules/Message/components/MessageContainer";
import { MessageHeader } from "../../Molecules/Message/MessageHeader/components/Header";
import { MessageInput } from "../../Molecules/Message/MessageInput/MessageInput";
import { Messages } from "../../Molecules/Message/Messages";

function ItemViewer({ content }: { content: IMessage[] }) {
    const [activateTeamChat, setActivateTeamChat] = useState(false);
    const [contentData, setContentData] = useState(content);
    const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");

    const handleActivateTeamChat = () => {
        setActivateTeamChat((prev) => !prev);
    };

    // Common props to reduce repetition
    const commonProps = {
        enableTeamChat: activateTeamChat,
        chatInterface: switchMode
    };

    return (
        <MessageContainer>
            <MessageHeader
                content={content}
                {...commonProps}
                setEnableTeamChat={handleActivateTeamChat}
            />
            <Messages
                content={contentData}
                enableTeamChat={activateTeamChat}
            />
            <MessageInput
                {...commonProps}
                setChatInterface={setSwitchMode}
            />
        </MessageContainer>
    );
}

export default ItemViewer;
