import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './default';
import type { ComponentProps } from 'react';
import { Typography } from '@mui/material';

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

export const Text: Story = {
    args: {
        icon: 'none',
        hasValue: true,
    },
    render: (args) => {
        const { hasValue, ...rest } = args as StoryProps;
        return (
            <TableCell {...rest} >
                {
                    hasValue ?
                        <Typography variant="body2">Chompy</Typography>
                        : undefined
                }
            </TableCell>
        );
    },
};
