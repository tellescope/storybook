import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { IconButton as Comp } from './icon-button';
import StarIcon from '@mui/icons-material/Star';



const meta = {
    title: 'ATOMS/Button',
    component: Comp,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit', "inheritWhite"],
            control: { type: 'select' },
        },
    },
    decorators: [
        (Story, context) => {
            // Apply dark background only for inheritWhite buttons
            const cond = context.args.color === 'inheritWhite'
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
    args: { onClick: fn() },
} satisfies Meta<typeof Comp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButton: Story = {
    args: {
        color: 'primary',
        children: <StarIcon />,
        size: "medium",
        disabled: false,
    },
};
