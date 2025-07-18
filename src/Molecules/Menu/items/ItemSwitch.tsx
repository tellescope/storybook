import React from "react";
import {
  MenuItem as MuiMenuItem,
  ListItemText,
  Switch,
  type MenuItemProps,
} from "@mui/material";

type Props = Omit<MenuItemProps, "checked"> & {
  checked?: boolean;
  searchableText?: string;
  dense?: boolean;
};

export const ItemSwitch: React.FC<Props> = ({
  checked,
  children,
  dense = false,
  ...props
}) => (
  <MuiMenuItem
    selected={checked}
    sx={{
      p: 1,
      height: dense ? "32px" : "auto",
      borderRadius: "6px",
      mx: 1,
      "&.Mui-selected": {
        backgroundColor: "#DDE1F9",
        "&:hover": {
          backgroundColor: "#DDE1F9",
        },
      },
    }}
    {...props}
  >
    <ListItemText>{children}</ListItemText>
    <Switch
      sx={{ marginLeft: "auto", marginRight: 2 }}
      edge="end"
      checked={checked}
      size="small"
      tabIndex={-1}
      disableRipple
    />
  </MuiMenuItem>
); 