import { Box } from "@mui/material";
import { MessageItem } from "./MessageItem/MessageItem";
import { MessageInput } from "./MessageInput/MessageInput";

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
      <MessageItem messageType="INCOMING" />
      <MessageItem messageType="OUTGOING" />
      {/* <MessageItem messageType="team-chat" /> */}
      <Box p={3}>
        <MessageInput />
      </Box>
    </Box>
  );
};
