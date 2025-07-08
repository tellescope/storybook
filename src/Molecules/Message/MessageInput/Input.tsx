import { Box, IconButton, InputBase } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";

import { Send } from "../Icons";
import { Mic } from "@mui/icons-material";

interface MessageInputProps {
  disabled?: boolean;
  error?: boolean;
}

export const Input = ({ disabled, error }: MessageInputProps) => {
  // Determine border color based on state hierarchy
  const getBorderColor = () => {
    if (disabled) return "1px solid rgb(172, 172, 172)";
    if (error) return "1px solid #DC2626";
    return "1px solid #E2E8F0";
  };

  // Determine focus border color and send button behavior
  const getFocusStyles = () => {
    if (disabled || error) {
      // Don't change border or send button on focus if disabled or error
      return {};
    }
    
    return {
      borderColor: "#1C7AE0",
      "& .send-button": {
        backgroundColor: "#1C7AE0",
        color: "white",
        "& svg": {
          color: "white",
          fill: "white",
        },
      },
    };
  };

  return (
    <Box
      sx={{
        borderRadius: 28,
        border: getBorderColor(),
        display: "flex",
        alignItems: "center",
        padding: 0.8,
        justifyContent: "space-between",
        transition: "border-color 0.2s ease-in-out",
        "&:focus-within": getFocusStyles(),
      }}
    >
      <IconButton
        disabled={disabled}
        sx={{ color: "black", ":disabled": { color: "rgb(163, 163, 163)" } }}
      >
        <TextFieldsIcon />
      </IconButton>
      <InputBase
        disabled={disabled}
        sx={{ flex: 1, marginLeft: 1 }}
        inputProps={{ "aria-label": "Type a message" }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          disabled={disabled}
          sx={{
            color: "black",
            ":disabled": {
              color: "rgb(163, 163, 163)",
            },
            transition:
              "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
          }}
        >
          <Mic />
        </IconButton>
        <IconButton
          disabled={disabled}
          className="send-button"
          sx={{
            color: "black",
            ":disabled": {
              color: "rgb(163, 163, 163)",
            },
            transition:
              "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
          }}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};
