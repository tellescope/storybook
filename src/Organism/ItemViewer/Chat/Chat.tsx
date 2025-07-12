import { Box, Divider, Stack, Typography } from "@mui/material";
import type { IMessage, Reaction } from "../../../Molecules/Message/types";
import { useState } from "react";
import { Header, ChatActions, EmptyHeader } from "./components";
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
  const [enableTeamChat, setEnableTeamChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>(sampleMessages);

  console.log(enableTeamChat);
  return (
    <Box
      width={800}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}
      borderRadius={2}
      display={"flex"}
      flexDirection={"column"}
      height={800}
    >
      {messages.length > 0 ? (
        <Header
          enableTeamChat={enableTeamChat}
          setEnableTeamChat={setEnableTeamChat}
        />
      ) : (
        <EmptyHeader />
      )}

      <Box
        my={2}
        overflow={"auto"}
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={messages.length === 0 ? "center" : "flex-start"}
        gap={messages.length > 0 ? 2 : 0}
      >
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <MessageItem
              avatar={message.avatar}
              key={index}
              message={message}
              reactions={reactions}
            />
          ))
        ) : (
          <Stack
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"#EFF0F2"} borderRadius={20} px={1.4} py={0.5}>
              <Typography
                variant="body2"
                fontWeight={600}
                color="text.secondary"
              >
                You must specify a subject to send a chat
              </Typography>
            </Box>
          </Stack>
        )}
      </Box>
      <Box p={2}>
        <MessageInput />
      </Box>
    </Box>
  );
};
