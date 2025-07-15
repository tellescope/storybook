// components/Menu/Menu.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Divider } from "@mui/material";
import { Menu } from "./Menu";
import { MenuItem, CheckboxMenuItem, SwitchMenuItem } from "./items";
import Star from "@mui/icons-material/Star";

const meta: Meta<typeof Menu> = {
  title: "Molecules/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    search: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Playground: Story = {
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState<string[]>([]);
    const [switches, setSwitches] = useState<Record<string, boolean>>({});

    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
        <Menu {...args} anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>
            Name
          </MenuItem>
          <MenuItem selected={selected === "Care Team"} onClick={() => setSelected("Care Team")}>
            Care Team
          </MenuItem>
          <Divider />
          <CheckboxMenuItem
            checked={checked.includes("Appointments")}
            onClick={() => setChecked((prev) => (prev.includes("Appointments") ? prev.filter((i) => i !== "Appointments") : [...prev, "Appointments"]))}
          >
            Appointments
          </CheckboxMenuItem>
          <CheckboxMenuItem
            checked={checked.includes("Messages")}
            onClick={() => setChecked((prev) => (prev.includes("Messages") ? prev.filter((i) => i !== "Messages") : [...prev, "Messages"]))}
          >
            Messages
          </CheckboxMenuItem>
          <Divider />
          <SwitchMenuItem checked={switches.Documents ?? false} onClick={() => setSwitches((p) => ({ ...p, Documents: !p.Documents }))}>
            Documents
          </SwitchMenuItem>
        </Menu>
      </>
    );
  },
  args: {
    search: true,
  },
};
