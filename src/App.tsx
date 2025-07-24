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
          isTranslated: true,
          createdAt: new Date(),
          image: {
            url: "https://picsum.photos/200/100",
            fileName: "image.jpg",
          },
          reactions: [{
            icon: "😎",
            count: 1,
          }],
        }, {
          text: "Hello",
          createdAt: new Date(),
          type: "OUTGOING",
          scheduledTime: new Date(),
          avatar: "https://picsum.photos/200/100",
          reactions: [{
            icon: "😎",
            count: 1,
          }, {
            icon: "🙈",
            count: 1,
          }],
        },
        {
          text: "This is team chat sample bubble chat",
          createdAt: new Date(),
          type: "TEAM_CHAT",
          reactions: [{
            icon: "😎",
            count: 1,
          }, {
            icon: "🙈",
            count: 1,
          }],
        }]}
      />
    </>
  )
}

export default App
