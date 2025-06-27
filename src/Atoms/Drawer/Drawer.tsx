import React, { useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  Button,
  type DrawerProps as MuiDrawerProps,
} from "@mui/material";

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
  title?: string;
  children?: React.ReactNode;
  width?: number | string;
  variant?: MuiDrawerProps["variant"];
}

// Helper function to get drawer paper styles based on anchor position
const getDrawerPaperStyles = (anchor: string) => {
  const baseStyles = {
    backgroundColor: "#F4F3FA",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  };

  const anchorSpecificStyles = {

    right: {
      margin: "16px",
      marginLeft: "0", 
      height: "calc(100vh - 32px)",
    },
  };

  return {
    ...baseStyles,
    ...anchorSpecificStyles[anchor as keyof typeof anchorSpecificStyles],
  };
};

// Helper function to get content container dimensions
const getContentDimensions = (anchor: string, width: number | string) => {
  const isHorizontal = anchor === "top" || anchor === "bottom";
  
  return {
    width: isHorizontal ? "auto" : width,
    height: isHorizontal ? width : "auto",
  };
};

// Header component for the drawer
const DrawerHeader: React.FC<{
  title?: string;
}> = ({ title }) => {
  if (!title) return null;

  return (
    <Box
      sx={{
        mb: 2,
        pb: 1,
      }}
    >
      <Typography variant="h6" component="h2">
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
  anchor = "right",
  title,
  children,
  width = 248,
  variant = "temporary",
}) => {
  const [isOpen, setIsOpen] = useState(open);
  

  // Handle toggle for demo button
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Get dimensions for the content container
  const contentDimensions = getContentDimensions(anchor, width);

  // Drawer content with header and body
  const drawerContent = (
    <Box
      sx={{
        ...contentDimensions,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DrawerHeader title={title} />
      
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
        anchor={anchor}
        open={isOpen}
        onClose={handleClose}
        variant={variant}
        sx={{
          zIndex: 1300,
          "& .MuiDrawer-paper": {
            ...getDrawerPaperStyles(anchor),
            zIndex: 1300,
          },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    </>
  );
};