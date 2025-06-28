import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import StarIcon from '@mui/icons-material/Star';
import type { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Input> & {
    CustomIcon?: 'start' | 'end';
};

const meta: Meta<StoryProps> = {
    title: 'ATOMS/FormInputs/Input',
    component: Input,
    argTypes: {
        appearance: {
            options: ['standard', 'filled', 'outlined', "distinct"],
            control: { type: 'select' },
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'small'],
        },
        CustomIcon: {
            options: ['start', 'end'],
            control: { type: 'select' },
        },
    },
    args: {
        CustomIcon: 'start',
    }
}

export default meta;
type Story = StoryObj<StoryProps>;

export const CustomIcon: Story = {
    args: {
        appearance: "standard",
        size: "medium",
    },
    render: ({ CustomIcon, ...args }: StoryProps) => {
        return (
            <Input
                appearance={args.appearance}
                size={args.size}
                disabled={false}
                label="Label"
                error={false}
                startIcon={CustomIcon === "start" ? <StarIcon /> : undefined}
                endIcon={CustomIcon === "end" ? <StarIcon /> : undefined}
            />
        )
    },
};
