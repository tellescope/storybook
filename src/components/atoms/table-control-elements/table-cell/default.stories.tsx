import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './default';
import type { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof TableCell> & {
    hasValue: boolean;
}


const meta = {
    title: 'ATOMS/TableControlElements/TableCell',
    component: TableCell,
    parameters: {
        controls: {
            exclude: ["small", "children",],
        },
    },
    argTypes: {
        icon: {
            options: ["none", 'left', 'right'],
            control: { type: 'select' },
        },
        hasValue: {
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        icon: 'none',
        hasValue: true,
    },
    render: (args) => {
        const { hasValue, ...rest } = args as StoryProps;
        return (
            <TableCell {...rest}>{hasValue ? 'Has Value' : undefined}</TableCell>
        );
    },
};
