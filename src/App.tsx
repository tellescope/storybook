import { useState } from "react";
import { Chat } from "./Organism/ItemViewer/Chat/Chat"
import type { ChatInterface } from "./Organism/ItemViewer/types";

function App() {

  const [activateTeamChat, setActivateTeamChat] = useState(false);
  const [switchMode, setSwitchMode] = useState<ChatInterface>("CHAT");

  const handleActivateTeamChat = () => {
    setActivateTeamChat(prev => !prev);
  }

  return (
    <>
      <Chat
        enableTeamChat={activateTeamChat}
        setEnableTeamChat={handleActivateTeamChat}
        chatInterface={switchMode}
        setChatInterface={setSwitchMode}
        content={[{
          text: "Hello",
          type: "INCOMING",
          createdAt: new Date(),
          reactions: [{
            icon: "like",
            count: 1,
          }],
        }, {
          text: "Hello",
          createdAt: new Date(),
          type: "OUTGOING",
        }]}
      />
    </>
  )
}

export default App
