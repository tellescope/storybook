import { Box } from "@mui/material";
import { MessageInput as Input } from "./components/Input/Input";
import { Toolbar } from "./components/Toolbar/Toolbar";

interface MessageInputProps {
  disabled?: boolean;
  error?: boolean;
  hideToolbar?: boolean;
}

export const MessageInput = ({ disabled, error, hideToolbar }: MessageInputProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
      {!hideToolbar && <Toolbar />}
      <Input disabled={disabled} error={error} />
    </Box>
  );
};
