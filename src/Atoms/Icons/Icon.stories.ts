import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import HomeIcon from '@mui/icons-material/Home';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the icon',
      defaultValue: 'medium',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: HomeIcon,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    icon: HomeIcon,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    icon: HomeIcon,
    size: 'large',
  },
};

export const SVGIcon: Story = {
  args: {
    icon: '/src/assets/react.svg',
    size: 'medium',
  },
};

export const SVGIconLarge: Story = {
  args: {
    icon: '/src/assets/react.svg',
    size: 'large',
  },
};
