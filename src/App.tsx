import { useState } from "react";
import type { ChatInterface } from "./Organism/ItemViewer/types";
import { mockMessages } from "./data/mock";
import { MessageHeader } from "./Organism/ItemViewer/shared";
import { MessageInput } from "./Molecules/Message/components/ChatInput";
import { Messages } from "./Molecules/Message/Messages";

function App() {
  const [activateTeamChat, setActivateTeamChat] = useState(false);
  const [content, setContent] = useState(mockMessages);
  const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");

  const handleActivateTeamChat = () => {
    setActivateTeamChat((prev) => !prev);
  };

  const handleDeleteChatSample = () => {
    setContent([]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "800px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)", borderRadius: 2, display: "flex", flexDirection: "column", height: 700 }}>
        <MessageHeader content={content} chatInterface={switchMode} enableTeamChat={activateTeamChat} setEnableTeamChat={handleActivateTeamChat} />
        <Messages content={content} enableTeamChat={activateTeamChat} />
        <MessageInput enableTeamChat={activateTeamChat} chatInterface={switchMode} setChatInterface={setSwitchMode} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <button onClick={handleDeleteChatSample}>Delete chat sample</button>
      </div>
    </div>
  );
}

export default App;
