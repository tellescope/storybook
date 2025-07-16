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
};

export const ItemCheckbox: React.FC<Props> = ({
  checked,
  children,
  ...props
}) => (
  <MuiMenuItem
    selected={checked}
    sx={{
      p: 1,
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