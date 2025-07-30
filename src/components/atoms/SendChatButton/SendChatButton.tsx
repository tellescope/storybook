import React from "react";
import { Box, Typography } from "@mui/material";

interface SendChatButtonProps {
  message: string;
}

const SendChatButton: React.FC<SendChatButtonProps> = ({ message = "" }) => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "rgba(245, 245, 245, 1)",
        borderRadius: "52px",
        width: "287px",
        height: "64px",
        textAlign: "right",
        padding: "8px 16px 8px 16px",
      }}
    >
      <Typography sx={{ fontSize: "1rem", color: "rgba(0, 0, 0, 0.56)" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default SendChatButton;
