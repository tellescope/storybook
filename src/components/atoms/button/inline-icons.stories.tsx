import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Stack } from '@mui/material';

const meta = {
    title: 'ATOMS/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        controls: { hideNoControlsWarning: true, include: [] }, // disables all controls
        actions: { disable: true }, // disables all actions
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineIcons: Story = {
    args: {
        label: 'LABEL',
        color: "secondary",
        children: 'LABEL',
        appearence: 'contained',
        size: "medium",
        disabled: false,
    },
    render: (args) => {
        return (
            <Stack direction="row" gap={4}>
                <Button {...args} color="primary" endIcon={<ArrowForwardIosIcon sx={{ width: 16 }} />}>{args.children}</Button>
                <Button {...args} color="primary" appearence="text" startIcon={<ArrowBackIosNewIcon sx={{ width: 16 }} />}>{args.children}</Button>
                <Button {...args} color="secondary" startIcon={<FileCopyIcon sx={{ width: 24 }} />} endIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}>{args.children}</Button>
                <Button {...args} color="info" appearence="outlined" endIcon={<ArrowForwardIosIcon sx={{ width: 16 }} />}>{args.children}</Button>
            </Stack>
        );
    }
};

InlineIcons.name = 'Inline Icons';
