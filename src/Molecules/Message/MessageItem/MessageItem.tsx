import { Box } from "@mui/material";
import { MessageText } from "./components";
import { MessageOptions } from "../MessageOptions";
import type { IMessage } from "../types";

interface MessageItemProps {
  message: IMessage;
}

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={message.type === "INCOMING" ? "row" : "row-reverse"}
      px={4}
      py={1}
      alignItems={"center"}
      bgcolor={"transparent"}
      sx={{
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
          bgcolor: "#EFF0F24D",
          "& .message-options": {
            opacity: 1,
            visibility: "visible",
            transform: "translateX(0)"
          }
        }
      }}
    >
      <MessageText messageType={message.type}>{message.text}</MessageText>
      <Box 
        className="message-options"
        sx={{
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(10px)",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}
      >
        <MessageOptions messageType={message.type} />
      </Box>
    </Box>
  );
};
