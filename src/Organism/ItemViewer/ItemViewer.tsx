import { useState } from "react";
import type { ChatInterface, IMessage } from "../../Molecules";
import { MessageContainer, MessageHeader, MessageInput, Messages } from "../../Molecules/Message/container";

function ItemViewer({ content }: { content: IMessage[] }) {
    const [activateTeamChat, setActivateTeamChat] = useState(false);
    const [contentData, setContentData] = useState<IMessage[]>([]);
    const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");

    const handleActivateTeamChat = () => {
        setActivateTeamChat((prev) => !prev);
    };

    const handleSubmit = (content: string) => {
        console.log(content);
        // setContentData([...contentData, {
        //     type: "INCOMING",
        //     text: content,
        //     createdAt: new Date(),
        // }]);
    };

    const handleInputChange = (value: string) => {
        console.log(value);
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
                enableTeamChat={false}
                chatInterface={switchMode}
                setChatInterface={setSwitchMode}
                onSubmit={handleSubmit}
                onInputChange={handleInputChange}
                config={{
                    placeholder: "Ask me anything...",
                    maxLength: 500,
                    autoFocus: true,
                    disabled: false
                }}
            />
        </MessageContainer>
    );
}

export default ItemViewer;
