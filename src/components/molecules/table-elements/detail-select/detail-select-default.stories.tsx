import type { Meta, StoryObj } from '@storybook/react-vite';
import DetailSelect from './detail-select-default';
import { useEffect, useState, type ComponentProps } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TagIcon from '@mui/icons-material/Tag';


type StoryProps = ComponentProps<typeof DetailSelect> & {
    hasValue: boolean;
    active: boolean;
}

const meta = {
    title: 'MOLECULES/Table Elements/Detail Select',
    component: DetailSelect,
    parameters: {
        controls: {
            include: ["appearance", "active", "hasValue"],
        },
    },
    argTypes: {
        hasValue: {
            control: { type: 'boolean' },
        },
        active: {
            control: { type: 'boolean' },
        },
        appearance: {
            control: { type: 'select', options: ['sort', 'filter'] },
        },
    },
    args: {
        appearance: 'sort',
        hasValue: false,
        active: false,
    }
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

const availableSortFields = [
    { label: "Name", value: "name", icon: <PersonOutlineOutlinedIcon /> },
    { label: "Care Team", value: "care team", icon: <GroupOutlinedIcon /> },
    { label: "Share Team", value: "share team", icon: <GroupOutlinedIcon /> },
    { label: "Journeys", value: "journeys", icon: <ShowChartIcon /> },
    { label: "Tags", value: "tags", icon: <TagIcon /> }
];

const filterOptions = [
    { label: "is", value: "is", },
    { label: "is not", value: "is not", },
    { label: "contains", value: "contains", },
    { label: "does not contain", value: "does not contain", },
    { label: "starts with", value: "starts with", },
    { label: "ends with", value: "ends with", },
    { label: "is empty", value: "is empty", },
    { label: "is not empty", value: "is not empty", },
];


export const Default: Story = {
    render: ({ appearance, active, hasValue }) => {
        const [filter, setFilter] = useState<{ value: string; filterOption: string } | null>(null);
        const [sort, setSort] = useState<{ field: string, order: string }[]>([{ field: 'name', order: 'ascending' }]);

        useEffect(() => {
            if (appearance === "filter") {
                if (hasValue) {
                    setFilter({ value: 'example', filterOption: 'contains' });
                } else {
                    setFilter(null);
                }
            } else {
                if (hasValue) {
                    setSort([{ field: 'name', order: 'ascending' }]);
                } else {
                    setSort([]);
                }
            }
        }, [appearance, hasValue]);

        /* 
            - This methods helps developer make the component more interactive.
                - Appearance "Sort"
                    * onAddSort
                    * onDeleteSort
                    * onChangeSort
                    * onChangeSortOrder
                - Appearance "Filter"
                    * OnSetFilterOption
                    * OnSetFilterValue
                    * OnClearFilter
        */

        return (
            <DetailSelect
                defaultOpen={active}
                appearance={appearance}
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
                availableSortFields={availableSortFields}
                filterOptions={filterOptions}

            // onChangeSort={(field, order) => console.log("Sort changed", { field, order })}
            // onChangeSortOrder={(field, order) => console.log("Sort order changed", { field, order })}
            // onAddSort={(field) => console.log("Sort added", field)}
            // onDeleteSort={() => console.log("All Sortdeleted")}

            // OnSetFilterOption={(option) => console.log("Filter option set", option)}
            // OnSetFilterValue={(value) => console.log("Filter value set", value)}
            // OnClearFilter={() => console.log("Filter cleared")}
            />
        )
    }
};




/*
    Detail Select props needs to refactor to support the following:
    - appearance: 'sort'
    - sort: { field: string, order: 'ascending' | 'descending' }[]
    - setSort: React.Dispatch<React.SetStateAction<{ field: string, order: 'ascending' | 'descending' }[]>>
    - availableSortFields: { label: string, value: string, icon: JSX.Element }[]
    - onChangeSort?: (field: string, order: 'ascending' | 'descending') => void
    - onChangeSortOrder?: (field: string, order: 'ascending' | 'descending') => void
    - onAddSort?: (field: string) => void
    - onDeleteSort?: () => void
    Or
    - appearance: 'filter'
    - filter: { value: string, filterOption: string } | null
    - setFilter: React.Dispatch<React.SetStateAction<{ value: string, filterOption: string } | null>>
    - filterOptions: { label: string, value: string }[]
    - defaultOpen?: boolean
    - onChangeFilter?: (field: string) => void

    => depnding on the appearance
*/