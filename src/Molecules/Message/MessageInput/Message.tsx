import { Box } from "@mui/material";
import { Input } from "./Input";
import { Toolbar } from "./Toolbar";

interface MessageProps {
  disabled?: boolean;
  error?: boolean;
}

export const Message = ({ disabled, error }: MessageProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Toolbar />
      <Input disabled={disabled} error={error} />
    </Box>
  );
};
