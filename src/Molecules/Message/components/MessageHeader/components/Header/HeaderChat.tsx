import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";

import {
  InfoOutlined,
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
  ChatBubbleOutline,
  PersonAddAlt,
  GroupAddOutlined,
  AddOutlined,
} from "@mui/icons-material";
import { Icon } from "../../../../../../Atoms";
import { Button } from "../../../../../../components/atoms/button/button";
import { useState } from "react";
import { TeamChatSwitch } from "../../..";

const transition = "all 0.3s ease-in-out";

export const HeaderChat = ({
  enableTeamChat,
  setEnableTeamChat,
}: {
  enableTeamChat: boolean;
  setEnableTeamChat: (value: boolean) => void;
}) => {

  const [checked, setChecked] = useState(enableTeamChat);

  const handleChange = (value: boolean) => {
    setChecked(value);
    setEnableTeamChat(value);
  };

  return (
    <Box>
      <Box
        display={"flex"}
        bgcolor={enableTeamChat ? "#F4F0FF" : "#E2E8F0"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
        sx={{
          transition,
        }}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Typography variant="h5">Patient Name</Typography>
          <InfoOutlined />

          <Typography variant="caption" color={"#1C7AE0"}>
            Show all threads
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <IconButton>
            <CallOutlined />
          </IconButton>
          <IconButton>
            <VideocamOutlined />
          </IconButton>
          <IconButton>
            <CloseOutlined />
          </IconButton>
        </Box>
      </Box>
      <Box
        p={2}
        sx={{
          transition,
        }}
        bgcolor={enableTeamChat ? "#F4F0FF" : ""}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            alignItems={"center"}
          >
            <Icon
              icon={ChatBubbleOutline}
              size="medium"
              sx={{ color: "#1C7AE0" }}
            />
            <Typography variant="h6">
              +123 456 7890
            </Typography>
            <Button
              appearence="outlined"
              size="small"
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                borderColor: "#CAC4D0",
                color: "#CAC4D0",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#CAC4D0",
                },
              }}
              endIcon={<PersonAddAlt />}
            >
              Assign
            </Button>
          </Stack>

          <TeamChatSwitch
            checked={checked}
            setChecked={handleChange}
          />

        </Box>
        {!enableTeamChat && (
          <Box mt={1} ml={1}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={1}
              alignItems={"center"}
            >
              <Icon icon={GroupAddOutlined} size="medium" />
              <Button
                appearence="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                }}
                startIcon={<AddOutlined />}
              >
                Tag
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};
