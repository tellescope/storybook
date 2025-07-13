import { Box } from "@mui/material";
import { MessageInput as Input } from "./components/Input/Input";

interface MessageInputProps {
  disabled?: boolean;
  error?: boolean;
}

export const MessageInput = ({ disabled, error }: MessageInputProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
      <Input disabled={disabled} error={error} />
    </Box>
  );
};
