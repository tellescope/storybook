import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './select';
import { useState } from 'react';

const meta = {
    title: 'ATOMS/FormInputs/Select',
    component: Select,
    argTypes: {
        variant: {
            control: 'select',
            options: ['standard', 'filled', 'outlined', 'patientForm', 'table'],
        },
        multiple: { control: 'boolean' },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
    args: {
        label: 'Label',
        options: ['Menu Item 1', 'Menu Item 2', 'Menu Item 3'],
        variant: 'standard',
        multiple: false,
        value: '',
        onChange: () => { },
        size: 'medium',
    },
    render: (args) => {
        const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');

        return (
            <Select
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }
};