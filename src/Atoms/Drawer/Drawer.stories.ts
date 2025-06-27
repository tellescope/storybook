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
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Which side of the screen the drawer slides in from',
    },
    title: {
      control: 'text',
      description: 'Optional title displayed at the top of the drawer',
    },
    width: {
      control: 'number',
      description: 'Width of the drawer (or height if anchor is top/bottom)',
    },
    variant: {
      control: 'select',
      options: ['temporary', 'persistent', 'permanent'],
      description: 'The drawer variant affects how it behaves when opened',
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the drawer is closed',
    },
  },
  args: {
    open: false,
    anchor: 'right',
    title: 'Drawer Title',
    width: 248,
    variant: 'temporary',
    onClose: fn(),
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

const NavigationContent = React.createElement(
  List,
  {},
  React.createElement(ListItem, { sx: { cursor: 'pointer' } }, React.createElement(ListItemText, { primary: 'Home' })),
  React.createElement(ListItem, { sx: { cursor: 'pointer' } }, React.createElement(ListItemText, { primary: 'Products' })),
  React.createElement(ListItem, { sx: { cursor: 'pointer' } }, React.createElement(ListItemText, { primary: 'Services' })),
  React.createElement(Divider, {}),
  React.createElement(ListItem, { sx: { cursor: 'pointer' } }, React.createElement(ListItemText, { primary: 'Settings' })),
  React.createElement(ListItem, { sx: { cursor: 'pointer' } }, React.createElement(ListItemText, { primary: 'Help' }))
);

export const Default: Story = {
  args: {
    children: SampleContent,
  },
};


