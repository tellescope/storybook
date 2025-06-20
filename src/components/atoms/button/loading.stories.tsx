import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { LoadingButton } from './loading-button';

const meta = {
    title: 'ATOMS/Button',
    component: LoadingButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
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
    args: { onClick: fn() },

} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Loading: Story = {
    args: {
        children: 'Click Me',
        appearence: 'contained',
        size: 'medium',
        loading: true,
        loadingPosition: 'start',
        loadingIndicator: 'loading...',
    },
};
