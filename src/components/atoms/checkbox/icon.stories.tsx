import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CheckBox } from './checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Stack } from '@mui/material';

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

export const Icon: Story = {
    args: {
        color: 'primary',
        size: "medium",
    },
    render: (args) => (
        <Stack direction={"row"} spacing={2} alignItems="center">
            <CheckBox {...args} icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon />} />
            <CheckBox {...args} icon={<EmailOutlinedIcon />} checkedIcon={<EmailOutlinedIcon />} />
        </Stack>
    ),
};
