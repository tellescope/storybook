import React, { useState } from "react";
import {
  Snackbar as MuiSnackbar,
  Alert,
  Button,
  Box,
} from "@mui/material";

export interface SnackbarProps {
  open: boolean;
  message?: string;
  severity?: "success" | "info" | "warning" | "error";
  action?: React.ReactNode;
}

// Demo trigger button component
const DemoTriggerButton: React.FC<{
  onShowSnackbar: (severity: "success" | "info" | "warning" | "error") => void;
}> = ({ onShowSnackbar }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      p: 2,
      flexWrap: "wrap",
    }}
  >
    <Button
      variant="contained"
      onClick={() => onShowSnackbar("success")}
    >
      Show
    </Button>
  </Box>
);

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message = "This is a snackbar message",
  severity = "info",
  action,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleShowSnackbar = () => {
    setIsOpen(true);
  };

  return (
    <>
      <DemoTriggerButton onShowSnackbar={handleShowSnackbar} />
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setIsOpen(false)}
          severity={severity}
          variant="filled"
          color={severity}
          sx={{ width: "100%" }}
          action={action}
        >
          {message}
        </Alert>
      </MuiSnackbar>
    </>
  );
};

export default Snackbar; 