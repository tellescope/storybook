import { Box, IconButton, InputBase } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";

import { Mic } from "@mui/icons-material";
import { Send } from "../../../Icons";
import { useMessageInputStyles } from "./styles/maps";


interface MessageInputProps {
  disabled?: boolean;
  error?: boolean;
}

export const MessageInput = ({ disabled, error }: MessageInputProps) => {
  const styles = useMessageInputStyles({ disabled, error });

  return (
    <Box sx={styles.root}>
      <IconButton disabled={disabled} sx={styles.textFieldsButton}>
        <TextFieldsIcon />
      </IconButton>
      <InputBase
        disabled={disabled}
        sx={styles.inputBase}
        inputProps={{ "aria-label": "Type a message" }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton disabled={disabled} sx={styles.micButton}>
          <Mic />
        </IconButton>
        <IconButton
          disabled={disabled}
          className="send-button"
          sx={styles.sendButton}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};
