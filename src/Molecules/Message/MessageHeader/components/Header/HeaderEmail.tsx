import { Box, IconButton, Stack, Typography } from "@mui/material";

import {
  InfoOutlined,
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
  PersonAddAlt,
  GroupAddOutlined,
  AddOutlined,
  MailOutline,
} from "@mui/icons-material";
import { Icon } from "../../../../../Atoms";
import { Button } from "../../../../../components/atoms/button/button";
import Select from "../../../../../components/atoms/select/select";
import { TeamChatSwitch } from "../../../components";

const transition = "all 0.3s ease-in-out";

export const HeaderEmail = ({
  enableTeamChat,
  setEnableTeamChat,
}: {
  enableTeamChat: boolean;
  setEnableTeamChat: (value: boolean) => void;
}) => {
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
            <Icon icon={MailOutline} size="medium" sx={{ color: "#6466F1" }} />
            <Typography variant="h6">Email subject example</Typography>
            <Button
              appearence="outlined"
              size="small"
              sx={{
                borderRadius: "10px",
                textTransform: "none",
              }}
              endIcon={<PersonAddAlt />}
            >
              Assign
            </Button>
          </Stack>
          <TeamChatSwitch checked={enableTeamChat} setChecked={setEnableTeamChat} />
        </Box>
        {!enableTeamChat && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{
              mr: 2,
            }}
          >
            <Select
              value={""}
              label="CC"
              sx={{
                margin: 0,
              }}
              onChange={() => { }}
              options={["Option 1", "Option 2", "Option 3"]}
            />
          </Box>
        )}
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
