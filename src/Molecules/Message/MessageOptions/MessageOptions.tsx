import { Box, IconButton, Typography } from "@mui/material";
import {
  MarkEmailUnreadOutlined,
  AddReactionOutlined,
} from "@mui/icons-material";
import { Nice } from "../Icons";
import type { MessageType } from "../types";

interface MessageOptionsProps {
  haveUnreadMessages?: boolean;
  messageType: MessageType;
}

const ButttonIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <IconButton
      sx={{
        padding: "8px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "#F9FAFB",
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export const MessageOptions = ({
  haveUnreadMessages,
  messageType,
}: MessageOptionsProps) => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={messageType === "INCOMING" ? "flex-end" : "flex-start"}
        justifyContent={"center"}
      >
        <Box
          mr={messageType === "INCOMING" ? 1 : 0}
          ml={messageType === "OUTGOING" ? 1 : 0}
          display={"flex"}
          alignItems={"center"}
          gap={1.4}
          flexDirection={messageType === "INCOMING" ? "row" : "row-reverse"}
          mb={1}
          justifyContent={"flex-end"}
        >
          <Typography color={"black"} variant="caption">
            9:00 AM
          </Typography>
          <Box
            bgcolor={haveUnreadMessages ? "#EFF0F2" : "transparent"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"24px"}
            height={"24px"}
            p={haveUnreadMessages ? 1 : 0}
            borderRadius={"100px"}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <MarkEmailUnreadOutlined sx={{ color: "#3C82F6" }} />
          </Box>
        </Box>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={"#EFF0F2"}
            borderRadius={"100px"}
            padding={"0"}
          >
            <ButttonIcon icon={<Nice />} />
            <ButttonIcon icon={<Nice />} />
            <ButttonIcon icon={<AddReactionOutlined />} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
