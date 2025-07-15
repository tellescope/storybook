import React from "react";
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Switch,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";

type ItemType = "normal" | "icon" | "checkmark" | "checkbox" | "switch";

type CustomMenuItemProps = {
  item: string;
  itemType: ItemType;
  dense: boolean;
  selected: boolean;
  checked: boolean;
  switchOn: boolean;
  onClick: () => void;
  onSwitchChange: () => void;
};

export const CustomMenuItem: React.FC<CustomMenuItemProps> = ({
  item,
  itemType,
  dense,
  selected,
  checked,
  switchOn,
  onClick,
  onSwitchChange,
}) => (
  <MenuItem
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
    dense={dense}
    onClick={onClick}
  >
    {itemType === "icon" && (
      <ListItemIcon>
        <StarIcon fontSize="small" />
      </ListItemIcon>
    )}
    {itemType === "checkbox" && <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple />}
    <ListItemText>{item}</ListItemText>
    {itemType === "checkmark" && selected && <CheckIcon sx={{ marginLeft: 4 }} fontSize="small" />}
    {itemType === "switch" && (
      <Switch
        sx={{ marginLeft: "auto" }}
        edge="end"
        checked={switchOn}
        onChange={onSwitchChange}
        tabIndex={-1}
        disableRipple
      />
    )}
  </MenuItem>
); 