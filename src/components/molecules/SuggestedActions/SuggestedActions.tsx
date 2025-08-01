import { Box } from "@mui/material";
import { Page } from "../../atoms/Page/Page";
import { SuggestedAction } from "../../atoms/SuggestedAction/SuggestedAction";
import BulbActiveIcon from "../../../assets/bulb-active.svg";
import BulbIcon from "../../../assets/bulb.svg";

export interface SuggestedActionsProps {
  expanded: boolean;
}

export const SuggestedActions: React.FC<SuggestedActionsProps> = ({
  expanded = false,
}) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "16px",
        maxWidth: "700px",
        overflowX: "auto",
        paddingBottom: "8px",
      }}
    >
      {<img src={expanded ? BulbActiveIcon : BulbIcon} />}
      <Page truncated={true} />
      {expanded && (
        <>
          <SuggestedAction truncated={true} />
          <SuggestedAction truncated={true} />
        </>
      )}
    </Box>
  );
};
