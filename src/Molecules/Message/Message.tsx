import { Box } from "@mui/material";
import { MessageInput } from "./MessageInput/MessageInput";
import { Toolbar } from "./Toolbar/Toolbar";

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
