import type { Meta, StoryObj } from '@storybook/react-vite';
import DetailSelect from './detail-select';
import { type ComponentProps } from 'react';


type StoryProps = ComponentProps<typeof DetailSelect> & {
    hasValue: boolean;
    active: boolean;
}

const meta = {
    title: 'MOLECULES/Table Elements/Detail Select',
    component: DetailSelect,
    parameters: {
        controls: {
            exclude: ["children", "StackProps"]
        },
    },
    argTypes: {
        hasValue: {
            control: { type: 'boolean' },
        },
        active: {
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Text: Story = {
    args: {
        active: false,
        hasValue: false,
    },
};
