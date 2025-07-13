import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './table-cell';
import type { ComponentProps } from 'react';
import CheckBox from '../../checkbox/checkbox';

type StoryProps = ComponentProps<typeof TableCell> & {
    hasValue: boolean;
}

const meta = {
    title: 'ATOMS/TableControlElements/TableCell',
    component: TableCell,
    parameters: {
        controls: {
            exclude: ["children", "StackProps"]
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

export const Checkbox: Story = {
    args: {
        icon: 'none',
        hasValue: true,
    },
    render: (args) => {
        const { hasValue, ...rest } = args as StoryProps;
        return (
            <TableCell {...rest} sx={{ padding: 0, width: '150px' }} StackProps={{ sx: { justifyContent: 'center' } }}>
                {
                    hasValue ?
                        <CheckBox size="small" />
                        : undefined
                }
            </TableCell>
        );
    },
};
