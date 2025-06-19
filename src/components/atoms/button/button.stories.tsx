import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';

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
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit', "inheritWhite"],
            control: { type: 'select' },
        },
    },
    decorators: [
        (Story, context) => {
            // Apply dark background only for inheritWhite buttons
            const cond = context.args.color === 'inheritWhite' && context.args.appearence !== "contained"
            return (
                cond ?
                    <div style={{
                        padding: "12px 20px",
                        borderRadius: 10,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: 'flex',
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: 'center',
                    }}>
                        <small style={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontSize: '12px',
                            textAlign: 'center',
                            maxWidth: '300px',
                        }}>
                            ⚪ This layer simulates a white background<br />
                            to help you visualize how the button color appears.
                        </small>
                        <div>
                            <Story />
                        </div>
                    </div> : <Story />
            );
        }
    ],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        color: 'primary',
        children: 'LABEL',
        appearence: 'contained',
        size: "medium",
        disabled: false,
    },
};
