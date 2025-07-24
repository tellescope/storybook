import { Box, Stack } from "@mui/material";
import { styles } from "../../../Organism/ItemViewer/shared";
import { IconButton } from "../../../components/atoms/button/icon-button";
import { Icon } from "../../../Atoms";
import { AddCircleOutline, EmojiEmotionsOutlined } from "@mui/icons-material";

import type { ChatInterface } from "../../../Organism/ItemViewer/types";
import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "../Input/Input";

type ChatInputProps = {
  enableTeamChat: boolean;
  chatInterface: ChatInterface;
  setChatInterface: (chatInterface: ChatInterface) => void;
  disabled?: boolean;
  error?: boolean;

};
export const MessageInput = ({ enableTeamChat, chatInterface, setChatInterface, disabled, error }: ChatInputProps) => {
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
          <Input disabled={disabled} error={error} />
        </Box>
      </Stack>
    </Box>
  );
};
