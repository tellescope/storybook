import { Box, IconButton, Typography } from "@mui/material";
import {
  MarkEmailUnreadOutlined,
  AddReactionOutlined,
} from "@mui/icons-material";
import { Checkmark, Nice } from "../Icons";

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

export const MessageOptions = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
        gap={0.4}
      >
        <Box
          mr={0.4}
          display={"flex"}
          alignItems={"center"}
          gap={1.4}
          justifyContent={"flex-end"}
        >
          <Typography color={"black"} variant="caption">
            9:00 AM
          </Typography>
          <Box
            bgcolor={"#EFF0F2"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"24px"}
            height={"24px"}
            borderRadius={"100px"}
            p={1}
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
            <ButttonIcon icon={<Checkmark />} />
            <ButttonIcon icon={<Nice />} />
            <ButttonIcon icon={<AddReactionOutlined />} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
