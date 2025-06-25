import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dialog } from './Dialog';

const meta = {
  title: 'MOLECULES/Dialog',
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
      name: 'with close',
    },
    actions: {
      control: 'object',
      description: 'Array of action buttons',
    },
    enableScrim: {
      control: 'boolean',
      description: 'Whether to show the background scrim/backdrop',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the dialog can be collapsed/expanded',
    },
  },
  args: {
    open: false,
    onClose: fn(),
    title: 'Dialog Title',
    description: 'This is a dialog with configurable options.',
    size: 'sm',
    showCloseButton: false,
    collapsible: false,
    actions: [
      { label: 'Cancel', onClick: fn(), variant: 'text' },
      { label: 'Confirm', onClick: fn(), variant: 'contained' },
    ],
  },
} satisfies Meta<typeof Dialog>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Dialog',
    description: 'This is a default dialog with configurable size, actions, close button, and scrim options.',
  },
};

export const Collapsed: Story = {
  args: {
    title: 'Collapsed Dialog',
    description: 'This dialog starts in collapsed state and can be expanded.',
    collapsible: true,
    enableScrim: true,
  },
};
