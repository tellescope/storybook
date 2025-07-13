import { Box, IconButton, Stack, Typography } from "@mui/material";

import {
  InfoOutlined,
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
  PersonAddAlt,
  GroupAddOutlined,
  AddOutlined,
  GroupsOutlined,
  TextsmsOutlined,
  MailOutline,
} from "@mui/icons-material";
import { Icon } from "../../../../../Atoms";
import { Button } from "../../../../../components/atoms/button/button";
import Switch from "../../../../../components/atoms/switch/switch";
import Select from "../../../../../components/atoms/select/select";

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
        bgcolor={enableTeamChat ? "#F4F0FF" : "#F8FAFC"}
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
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap={1}
            px={1}
            borderRadius={1}
            bgcolor={enableTeamChat ? "#DED3FE" : ""}
            alignItems={"center"}
            sx={{
              transition,
            }}
          >
            <Icon
              icon={GroupsOutlined}
              sx={{ color: enableTeamChat ? "#A754F5" : "black" }}
              size="medium"
            />
            <Switch
              checked={enableTeamChat}
              onChange={(e) => setEnableTeamChat(e.target.checked)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(28, 122, 224, 0.04)",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#1C7AE0",
                },
              }}
            />
          </Stack>
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
              onChange={() => {}}
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
