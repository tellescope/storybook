import { Box, Stack, Typography } from "@mui/material";

import {
  ChatBubbleOutline,
  GroupsOutlined,
  PersonAddAlt,
  GroupAddOutlined,
  AddOutlined,
} from "@mui/icons-material";
import { Button } from "../../../../components/atoms/button/button";
import { Icon } from "../../../../Atoms";
import Switch from "../../../../components/atoms/switch/switch";

export const ChatActions = () => {
  return (
    <Box px={2}>
      <Box display={"flex"} mt={2} justifyContent={"space-between"}>
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
          <Typography variant="h6">Chat Subject example</Typography>
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
          gap={2}
          alignItems={"center"}
        >
          <Icon icon={GroupsOutlined} size="medium" />
          <Switch color="primary" />
        </Stack>
      </Box>
      <Box mt={1} ml={1}>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          gap={2}
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
    </Box>
  );
}; 