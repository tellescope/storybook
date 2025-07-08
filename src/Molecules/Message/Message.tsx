import { Box } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { Toolbar } from "./Toolbar";

interface MessageProps {
  disabled?: boolean;
  error?: boolean;
}

export const Message = ({ disabled, error }: MessageProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Toolbar />
      <MessageInput disabled={disabled} error={error} />
    </Box>
  );
};
