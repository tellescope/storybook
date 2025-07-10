import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './select';
import { useState } from 'react';

const meta = {
    title: 'ATOMS/FormInputs/Select',
    component: Select,
    parameters: {
        controls: {
            include: ["appearance"],
        }
    },
    argTypes: {
        appearance: {
            control: 'select',
            options: ['standard', 'filled', 'outlined', 'table', "patientForm"],
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

export const SingleSelect: Story = {
    args: {
        label: "Label",
        value: "",
        onChange: () => { },
        options: ['Synt to health', 'Content capsqd', 'Chip 3', 'Chip 4'],
        appearance: 'standard',
        multiple: false,
        size: "medium"
    },
    render: (args) => {
        const [value, setValue] = useState<string | string[]>(args.multiple || args.appearance === "table" ? [] : '');
        return (
            <Select
                {...args}
                multiple={args.multiple || args.appearance === "table"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }
};