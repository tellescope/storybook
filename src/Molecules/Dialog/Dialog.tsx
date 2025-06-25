import React, { useState } from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  Divider,
  type SxProps,
  type Theme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface DialogAction {
  label: string;
  onClick: () => void;
  color?: "primary" | "error" | "secondary" | "success" | "info" | "warning";
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
}

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  actions?: DialogAction[];
  fullWidthButton?: {
    label: string;
    onClick: () => void;
    color?: "primary" | "error" | "secondary" | "success" | "info" | "warning";
    disabled?: boolean;
  };
  showCloseButton?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  dividers?: boolean;
  collapsible?: boolean;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  enableScrim?: boolean;
}
 
const sizeMap = {
  xs: { maxWidth: "xs" as const },
  sm: { maxWidth: "sm" as const },
  md: { maxWidth: "md" as const },
  lg: { maxWidth: "lg" as const },
  xl: { maxWidth: "xl" as const },
};

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  actions = [],
  fullWidthButton,
  showCloseButton = false,
  size = "sm",
  dividers = false,
  collapsible = false,
  children,
  sx,
  enableScrim = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Dialog</Button>
      <MuiDialog
        open={isOpen}
        onClose={handleClose}
        {...(isCollapsed ? {} : sizeMap[size])}
        fullWidth={!isCollapsed}
        hideBackdrop={!enableScrim}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#E8E7EF",
            borderRadius: "16px",
            ...(isCollapsed && {
              minWidth: "300px",
              maxWidth: "500px",
              width: "auto",
            }),
          },
          ...sx,
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: isCollapsed ? 1.5 : description ? 1 : 2,
            pt: isCollapsed ? 1.5 : 2,
            px: isCollapsed ? 2 : 3,
          }}
        >
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {collapsible && (
              <IconButton
                aria-label={isCollapsed ? "expand" : "collapse"}
                onClick={handleToggleCollapse}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            )}
            {showCloseButton && (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </DialogTitle>

        {!isCollapsed && (
          <>
            {dividers && <Divider />}

            <DialogContent
              sx={{ pb: fullWidthButton || actions.length > 0 ? 2 : 3 }}
            >
              {description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: children ? 2 : 0 }}
                >
                  {description}
                </Typography>
              )}
              {children && (
                <Box sx={{ mt: description ? 0 : 0 }}>{children}</Box>
              )}
            </DialogContent>

            {dividers && (fullWidthButton || actions.length > 0) && (
              <Divider sx={{ mb: 2 }} />
            )}
          </>
        )}

        {!isCollapsed && (fullWidthButton || actions.length > 0) && (
          <DialogActions
            sx={{
              px: 3,
              pb: 3,
              flexDirection: fullWidthButton ? "column" : "row",
              gap: fullWidthButton ? 1 : 0,
            }}
          >
            {fullWidthButton && (
              <Button
                variant="contained"
                color={fullWidthButton.color || "primary"}
                onClick={fullWidthButton.onClick}
                disabled={fullWidthButton.disabled}
                fullWidth
                sx={{ mb: actions.length > 0 ? 1 : 0 }}
              >
                {fullWidthButton.label}
              </Button>
            )}

            {actions.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  width: fullWidthButton ? "100%" : "auto",
                }}
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={
                      action.variant ||
                      (index === actions.length - 1 ? "contained" : "text")
                    }
                    color={action.color || "primary"}
                    onClick={action.onClick}
                    disabled={action.disabled}
                    sx={{ flex: fullWidthButton ? 1 : "none" }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Box>
            )}
          </DialogActions>
        )}
      </MuiDialog>
    </>
  );
};
