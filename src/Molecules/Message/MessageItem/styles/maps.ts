import type { IMessage } from "../../types";

interface MessageItemStyleProps {
  messageType: IMessage["type"];
}

export const useMessageItemStyles = ({
  messageType,
}: MessageItemStyleProps) => {
  const root = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: messageType === "INCOMING" ? "row" : "row-reverse",
    px: 2,
    py: 1,
    alignItems: "center",
    bgcolor: "transparent",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      bgcolor: "#EFF0F24D",
      "& .message-options": {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0)",
      },
    },
  };

  const messageOptions = {
    opacity: 0,
    visibility: "hidden",
    transform: "translateX(10px)",
    transition:
      "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  return { root, messageOptions };
};
