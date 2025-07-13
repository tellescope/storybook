import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { Reactions } from "../Reactions/Reactions";
import { Container, MessageBubble, MessageContainer } from "./styles/maps";
import { Download } from "@mui/icons-material";
import { Icon } from "../../../../../Atoms";

interface ImageProps {
  image: {
    url: string;
    fileName: string;
  };
  messageType: MessageType;
  reactions?: Reaction[];
  avatar?: string;
}

export const MessageImage = ({
  image,
  messageType,
  reactions = [],
  avatar,
}: ImageProps) => {
  const showAvatar = messageType === "OUTGOING" || messageType === "TEAM_CHAT";
  return (
    <Container messageType={messageType}>
      {showAvatar && <Avatar src={avatar} sx={{ width: 32, height: 32 }} />}
      <MessageContainer messageType={messageType}>
        <MessageBubble messageType={messageType}>
          <Stack display={"flex"} flexDirection={"column"} gap={1}>
            <img
              src={image.url}
              style={{
                borderRadius: "10px",
              }}
              alt="message-image"
            />
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="caption" color="white">
                {image.fileName}awdawz
              </Typography>
              <Icon icon={Download} sx={{ color: "white" }} />
            </Stack>
          </Stack>
        </MessageBubble>
        {messageType == "TEAM_CHAT" && (
          <Stack
            display={"flex"}
            mt={0.5}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Typography variant="caption" color="#8B5CF2">
              Nutritionist
            </Typography>
            <Box px={1} py={0.5} bgcolor="#F4F0FF" borderRadius={10}>
              <Typography variant="caption" color="#8B5CF2">
                Team
              </Typography>
            </Box>
          </Stack>
        )}
        <Reactions reactions={reactions} messageType={messageType} />
      </MessageContainer>
    </Container>
  );
};
