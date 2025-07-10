import type { Meta, StoryObj } from '@storybook/react-vite';
import Switch from './switch';

const meta = {
    title: 'ATOMS/Switch/Switch',
    component: Switch,
    parameters: {
        controls: {
            exclude: ['label', 'formlabelProps', 'formControlProps', 'checked', 'disabled'],
        },
    },
    argTypes: {
        color: {
            options: ["default", 'primary', 'secondary', 'info'],
            control: { type: 'select' },
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'small'],
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'primary',
        size: "medium",
    },
};


export const LabelLeft: Story = {
    args: {
        color: 'primary',
        size: "medium",
        label: "Start",
        formlabelProps: {
            labelPlacement: "start"
        }
    },
};


export const LabelRight: Story = {
    args: {
        color: 'primary',
        size: "medium",
        label: "End",
        formlabelProps: {
            labelPlacement: "end"
        }
    },
};


export const Disabled: Story = {
    args: {
        color: 'primary',
        size: "medium",
        disabled: true
    },
};


export const DisabledChecked: Story = {
    args: {
        color: 'primary',
        size: "medium",
        disabled: true,
        checked: true
    },
};