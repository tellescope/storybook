import { Box } from "@mui/material";
import type React from "react";
import { AttachedFile } from "../../atoms/AttachedFile/AttachedFile";

export const FileArray: React.FC<any> = () => {
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
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
      <AttachedFile />
    </Box>
  );
};
