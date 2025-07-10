import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './default';
import { useState, type ComponentProps } from 'react';
import Selectbase from "../../select/select";

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

export const Select: Story = {
    args: {
        icon: 'none',
        hasValue: true,
    },
    render: (args) => {
        const [value, setValue] = useState<string | string[]>([]);
        const { hasValue, ...rest } = args as StoryProps;


        return (
            <TableCell  {...rest} sx={{ minWidth: "300px" }} StackProps={{ maxWidth: 200 }}>
                <Selectbase
                    options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
                    multiple={true}
                    appearance="table"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    size="medium"
                />
            </TableCell>
        );
    },
};
