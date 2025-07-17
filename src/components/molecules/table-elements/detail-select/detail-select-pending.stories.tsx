import type { Meta, StoryObj } from '@storybook/react-vite';
import DetailSelect from './detail-select-pending';
import { useState, type ComponentProps } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';


type StoryProps = ComponentProps<typeof DetailSelect> & {
    active: boolean;
}

const meta = {
    title: 'MOLECULES/Table Elements/Detail Select',
    component: DetailSelect,
    parameters: {
        controls: {
            include: ["active",],
        },
    },
    argTypes: {
        active: {
            control: { type: 'boolean' },
        },
    },
    args: {
        active: false,
    }
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

const availableFilterFields = [
    { label: "Name", value: "name", icon: <PersonOutlineOutlinedIcon /> },
    { label: "Care Team", value: "care team", icon: <GroupOutlinedIcon /> },
    { label: "Share Team", value: "share team", icon: <GroupOutlinedIcon /> },
    { label: "Journeys", value: "journeys", icon: <ShowChartIcon /> },
    { label: "Tags", value: "tags", icon: <TagIcon /> }
];



export const Pending: Story = {
    render: ({ active }) => {
        const [sort, setSort] = useState<string[]>(["last name"]);

        /*
            - This methods helps developer make the component more interactive.
            * onChangeFilter
        */

        return (
            <DetailSelect
                defaultOpen={active}
                sort={sort}
                setSort={setSort}
                availableFilterFields={availableFilterFields}
                // onChangeFilter={(field) => console.log("Filter changed", { field })}
                buttonContent={
                    <>
                        <AddIcon sx={{ fontSize: 18, }} />
                        <Typography sx={{ fontWeight: 500, ml: 0.5 }} variant="body2">Filter</Typography>
                    </>
                }
            />
        )
    }
};


