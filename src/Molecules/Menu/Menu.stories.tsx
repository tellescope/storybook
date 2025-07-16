// components/Menu/Menu.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Divider } from "@mui/material";
import { Menu } from "./Menu";
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

export const Default: Story = {
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
          <Menu.Item selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>
            Name
          </Menu.Item>
          <Menu.Item selected={selected === "Care Team"} onClick={() => setSelected("Care Team")}>
            Care Team
          </Menu.Item>
          <Divider />
          <Menu.Checkbox
            checked={checked.includes("Appointments")}
            onClick={() => setChecked((prev) => (prev.includes("Appointments") ? prev.filter((i) => i !== "Appointments") : [...prev, "Appointments"]))}
          >
            Appointments
          </Menu.Checkbox>
          <Menu.Checkbox
            checked={checked.includes("Messages")}
            onClick={() => setChecked((prev) => (prev.includes("Messages") ? prev.filter((i) => i !== "Messages") : [...prev, "Messages"]))}
          >
            Messages
          </Menu.Checkbox>
          <Divider />
          <Menu.Switch checked={switches.Documents ?? false} onClick={() => setSwitches((p) => ({ ...p, Documents: !p.Documents }))}>
            Documents
          </Menu.Switch>
        </Menu>
      </>
    );
  },
  args: {
    search: true,
  },
};
