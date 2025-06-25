import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Radio } from './radio';

const meta = {
    title: 'ATOMS/Radio',
    component: Radio,
    parameters: {
        controls: {
            exclude: ['onClick', "disabled", "color"],
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLabelWithInfotip: Story = {
    args: {
        size: "medium",
    },
};