import { useState } from "react";
import type { ChatInterface, IMessage, MessageConfig, MessageCallbacks } from "../../Molecules";
import { Message } from "../../Molecules/Message/Message";

function ItemViewer({ content }: { content: IMessage[] }) {
    const [activateTeamChat, setActivateTeamChat] = useState(false);
    const [contentData, setContentData] = useState<IMessage[]>(content);
    const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");
    const [headerFormData, setHeaderFormData] = useState({
        to: "",
        cc: "",
        from: "",
        subject: "",
        tags: []
    });

    const handleActivateTeamChat = (enabled: boolean) => {
        setActivateTeamChat(enabled);
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

    const handleHeaderFormChange = (field: string, value: string | string[]) => {
        setHeaderFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const submitToAPI = async (content: string) => {
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

    // Configuration for the unified Message component
    const config: MessageConfig = {
        enableTeamChat: activateTeamChat,
        chatInterface: switchMode,
        input: {
            placeholder: "Ask me anything...",
            maxLength: 500,
            autoFocus: true,
            disabled: false
        },
        header: {
            showForm: true,
            formData: headerFormData
        }
    };

    // Callbacks for the unified Message component
    const callbacks: MessageCallbacks = {
        onMessageSubmit: submitToAPI,
        onInputChange: handleInputChange,
        onChatInterfaceChange: setSwitchMode,
        onTeamChatToggle: handleActivateTeamChat,
        onHeaderFormChange: handleHeaderFormChange,
        onMessageReaction: (messageId: string, reaction: any) => {
            console.log('Message reaction:', messageId, reaction);
        },
        onMessageOptions: (messageId: string, action: string) => {
            console.log('Message options:', messageId, action);
        }
    };

    return (
        <Message
            messages={contentData}
            config={config}
            callbacks={callbacks}
        />
    );
}

export default ItemViewer;
