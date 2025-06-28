import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Stack, Typography } from '@mui/material';
import Select from '../select/select';

const meta = {
    title: 'ATOMS/FormInputs/Radio',
    component: Radio,
    parameters: {
        controls: {
            exclude: ["color"],
        },
    },
    argTypes: {
        color: { table: { disable: true } }, // This disables the control properly
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },
    },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormGroupSecondaryInput: Story = {
    args: {
        size: "medium",
    },
    render: (args) => {
        return (
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 6, }} >
                <Typography variant="body1" sx={{ fontWeight: 600, color: "text.primary" }}>
                    Form group
                </Typography>
                <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                    <FormControl sx={{ width: 300 }}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Label</FormLabel>
                        <FormControlLabel
                            value="End"
                            control={<Radio
                                size={args.size}
                            />}
                            label="Label"
                        />
                        <FormHelperText sx={{ ml: 0 }}>Helper Text</FormHelperText>
                    </FormControl>
                    <Select
                        label="Label"
                        options={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']}
                        variant="standard"
                        multiple={false}
                        value={''}
                        onChange={() => { }}
                        size="medium"
                    />
                </Stack>
            </Stack>
        );
    }
};