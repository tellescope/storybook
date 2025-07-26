import { Box, InputBase, Stack } from "@mui/material";
import { IconButton } from "../../../../components/atoms/button/icon-button";
import { Icon } from "../../../../Atoms";
import { AddCircleOutline, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Toolbar } from "../../components/Toolbar";
import type { ChatInterface } from "../../types";
import { useMessageInputStyles } from "./styles/maps";
import { Send } from "../../Icons";
import { styles } from "../MessageHeader";

type MessageInputProps = {
  enableTeamChat: boolean;
  chatInterface: ChatInterface;
  setChatInterface: (chatInterface: ChatInterface) => void;
  disabled?: boolean;
  error?: boolean;
};

export const MessageInput = ({ enableTeamChat, chatInterface, setChatInterface, disabled, error }: MessageInputProps) => {
  const inputStyles = useMessageInputStyles({ disabled, error });
  return (
    <Box sx={styles.inputContainer(enableTeamChat)}>
      {enableTeamChat && (
        <Box sx={{ display: "flex" }}>
          <IconButton color="secondary">
            <Icon icon={AddCircleOutline} size="medium" />
          </IconButton>
          <IconButton color="secondary">
            <Icon icon={EmojiEmotionsOutlined} size="medium" />
          </IconButton>
        </Box>
      )}
      <Stack display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
        {!enableTeamChat && <Toolbar chatInterface={chatInterface} setChatInterface={setChatInterface} />}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
          <Box sx={inputStyles.root}>
            <IconButton disabled={disabled} sx={inputStyles.textFieldsButton}>
              {/* <TextFieldsIcon /> */}
            </IconButton>
            <InputBase
              disabled={disabled}
              sx={inputStyles.inputBase}
              inputProps={{ "aria-label": "Type a message" }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton disabled={disabled} sx={inputStyles.micButton}>
                <Mic />
              </IconButton>
              <IconButton
                disabled={disabled}
                className="send-button"
                sx={inputStyles.sendButton}
              >
                <Send />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
