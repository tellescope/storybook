import React, { useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  position: 'relative',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}));

export interface DrawerProps {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  persistent?: boolean;
  hugContents?: boolean;
  mainContent?: React.ReactNode;
}

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

// Helper function to get drawer paper styles for right position
const getDrawerPaperStyles = (persistent?: boolean, hugContents?: boolean) => {
  if (persistent) {
    // MUI persistent drawer style - no floating effects
    return {
      backgroundColor: "#F4F3FA",
      width: drawerWidth,
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

export const Drawer: React.FC<DrawerProps> = ({
  open = false,
  title,
  children,
  persistent = false,
  hugContents = false,
  mainContent,
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
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {title && (
        <Typography variant="subtitle2" component="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}

      <Box
        sx={{
          "& *": {
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );

  // For persistent drawers, use the proper layout structure
  if (persistent) {
    return (
      <Box sx={{ display: 'flex' }}>
        <Main open={isOpen}>
          <DemoTriggerButton isOpen={isOpen} onToggle={handleToggle} />
          {mainContent}
        </Main>
        <MuiDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: "#F4F3FA",
            },
          }}
          variant="persistent"
          anchor="right"
          open={isOpen}
        >
          {drawerContent}
        </MuiDrawer>
      </Box>
    );
  }

  // For temporary drawers, use the original structure
  return (
    <>
      <DemoTriggerButton isOpen={isOpen} onToggle={handleToggle} />
      <MuiDrawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        variant={drawerVariant}
        hideBackdrop={persistent}
        sx={{
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
