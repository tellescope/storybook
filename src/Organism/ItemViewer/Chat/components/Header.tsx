import { Box, IconButton, Typography } from "@mui/material";

import {
  InfoOutlined,
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
} from "@mui/icons-material";

export const Header = () => {
  return (
    <Box
      display={"flex"}
      bgcolor={"#E2E8F0"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
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
  );
}; 