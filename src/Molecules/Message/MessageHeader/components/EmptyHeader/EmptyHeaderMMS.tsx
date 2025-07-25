import { Box, IconButton, Stack } from "@mui/material";

import {
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
  PersonAddAlt,
  ChatBubbleOutline,
  AddOutlined,
  GroupAddOutlined,
} from "@mui/icons-material";
import { Button } from "../../../../../components/atoms/button/button";
import { Icon } from "../../../../../Atoms";
import Select from "../../../../../components/atoms/select/select";


export const EmptyHeaderMMS = () => {
  return (
    <Box p={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
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
      <Stack display={"flex"} flexDirection={"column"} gap={2}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            mr: 2,
          }}
        >
          <Select
            value={""}
            label="To"
            sx={{
              margin: 0,
            }}
            onChange={() => {}}
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <Select
            value={""}
            label="Subject"
            sx={{
              margin: 0,
            }}
            onChange={() => {}}
            options={["Option 1", "Option 2", "Option 3"]}
          />
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
              color="secondary"
              sx={{
                textTransform: "none",
              }}
              startIcon={<AddOutlined />}
            >
              Tag
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
