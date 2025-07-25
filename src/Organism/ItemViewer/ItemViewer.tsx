import { useState } from "react";
import type { ChatInterface, IMessage } from "../../Molecules";
import { MessageContainer, MessageHeader, MessageInput, Messages } from "../../Molecules/Message/components";

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
