import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { useState, type ChangeEvent } from 'react';

const meta = {
    title: 'ATOMS/Input',
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

    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        appearance: 'standard',
        size: "medium",
    },
    render: (args) => {
        const [value, setValue] = useState('');
        const [error, setError] = useState(false);
        const [helperText, setHelperText] = useState('');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            setValue(val);

            if (!/^[a-zA-Z\s]*$/.test(val)) {
                setError(true);
                setHelperText('Only alphabetic text is allowed');
            } else {
                setError(false);
                setHelperText('');
            }
        };
        return (
            <Input
                {...args}
                value={value}
                onChange={handleChange}
                error={error}
                helperText={helperText}
            />
        )
    },
};
