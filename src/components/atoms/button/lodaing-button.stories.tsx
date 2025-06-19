import type { Meta, StoryObj } from '@storybook/react-vite';


import { LoadingButton as Button } from './loading-button';
import { fn } from 'storybook/internal/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'ATOMS/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // More on the `color` argTypes: https://storybook.js.org/docs/api/argtypes#argtype-color
        appearence: {
            control: { type: 'select' },
            options: ['contained', 'outlined', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
        },
        loadingPosition: {
            control: { type: 'select' },
            options: ['start', 'end', 'center'],
        },
        loadingIndicator: {
            control: { type: 'text' },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LoadingButton: Story = {
    args: {
        children: 'Click Me',
        appearence: 'contained',
        size: "medium",
        loading: true,
        loadingPosition: "start",
        loadingIndicator: "loading...",
    },
};
