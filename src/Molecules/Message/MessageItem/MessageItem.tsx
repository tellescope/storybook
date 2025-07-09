import { Box } from "@mui/material";
import { MessageText } from "./components";
import { MessageOptions } from "../MessageOptions/MessageOptions";
import type { MessageType } from "../types";

interface MessageItemProps {
  messageType: MessageType;
}

export const MessageItem = ({ messageType }: MessageItemProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={messageType === "INCOMING" ? "row" : "row-reverse"}
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
      <MessageText messageType={messageType}>Healthy dumpling recipes!</MessageText>
      <Box 
        className="message-options"
        sx={{
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(10px)",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}
      >
        <MessageOptions messageType={messageType} />
      </Box>
    </Box>
  );
};
