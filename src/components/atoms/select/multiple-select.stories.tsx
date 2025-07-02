import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './select';
import { useState } from 'react';

const meta = {
    title: 'ATOMS/FormInputs/Select',
    component: Select,
    parameters: {
        controls: {
            exclude: ["optionStyle", "disabled", "error", "helperText", "value", "onChange", "size", "multiple", "options", "label", "appearance"],
        }
    },
    argTypes: {
        appearance: {
            control: 'select',
            options: ['standard', 'filled', 'outlined', 'table'],
        },
        multiple: { control: 'boolean' },
    },
    decorators: [
        (Story) => (
            <div style={{ width: 250 }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleSelect: Story = {
    args: {
        label: 'Label',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
        appearance: "standard",
        multiple: true,
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