import { Box, styled, Typography } from "@mui/material";
import type { MessageType, Reaction } from "../../../types";
import { reactionsContainerJustifyContent } from "../MessageText/styles/maps";

const ReactionsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: MessageType }>(({ messageType }) => ({
  display: "flex",
  justifyContent: reactionsContainerJustifyContent[messageType],
}));

const ReactionsWrapper = styled(Box)({
  marginTop: "3px",
  width: "fit-content",
  padding: "2px 8px",
  borderRadius: "100px",
  backgroundColor: "#EFF0F2",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const ReactionItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "3.2px",
});

interface ReactionsProps {
  reactions: Reaction[];
  messageType: MessageType;
}

export const Reactions = ({ reactions, messageType }: ReactionsProps) => {
  if (reactions.length === 0) {
    return null;
  }

  return (
    <ReactionsContainer messageType={messageType}>
      <ReactionsWrapper>
        {reactions.map((reaction) => (
          <ReactionItem key={reaction.icon}>
            <Box>{reaction.icon}</Box>
            <Typography variant="caption" color="black">
              {reaction.count}
            </Typography>
          </ReactionItem>
        ))}
      </ReactionsWrapper>
    </ReactionsContainer>
  );
};
