import React, { useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  Button,
} from "@mui/material";


export interface DrawerProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  persistent?: boolean;
  hugContents?: boolean;
}

// Helper function to get drawer paper styles for right position
const getDrawerPaperStyles = (persistent?: boolean, hugContents?: boolean) => {
  if (persistent) {
    // MUI persistent drawer style - no floating effects
    return {
      backgroundColor: "#F4F3FA",
      width: "fit-content",
      height: hugContents ? "fit-content" : "100vh",
    };
  }

  // Floating style for temporary drawers
  const baseStyles = {
    backgroundColor: "#F4F3FA",
    borderRadius: "28px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    margin: "16px",
    marginLeft: "0",
    height: hugContents ? "fit-content" : "calc(100vh - 32px)",
    width: "fit-content",
  };

  // When hugging content, position at bottom
  if (hugContents) {
    return {
      ...baseStyles,
      position: "fixed",
      bottom: "16px",
      top: "auto",
    };
  }

  return baseStyles;
};

// Demo trigger button component
const DemoTriggerButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 2,
      minHeight: "100px",
    }}
  >
    <Button variant="contained" onClick={onToggle} size="large">
      {isOpen ? "Close" : "Open"} Drawer
    </Button>
  </Box>
);

export const Drawer: React.FC<DrawerProps> = ({
  open,
  title,
  children,
  persistent = false,
  hugContents = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  // Use persistent variant when persistent prop is true
  const drawerVariant = persistent ? "persistent" : "temporary";

  // Handle toggle for demo button
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle close - only close if not persistent or via explicit close action
  const handleClose = () => {
    if (!persistent) {
      setIsOpen(false);
    }
  };

  // Drawer content with consistent padding for both persistent and temporary
  const drawerContent = (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        minWidth: "200px", // Minimal width for usability
        boxSizing: "border-box",
      }}
    >
      <Typography variant="subtitle2" component="h4">
        {title}
      </Typography>

      <Box
        sx={{
          mt: 2,
          width: "fit-content",
          "& *": {
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Demo trigger button - always shown now as per user's changes */}
      <DemoTriggerButton isOpen={isOpen} onToggle={handleToggle} />

      <MuiDrawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        variant={drawerVariant}
        hideBackdrop={persistent}
        sx={{
          ...(persistent && {
            flexShrink: 0,
          }),
          zIndex: 1300,
          "& .MuiDrawer-paper": {
            ...getDrawerPaperStyles(persistent, hugContents),
            zIndex: 1300,
          },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    </>
  );
};
