import { Box, styled } from "@mui/material";

import { reactionsContainerJustifyContent } from "../../MessageText/styles/maps";
import type { MessageType } from "../../../../types";

export const ReactionsContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "messageType",
  })<{ messageType: MessageType }>(({ messageType }) => ({
    display: "flex",
    justifyContent: reactionsContainerJustifyContent[messageType],
  }));
  
  export const ReactionsWrapper = styled(Box)({
    marginTop: "3px",
    width: "fit-content",
    padding: "4px 10px",
    borderRadius: "100px",
    backgroundColor: "#EFF0F2",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  });
  
  export const ReactionItem = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "3.2px",
  });