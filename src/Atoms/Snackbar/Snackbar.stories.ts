import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar } from './Snackbar';

const meta: Meta<typeof Snackbar> = {
  title: 'Atoms/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A basic Snackbar component for displaying brief messages to users.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the snackbar is open (required)',
    },
    message: {
      control: 'text',
      description: 'The message to display in the snackbar',
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'The severity level of the message',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const handleClose = () => {
  console.log('Close action triggered');
};

export const Default: Story = {
  args: {
    open: true,
    message: 'This is a default snackbar message',
    severity: 'info',
  },
};

export const WithActions: Story = {
  args: {
    open: true,
    message: 'Message sent successfully',
    severity: "info",
    action: React.createElement(
      React.Fragment,
      {},
      React.createElement(Button, { 
        size: 'small',
        variant: 'text',
        onClick: handleClose 
      }, 'UNDO'),
      React.createElement(IconButton, {
        size: 'small',
        'aria-label': 'close',
        color: 'inherit',
        onClick: handleClose
      }, React.createElement(CloseIcon, { fontSize: 'small' }))
    ),
  },
};

export const Alert: Story = {
  args: {
    open: true,
    message: 'Warning! Please check your input',
    severity: 'warning',
  },
}; 