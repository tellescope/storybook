import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CheckBox } from './checkbox';
import { Stack, Typography } from '@mui/material';

const meta = {
    title: 'ATOMS/Checkbox',
    component: CheckBox,
    parameters: {
        controls: {
            exclude: ['onClick'],
        },
    },
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'info'],
            control: { type: 'select' },
        },
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },

    },
    args: { onClick: fn() },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mutliline: Story = {
    args: {
        color: 'primary',
        size: "medium",
        disabled: false,
    },
    render: (args) => (
        <Stack direction={"row"} spacing={2} alignItems="center" maxWidth={600}>
            <CheckBox {...args} />
            <Typography variant="body2" color="text.secondary">
                a longer label and will displayed at a smaller size in order to conserve
                valuable space.  This can be used to display some disclaimer about
                terms or conditions that might be a bit too long for a normal label area"
            </Typography>
        </Stack>
    ),
};
