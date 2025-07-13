import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './table-cell';
import { useEffect, useState, type ComponentProps } from 'react';
import SelectBase from "../../select/select";
import { MenuItem } from '@mui/material';

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

export const Select: Story = {
    args: {
        icon: 'none',
        hasValue: true,
    },
    render: (args) => {
        const { hasValue, ...rest } = args as StoryProps;
        const [value, setValue] = useState<string | string[]>([]);

        useEffect(() => {
            setValue(hasValue ? ['Organization'] : []);
        }, [hasValue]);

        return (
            <TableCell  {...rest}>
                <SelectBase
                    multiple={true}
                    appearance="table"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    size="medium"
                    sx={{
                        width: "300px",
                    }}
                >
                    <MenuItem value="Organization" key="Organization">Organization</MenuItem>
                    <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>
                    <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>
                    <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>
                    <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>
                    <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>
                </SelectBase>
            </TableCell>
        );
    },
};
