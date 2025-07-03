import type { Meta, StoryObj } from '@storybook/react';
import { FormBuilder } from './FormBuilder';

const meta: Meta<typeof FormBuilder> = {
  title: 'Molecules/FormBuilder',
  component: FormBuilder,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form builder component for creating dynamic forms. The checkcirlce icon color changes based on the selected state - green when selected, grey when unselected.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Whether the component is in selected state (affects checkcirlce icon color)',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // selected: false,
  },
};