import { useState } from "react";
import type { ChatInterface, IMessage } from "../../Molecules";
import { MessageContainer, MessageInput, Messages } from "../../Molecules/Message/container";
import { MessageHeader, type HeaderFormData } from "../../Molecules/Message/MessageHeader";

function ItemViewer({ content }: { content: IMessage[] }) {
    const [activateTeamChat, setActivateTeamChat] = useState(false);
    const [contentData, setContentData] = useState<IMessage[]>(content);
    const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");
    const [headerFormData, setHeaderFormData] = useState<HeaderFormData>({
        to: "",
        cc: "",
        from: "",
        subject: "",
        tags: []
    });

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

    const handleHeaderFormChange = (field: keyof HeaderFormData, value: string | string[]) => {
        setHeaderFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const submitToAPI = async () => {
        const apiData = {
            headerForm: headerFormData,
            chatInterface: switchMode,
            teamChatEnabled: activateTeamChat,
            messages: contentData,
            timestamp: new Date().toISOString()
        };
        
        console.log('Submitting to API:', apiData);
        
        // Example API call:
        // try {
        //     const response = await fetch('/api/submit', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(apiData)
        //     });
        //     const result = await response.json();
        //     console.log('API Response:', result);
        // } catch (error) {
        //     console.error('API Error:', error);
        // }
    };


    return (
        <MessageContainer>
            <MessageHeader
                content={contentData}
                setEnableTeamChat={handleActivateTeamChat}
                headerFormData={headerFormData}
                onHeaderFormChange={handleHeaderFormChange}
                chatInterface={switchMode}
                enableTeamChat={activateTeamChat}
            />
            <Messages
                content={contentData}
                enableTeamChat={activateTeamChat}
            />
            <MessageInput
                enableTeamChat={false}
                chatInterface={switchMode}
                setChatInterface={setSwitchMode}
                onSubmit={submitToAPI}
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
