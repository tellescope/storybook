import { Box } from "@mui/material";
import type { IMessage, Reaction } from "../../../Molecules/Message/types";
import { useState } from "react";
import { Header, ChatActions } from "./components";
import { MessageItem } from "../../../Molecules/Message/MessageItem";
import { MessageInput } from "../../../Molecules/Message/MessageInput";

const incomingMessage: IMessage = {
  type: "INCOMING",
  text: "Healthy dumpling recipes!",
};

// const outgoingMessage: IMessage = {
//   type: "OUTGOING",
//   text: "I'm looking for some healthy dumpling recipes, can you share some?",
// };

// const teamChatMessage: IMessage = {
//   type: "TEAM_CHAT",
//   text: "I'm looking for some healthy dumpling recipes, can you share some?",
// };

const reactions: Reaction[] = [
  {
    icon: "😭",
    count: 1,
  },
  {
    icon: "😭",
    count: 2,
  },

  {
    icon: "😭",
    count: 3,
  },
];

const sampleMessages: IMessage[] = [
  {
    type: "INCOMING",
    text: "Healthy dumpling recipes!",
  },
  {
    type: "OUTGOING",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
  },
  {
    type: "OUTGOING",
    text: "I'm looking for some healthy dumpling recipes, can you share some?",
  },
  {
    type: "INCOMING",
    text: "Healthy dumpling recipes!",
  },
  // {
  //   type: "TEAM_CHAT",
  //   text: "I'm looking for some healthy dumpling recipes, can you share some?",
  // },
];

export const Chat = () => {
  const [isTeamChatMode, setIsTeamChatMode] = useState<boolean>(false);

  return (
    <Box
      width={800}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}
      borderRadius={2}
      display={"flex"}
      flexDirection={"column"}
      height={800}
    >
      <Header />
      <ChatActions />
      <Box
        my={2}
        overflow={"auto"}
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        {sampleMessages.map((message, index) => (
          <MessageItem avatar={message.avatar} key={index} message={message} reactions={reactions} />
        ))}
      </Box>
      <Box p={2}>
        <MessageInput />
      </Box>
      {/* <MessageItem message={incomingMessage} />
      <MessageItem reactions={reactions} message={outgoingMessage} />
      <MessageItem reactions={reactions} message={teamChatMessage} />


      <Box p={3}>
        <MessageInput />
      </Box> */}
    </Box>
  );
};
