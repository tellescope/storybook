import { Box, IconButton, InputLabel, MenuItem, Stack } from "@mui/material";

import {
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
  PersonAddAlt,
  ChatBubbleOutline,
  AddOutlined,
  GroupAddOutlined,
} from "@mui/icons-material";
import { FormControlAtom, Icon } from "../../../../../Atoms";
import { Button } from "../../../../../components/atoms/button/button";
import Select from "../../../../../components/atoms/select/select";
import { Input } from "../../../../../components/atoms/input/input";

export const EmptyHeaderChat = () => {
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
      <Stack display={"flex"} flexDirection={"column"}>
        <FormControlAtom variant="standard">
          <InputLabel id="demo-simple-select-standard-label">TO</InputLabel>
          <Select
            value={""}
            options={["James", "John", "Jane"]}
            onChange={() => console.log("to")}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          ></Select>
        </FormControlAtom>
        <FormControlAtom variant="standard">
          <Input
            sx={{
              mt: 2,
            }}
            placeholder="Subject"
            onChange={() => console.log("subject")}
          />
        </FormControlAtom>
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
