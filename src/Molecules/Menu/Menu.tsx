// components/Menu/Menu.tsx
import React, { useState } from "react";
import {
  Menu as MuiMenu,
  Divider,
  Stack,
  type MenuProps,
} from "@mui/material";
import { SearchField } from "./components";
import { ItemCheckbox, ItemSwitch, Item } from "./items";

type Props = MenuProps & {
  search?: boolean;
};

const MenuComponent: React.FC<Props> = ({
  search = false,
  children,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (searchQuery && React.isValidElement(child)) {
      const { searchableText, children: childChildren } = child.props as {
        searchableText?: string;
        children: React.ReactNode;
      };
      const childText =
        searchableText || (typeof childChildren === "string" ? childChildren : "");
      return childText.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <MuiMenu {...props}>
      {search && (
        <>
          <SearchField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Divider sx={{ mb: 1 }} />
        </>
      )}

      <Stack display="flex" flexDirection="column">
        {filteredChildren}
      </Stack>
    </MuiMenu>
  );
};

export const Menu = Object.assign(MenuComponent, {
  Item,
  Switch: ItemSwitch,
  Checkbox: ItemCheckbox,
});
