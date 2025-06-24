import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dialog } from './Dialog';
import { TextField, FormControlLabel, Checkbox, Box } from '@mui/material';
import React from 'react';

const meta = {
  title: 'Molecules/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile dialog component built with Material UI that supports various configurations including different sizes, actions, and content types.',
      },
    },
  },

  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    onClose: {
      action: 'onClose',
      description: 'Callback fired when the dialog should close',
    },
    title: {
      control: 'text',
      description: 'The title of the dialog',
    },
    description: {
      control: 'text',
      description: 'Optional supporting text below the title',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the dialog',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in the top-right corner',
    },
    dividers: {
      control: 'boolean',
      description: 'Whether to show dividers between dialog sections',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the dialog can be collapsed/expanded',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Whether the dialog starts in collapsed state',
    },
  },
  args: {
    open: false,
    onClose: fn(),
    title: 'Dialog Title',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Dialog',
    description: 'This is a simple dialog with just a title and description.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Confirm Action',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Delete', onClick: fn(), color: 'error', variant: 'contained' },
    ],
  },
};

export const WithFullWidthButton: Story = {
  args: {
    title: 'Sign Up',
    description: 'Create your account to get started.',
    fullWidthButton: {
      label: 'Create Account',
      onClick: fn(),
      color: 'primary',
    },
    actions: [
      { label: 'Already have an account?', onClick: fn(), variant: 'text' },
    ],
  },
};

export const WithCloseButton: Story = {
  args: {
    title: 'Information',
    description: 'This dialog has a close button in the top-right corner.',
    showCloseButton: true,
    actions: [
      { label: 'Got it', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const WithDividers: Story = {
  args: {
    title: 'Dialog with Dividers',
    description: 'This dialog shows visual dividers between the title, content, and actions sections.',
    dividers: true,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Confirm', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const Collapsible: Story = {
  args: {
    title: 'Collapsible Dialog',
    description: 'This dialog can be collapsed to show only the title bar. Click the expand/collapse icon.',
    collapsible: true,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Save', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const CollapsedByDefault: Story = {
  args: {
    title: 'Initially Collapsed Dialog',
    description: 'This dialog starts in collapsed state. You can expand it by clicking the expand icon.',
    collapsible: true,
    defaultCollapsed: true,
    showCloseButton: true,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Apply', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const ExtraSmall: Story = {
  args: {
    title: 'Extra Small Dialog',
    description: 'This dialog uses the xs size.',
    size: 'xs',
    actions: [
      { label: 'Close', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const Small: Story = {
  args: {
    title: 'Small Dialog',
    description: 'This dialog uses the sm size (default).',
    size: 'sm',
    actions: [
      { label: 'Close', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const Medium: Story = {
  args: {
    title: 'Medium Dialog',
    description: 'This dialog uses the md size.',
    size: 'md',
    actions: [
      { label: 'Close', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const Large: Story = {
  args: {
    title: 'Large Dialog',
    description: 'This dialog uses the lg size.',
    size: 'lg',
    actions: [
      { label: 'Close', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const ExtraLarge: Story = {
  args: {
    title: 'Extra Large Dialog',
    description: 'This dialog uses the xl size.',
    size: 'xl',
    actions: [
      { label: 'Close', onClick: fn(), variant: 'contained' },
    ],
  },
};

export const ThreeActions: Story = {
  args: {
    title: 'Multiple Actions',
    description: 'This dialog demonstrates up to three action buttons.',
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Save Draft', onClick: fn(), variant: 'outlined' },
      { label: 'Publish', onClick: fn(), color: 'primary', variant: 'contained' },
    ],
  },
};

export const Alert: Story = {
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again later.',
    actions: [
      { label: 'Retry', onClick: fn(), color: 'error', variant: 'contained' },
    ],
  },
};

export const Confirmation: Story = {
  args: {
    title: 'Delete Item',
    description: 'Are you sure you want to permanently delete this item?',
    showCloseButton: true,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Delete', onClick: fn(), color: 'error', variant: 'contained' },
    ],
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Contact Form',
    description: 'Please fill out the form below and we\'ll get back to you.',
    size: 'md',
    showCloseButton: true,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Send Message', onClick: fn(), variant: 'contained' },
    ],
    children: React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } }, [
      React.createElement(TextField, {
        key: 'name',
        fullWidth: true,
        label: 'Full Name',
        variant: 'outlined',
        required: true,
      }),
      React.createElement(TextField, {
        key: 'email',
        fullWidth: true,
        label: 'Email Address',
        type: 'email',
        variant: 'outlined',
        required: true,
      }),
      React.createElement(TextField, {
        key: 'subject',
        fullWidth: true,
        label: 'Subject',
        variant: 'outlined',
      }),
      React.createElement(TextField, {
        key: 'message',
        fullWidth: true,
        label: 'Message',
        multiline: true,
        rows: 4,
        variant: 'outlined',
        required: true,
      }),
      React.createElement(FormControlLabel, {
        key: 'newsletter',
        control: React.createElement(Checkbox),
        label: 'Subscribe to our newsletter',
      }),
    ]),
  },
};
