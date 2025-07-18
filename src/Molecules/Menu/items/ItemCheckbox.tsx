import React from "react";
import {
  MenuItem as MuiMenuItem,
  ListItemText,
  Checkbox,
  type MenuItemProps,
} from "@mui/material";

type Props = Omit<MenuItemProps, "checked"> & {
  checked?: boolean;
  searchableText?: string;
  dense?: boolean;
};

export const ItemCheckbox: React.FC<Props> = ({
  checked,
  children,
  dense = false,
  ...props
}) => (
  <MuiMenuItem
    selected={checked}
    sx={{
      px: 1,
      py: 0,
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
    <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple />
    <ListItemText>{children}</ListItemText>
  </MuiMenuItem>
); 