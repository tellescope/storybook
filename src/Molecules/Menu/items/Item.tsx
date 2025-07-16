import React from "react";
import {
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
  type MenuItemProps,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

type Props = MenuItemProps & {
  icon?: React.ReactNode;
  searchableText?: string;
};

export const MenuItem: React.FC<Props> = ({
  icon,
  children,
  selected,
  ...props
}) => (
  <MuiMenuItem
    selected={selected}
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
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <ListItemText>{children}</ListItemText>
    {selected && <CheckIcon sx={{ marginLeft: 4 }} fontSize="small" />}
  </MuiMenuItem>
); 