import type { Meta, StoryObj } from '@storybook/react-vite';
import Tabs from './standard';


const meta = {
    title: 'MOLECULES/Tabs',
    component: Tabs,
    parameters: {
        controls: {
            include: ['current', 'archived', 'unread', 'pinned'],
        },
    },
    argTypes: {
        current: {
            control: { type: 'boolean' },
        },
        archived: {
            control: { type: 'boolean' },
        },
        unread: {
            control: { type: 'boolean' },
        },
        pinned: {
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {}
} 