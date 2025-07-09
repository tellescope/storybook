import { Box } from "@mui/material";
import { MessageItem } from "./MessageItem";
import { MessageInput } from "./MessageInput";
import type { IMessage } from "./types";

const incomingMessage: IMessage = {
  type: "INCOMING",
  text: "Healthy dumpling recipes!",
};

const outgoingMessage: IMessage = {
  type: "OUTGOING",
  text: "I'm looking for some healthy dumpling recipes, can you share some?",
};

export const Message = () => {
  return (
    <Box
      width={1200}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}
      borderRadius={2}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
    >
      <MessageItem message={incomingMessage} />
      <MessageItem message={outgoingMessage} />
      {/* <MessageItem messageType="team-chat" /> */}
      <Box p={3}>
        <MessageInput />
      </Box>
    </Box>
  );
};
