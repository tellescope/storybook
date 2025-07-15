// components/Menu/Menu.stories.tsx
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    dense: { control: 'boolean' },
    search: { control: 'boolean' },
    itemType: {
      control: 'select',
      options: ['normal', 'icon', 'checkmark', 'checkbox', 'switch'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Menu>;

const Template: Story = (args: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
      <Menu
        {...args}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        items={['Item One', 'Item Two', 'Item Three']}
      />
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  dense: false,
  search: true,
  itemType: 'normal',
};
