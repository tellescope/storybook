// components/Menu/Menu.tsx
import React, { useState } from "react";
import { Menu as MuiMenu, Divider, Stack, type MenuProps } from "@mui/material";
import { SearchField, CustomMenuItem } from "./components";

type ItemType = "normal" | "icon" | "checkmark" | "checkbox" | "switch";

type Props = MenuProps & {
  dense?: boolean;
  search?: boolean;
  items?: string[];
  itemType?: ItemType;
};

export const Menu: React.FC<Props> = ({ dense = false, search = false, items = [], itemType = "normal", ...props }) => {
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

  const handleItemClick = (item: string) => {
    if (itemType === "checkbox") {
      handleToggleCheck(item);
    } else if (itemType === "switch") {
      handleToggleSwitch(item);
    } else {
      setSelectedItem(item);
    }
  };

  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <MuiMenu {...props}>
      {search && (
        <>
          <SearchField value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Divider sx={{ mb: 1 }} />
        </>
      )}

      <Stack display="flex" flexDirection="column">
        {filteredItems.map((item) => (
          <CustomMenuItem
            key={item}
            item={item}
            itemType={itemType}
            dense={dense}
            selected={selectedItem === item}
            checked={checkedItems.includes(item)}
            switchOn={switchState[item] ?? false}
            onClick={() => handleItemClick(item)}
            onSwitchChange={() => handleToggleSwitch(item)}
          />
        ))}
      </Stack>
    </MuiMenu>
  );
};
