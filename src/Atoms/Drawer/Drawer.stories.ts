import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Drawer } from './Drawer';
import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Button, Box } from '@mui/material';

const meta = {
  title: 'ATOMS/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile drawer component built with Material UI that can slide in from any direction. Supports both controlled and uncontrolled modes, customizable content, and various anchoring positions.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the drawer is open or closed',
    },
    persistent: {
      control: 'boolean',
      description: 'Whether the drawer is persistent or not',
    },
    title: {
      control: 'text',
      description: 'Optional title displayed at the top of the drawer',
    },
  },
  args: {
    open: false,
    title: 'Drawer Title',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content components
const SampleContent = React.createElement(
  Box,
  {},
  React.createElement(Typography, { variant: 'body1', sx: { mb: 2 } }, 'This is a sample drawer with some content.'),
  React.createElement(Typography, { variant: 'body2', color: 'text.secondary', sx: { mb: 3 } }, 'You can put any content inside the drawer, such as navigation menus, forms, or information panels.'),
  React.createElement(Button, { variant: 'contained', fullWidth: true }, 'Sample Action')
);

const PersistentContent = React.createElement(
  Box,
  {},
  // React.createElement(Typography, { variant: 'body1', sx: { mb: 2 } }, 'This is a sample drawer with some content.'),
);

export const Default: Story = {
  args: {
    children: SampleContent,
    width: 248,
  },
};

export const Fixed: Story = {
  args: {
    children: PersistentContent,
    persistent: true,
    width: 248,
  },
};


