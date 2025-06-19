import type { Meta, StoryObj } from '@storybook/react';
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
      options: ['default', 'primary', 'secondary', 'tertiary'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    onDelete: {
      action: 'deleted',
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof CustomChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper decorator for centering
const CenterDecorator = (Story: any) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Story />
  </Box>
);

// Default Chip Stories
export const Default: Story = {
  args: {
    label: 'Default Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    chipVariant: 'primary',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    chipVariant: 'secondary',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Chip',
    chipVariant: 'tertiary',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

// Outlined Variants
export const OutlinedDefault: Story = {
  args: {
    label: 'Outlined Default',
    chipVariant: 'default',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const OutlinedPrimary: Story = {
  args: {
    label: 'Outlined Primary',
    chipVariant: 'primary',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const OutlinedSecondary: Story = {
  args: {
    label: 'Outlined Secondary',
    chipVariant: 'secondary',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const OutlinedTertiary: Story = {
  args: {
    label: 'Outlined Tertiary',
    chipVariant: 'tertiary',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

// Size Variants
export const Small: Story = {
  args: {
    label: 'Small Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'small',
  },
  decorators: [CenterDecorator],
};

export const Medium: Story = {
  args: {
    label: 'Medium Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

// Deletable Chips
export const DeletableDefault: Story = {
  args: {
    label: 'Deletable Default',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
    onDelete: () => {},
  },
  decorators: [CenterDecorator],
};

export const DeletablePrimary: Story = {
  args: {
    label: 'Deletable Primary',
    chipVariant: 'primary',
    variant: 'filled',
    size: 'medium',
    onDelete: () => {},
  },
  decorators: [CenterDecorator],
};

export const DeletableOutlined: Story = {
  args: {
    label: 'Deletable Outlined',
    chipVariant: 'default',
    variant: 'outlined',
    size: 'medium',
    onDelete: () => {},
  },
  decorators: [CenterDecorator],
};

// Selectable Chips
export const Selectable: Story = {
  args: {
    label: 'Selectable Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
    onClick: () => {},
  },
  decorators: [CenterDecorator],
};

// Avatar Chips
export const AvatarChip: Story = {
  args: {
    avatar: <Avatar><PersonIcon /></Avatar>,
    label: 'Avatar Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const AvatarChipOutlined: Story = {
  args: {
    avatar: <Avatar><PersonIcon /></Avatar>,
    label: 'Avatar Outlined',
    chipVariant: 'default',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

// Icon Chips
export const IconChip: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Icon Chip',
    chipVariant: 'default',
    variant: 'filled',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};

export const IconChipOutlined: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Icon Outlined',
    chipVariant: 'default',
    variant: 'outlined',
    size: 'medium',
  },
  decorators: [CenterDecorator],
};
