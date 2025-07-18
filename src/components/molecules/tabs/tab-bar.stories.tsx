import type { Meta, StoryObj } from '@storybook/react-vite';
import Tabs from './tab-bar';
import { Typography } from '@mui/material';
import CalendarViewMonthRoundedIcon from '@mui/icons-material/CalendarViewMonthRounded';

const meta = {
    title: 'MOLECULES/Tabs',
    component: Tabs,
    parameters: {
        controls: {
            include: [''],
        },
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabPanels = [
    {
        content: <Typography variant="body2">Content for Tab 1</Typography>
    },
    {
        content: <Typography variant="body2">Content for Tab 2</Typography>
    },
    {
        content: <Typography variant="body2">Content for Tab 3</Typography>
    }
];

const tabsTable = [
    {
        label: "All Contacts",
        icon: <CalendarViewMonthRoundedIcon />
    },
    {
        label: "Patients",
        icon: <CalendarViewMonthRoundedIcon />
    },
];

export const Topbar: Story = {
    args: {
        tabs: [],
        tabPanels: [],
    },
    render: () => {
        return (
            <Tabs
                tabs={tabsTable}
                tabPanels={tabPanels}
            />
        )
    }
}