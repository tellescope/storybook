import { useState } from "react";
import type { ChatInterface } from "./components/Toolbar/Toolbar";
import { MessageContainer, MessageInput, Messages } from "./components";
import type { IMessage } from "./types";
import { MessageHeader } from "./MessageHeader";

function Message({ content }: { content: IMessage[] }) {
    const [activateTeamChat, setActivateTeamChat] = useState(false);
    const [contentData, setContentData] = useState(content);
    const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");

    const handleActivateTeamChat = () => {
        setActivateTeamChat((prev) => !prev);
    };

    return (
        <MessageContainer>
            <MessageHeader content={content} chatInterface={switchMode} enableTeamChat={activateTeamChat} setEnableTeamChat={handleActivateTeamChat} />
            <Messages content={contentData} enableTeamChat={activateTeamChat} />
            <MessageInput enableTeamChat={activateTeamChat} chatInterface={switchMode} setChatInterface={setSwitchMode} />
        </MessageContainer>
    );
}

export default Message;
