import { Box, Typography } from "@mui/material";
import type { MessageType } from "../../../types";

interface TextProps {
  children: React.ReactNode;
  messageType: MessageType;
  reactions?: {
    icon: string;
    count: number;
  }[];
}

const data = [
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

export const MessageText = ({
  children,
  messageType,
  reactions = data,
}: TextProps) => {
  return (
    <Box width={messageType === "INCOMING" ? "100%" : "fit-content"}>
      <Box
        px={2}
        maxWidth={"fit-content"}
        py={1.2}
        bgcolor={messageType === "INCOMING" ? "#EFF0F2" : "#1C7AE0"}
        sx={{
          borderBottomLeftRadius: messageType === "INCOMING" ? "8px" : "20px",
          borderBottomRightRadius: messageType === "INCOMING" ? "20px" : "8px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <Typography variant="body1" sx={{ color: messageType === "INCOMING" ? "#1D1B20" : "#FFFFFF", fontSize: "16px" }}>
          {children}
        </Typography>
      </Box>
      {reactions && reactions.length > 0 && (
        <Box
          display={"flex"}
          justifyContent={
            messageType === "INCOMING" ? "flex-start" : "flex-end"
          }
        >
          <Box
            mt="3px"
            width={"fit-content"}
            px={1}
            py={"2px"}
            borderRadius={"100px"}
            bgcolor={"#EFF0F2"}
            display={"flex"}
            alignItems={"center"}
            gap={0.4}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              {reactions.map((reaction) => (
                <Box
                  key={reaction.icon}
                  display={"flex"}
                  alignItems={"center"}
                  gap={0.4}
                >
                  <Box>{reaction.icon}</Box>
                  <Typography variant="caption" color={"black"}>
                    {reaction.count}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
