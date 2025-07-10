import type { Meta, StoryObj } from '@storybook/react-vite';
import TableHead from './table-head';

const meta = {
    title: 'ATOMS/TableControlElements/TableHead',
    component: TableHead,
    parameters: {
        controls: {
            exclude: ["small"],
        },
    },
    argTypes: {
        icon: {
            options: ["none", 'left', 'right'],
            control: { type: 'select' },
        },
        checkbox: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof TableHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'none',
        checkbox: false,
    },
};

