import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Radio } from './radio';

const meta = {
    title: 'ATOMS/Radio',
    component: Radio,
    parameters: {
        controls: {
            exclude: ['onClick', 'disabled', 'color', 'checked'],
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },
        checked: {
            control: { type: 'boolean' },
        }
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Disabled: Story = {
    args: {
        color: "default",
        size: "medium",
        disabled: true,
    },
};