import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from './input';

const meta = {
    title: 'ATOMS/Input',
    component: Input,
    parameters: {
        controls: {
            exclude: ['onClick'],
        },
    },
    argTypes: {
        appearance: {
            options: ['standard', 'filled', 'outlined', "distinct"],
            control: { type: 'select' },
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'small'],
        },

    },
    args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
    args: {
        appearance: 'standard',
        size: "medium",
        error: true,
    },
};
