import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Comp from './select';

const meta = {
    title: 'ATOMS/Select',
    component: Comp,
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
} satisfies Meta<typeof Comp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "medium",
    },
};