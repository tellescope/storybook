import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CustomChip } from '../Atoms/feedback/Chip/Chip';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const meta = {
  title: 'Components/Chip',
  component: CustomChip,
  tags: ['autodocs'],
  argTypes: {
    chipVariant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'error', 'warning', 'info', 'success'],
    },
    chipState: {
      control: 'select',
      options: ['enabled', 'hovered', 'focused', 'disabled', 'pressed'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    label: { control: 'text' },
    avatar: { control: false },
    icon: { control: false },
    onDelete: { action: 'deleted' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story: any) => (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CustomChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Chip
export const Default: Story = {
  args: {
    label: 'Default Chip',
    chipVariant: 'default',
    chipState: 'enabled',
    variant: 'filled',
    size: 'medium',
  },
};

// Deletable Chip (stateful)
export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    chipVariant: 'default',
    chipState: 'enabled',
    variant: 'filled',
    size: 'medium',
  },
  render: (args) => {
    const [visible, setVisible] = useState(true);
    if (!visible) return <></>;
    return (
      <CustomChip
        {...args}
        onDelete={() => setVisible(false)}
      />
    );
  },
};

// Selectable Chip (stateful)
export const Selectable: Story = {
  args: {
    label: 'Selectable Chip',
    chipVariant: 'default',
    chipState: 'enabled',
    variant: 'filled',
    size: 'medium',
  },
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <CustomChip
        {...args}
        chipState={selected ? 'pressed' : args.chipState}
        onClick={() => setSelected((prev) => !prev)}
        variant={args.variant}
      />
    );
  },
};

// Avatar Chip
export const AvatarChip: Story = {
  args: {
    avatar: <Avatar><PersonIcon /></Avatar>,
    label: 'Avatar Chip',
    chipVariant: 'default',
    chipState: 'enabled',
    variant: 'filled',
    size: 'medium',
  },
};

// Icon Chip
export const Icon: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Icon Chip',
    chipVariant: 'default',
    chipState: 'enabled',
    variant: 'filled',
    size: 'medium',
  },
};
