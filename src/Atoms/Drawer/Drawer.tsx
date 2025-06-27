import React, { useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  Button,
  styled,
  type DrawerProps as MuiDrawerProps,
} from "@mui/material";

// Styled DrawerHeader component following MUI pattern
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  width?: number | undefined;
  variant?: MuiDrawerProps["variant"];
  persistent?: boolean;
}

// Helper function to get drawer paper styles for right position
const getDrawerPaperStyles = (width: number | undefined, persistent?: boolean) => {
  if (persistent) {
    // MUI persistent drawer style - no floating effects
    return {
      width: width,
      backgroundColor: "#F4F3FA",
    };
  }

  // Floating style for temporary drawers
  return {
    backgroundColor: "#F4F3FA",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    margin: "16px",
    marginLeft: "0", 
    height: "calc(100vh - 32px)",
  };
};

// Helper function to get content container dimensions for right drawer
const getContentDimensions = (width: number | undefined) => {
  return {
    width: width,
    height: "auto",
  };
};

// Helper component for drawer content header
const DrawerContentHeader: React.FC<{
  title?: string;
  persistent?: boolean;
}> = ({ title, persistent }) => {
  
  if (persistent) {
    return (
      <>
        <DrawerHeader>
          {title && (
            <Typography variant="h6" component="h4">
              {title}
            </Typography>
          )}
        </DrawerHeader>
      </>
    );
  }

  if (!title) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        pb: 1,
      }}
    >
      <Typography>
        {title}
      </Typography>
    </Box>
  );
};

// Demo trigger button component
const DemoTriggerButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      p: 2,
      minHeight: '100px'
    }}
  >
    <Button 
      variant="contained" 
      onClick={onToggle}
      size="large"
    >
      {isOpen ? "Close" : "Open"} Drawer
    </Button>
  </Box>
);

export const Drawer: React.FC<DrawerProps> = ({
  open,
  title,
  children,
  width,
  variant = "temporary",
  persistent = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  
  // Use persistent variant when persistent prop is true
  const drawerVariant = persistent ? "persistent" : variant;

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

  // Explicit close for persistent drawers
  const handleExplicitClose = () => {
    setIsOpen(false);
  };

  // Get dimensions for the content container
  const contentDimensions = getContentDimensions(width);

  // Drawer content with consistent padding for both persistent and temporary
  const drawerContent = (
    <Box
      sx={{
        ...contentDimensions,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DrawerContentHeader 
        title={title} 
        persistent={persistent}
      />
      
      <Box sx={{ flex: 1, overflow: "auto" }}>
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
            width: width,
            flexShrink: 0,
          }),
          zIndex: 1300,
          "& .MuiDrawer-paper": {
            ...getDrawerPaperStyles(width, persistent),
            zIndex: 1300,
          },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    </>
  );
};