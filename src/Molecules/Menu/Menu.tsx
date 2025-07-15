// components/Menu/Menu.tsx
import React, { useState } from "react";
import { Menu as MuiMenu, MenuItem, ListItemIcon, ListItemText, Checkbox, Switch, TextField, Divider, Stack, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";

type ItemType = "normal" | "icon" | "checkmark" | "checkbox" | "switch";

type Props = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  dense?: boolean;
  search?: boolean;
  items?: string[];
  itemType?: ItemType;
};

export const Menu: React.FC<Props> = ({ anchorEl, open, onClose, dense = false, search = false, items = [], itemType = "normal" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [switchState, setSwitchState] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleToggleCheck = (item: string) => {
    setCheckedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  const handleToggleSwitch = (item: string) => {
    setSwitchState((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <MuiMenu anchorEl={anchorEl} open={open} onClose={onClose}>
      {search && (
        <>
          <Box px={1} pb={1}>
            <TextField
              placeholder="Search..."
              sx={{
                border: "2px solid #1C7AE0",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none", // this is the original border color
                  },
                  "&:hover fieldset": {
                    border: "none", // use the original border color on hover
                  },
                },
              }}
              size="small"
            />
          </Box>

          <Divider sx={{ mb: 1 }} />
        </>
      )}

      <Stack display="flex" flexDirection="column">
        {filteredItems.map((item) => (
          <MenuItem
            key={item}
            selected={selectedItem === item}
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
            onClick={() => {
              if (itemType === "checkbox") {
                handleToggleCheck(item);
              } else if (itemType === "switch") {
                handleToggleSwitch(item);
              } else {
                setSelectedItem(item);
              }
            }}
          >
            {itemType === "icon" && (
              <ListItemIcon>
                <StarIcon fontSize="small" />
              </ListItemIcon>
            )}
            {itemType === "checkmark" && (
              <ListItemIcon>{checkedItems.includes(item) ? <CheckIcon fontSize="small" /> : <span style={{ width: 24 }} />}</ListItemIcon>
            )}
            {itemType === "checkbox" && <Checkbox edge="start" checked={checkedItems.includes(item)} tabIndex={-1} disableRipple />}
            <ListItemText>{item}</ListItemText>
            {itemType === "switch" && (
              <Switch edge="end" checked={switchState[item] ?? false} onChange={() => handleToggleSwitch(item)} tabIndex={-1} disableRipple />
            )}
          </MenuItem>
        ))}
      </Stack>
    </MuiMenu>
  );
};
