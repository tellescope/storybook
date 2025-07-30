import { Stack, Table as MuiTable, TableRow, MenuItem, TableContainer, TableFooter as MuiTableFooter, } from '@mui/material';
import TableTabsFiltersControls from "../../molecules/table-elements/table-tabs-filters-controls/table-tabs-filters-controls";
import AppbarSidebar from "../appbar-sidebar/appbar-sidebar";
import TableCellRow from "../../molecules/table-elements/table-cell-row/table-cell-row";
import TableHead from "../../atoms/table-control-elements/table-head/table-head";
import TableCell from "../../atoms/table-control-elements/table-cell/table-cell";
import CheckBox from "../../atoms/checkbox/checkbox";
import { useEffect, useRef, useState } from "react";
import Select from "../../atoms/select/select";
import TableFooter from '../../atoms/table-control-elements/table-footer/table-footer';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Table = () => {
    return (
        <AppbarSidebar>
            <TableTabsFiltersControls
                tabPanels={[
                    {
                        content: <div>Contacts Content</div>
                    },
                    {
                        content: <TableContent />
                    }
                ]}
            />
        </AppbarSidebar>
    )
}

export default Table



export const TableContent = () => {
    const [value, setValue] = useState<string | string[]>([]);
    const ParentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ParentRef.current && childRef.current) {
            childRef.current.style.width = `${ParentRef.current.clientWidth}px !important`;
        }
    }, [ParentRef]);

    console.log('====================================');
    console.log(ParentRef.current, childRef.current);
    console.log('====================================');
    return (
        <Stack sx={{
            // p: 2
        }}>
            <TableContainer sx={{
                maxHeight: "calc(100vh - 64px - 48px - 36px - 16px - 16px - 32px)",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
            }}>
                <MuiTable stickyHeader aria-label="sticky table">
                    <TableRow >
                        <TableHead checkbox small sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}>Name</TableHead>
                        <TableHead sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}>Care Team</TableHead>
                        <TableHead sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}>Share with</TableHead>
                        <TableHead sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}>Journeys</TableHead>
                        <TableHead sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        }}>Tags</TableHead>
                    </TableRow>
                    {
                        Array.from({ length: 20 }).map((_, index) => (
                            <TableCellRow key={index}>
                                <TableCell width={"25%"}>
                                    <CheckBox size="small" sx={{
                                        height: "24px",
                                        width: "24px",
                                    }} /> Chompy
                                </TableCell>
                                <TableCell width={"25%"} ref={ParentRef}>
                                    <Select
                                        multiple={true}
                                        appearance="table"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        size="medium"
                                        FormControlProps={{
                                            ref: childRef
                                        }}
                                    >
                                        <MenuItem value="Organization" key="Organization">Organization</MenuItem>
                                        <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>
                                        <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>
                                        <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>
                                        <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>
                                        <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell width={"25%"}>
                                    <Select
                                        multiple={true}
                                        appearance="table"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        size="medium"
                                        sx={{
                                            width: "100%",
                                        }}
                                    >
                                        <MenuItem value="Organization" key="Organization">Organization</MenuItem>
                                        <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>
                                        <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>
                                        <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>
                                        <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>
                                        <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell width={"25%"} iconPosition="left" icon={<CalendarMonthIcon />}>
                                    <Select
                                        multiple={true}
                                        appearance="table"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        size="medium"
                                        sx={{
                                            width: "100%",
                                        }}
                                    >
                                        <MenuItem value="Organization" key="Organization">Organization</MenuItem>
                                        <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>
                                        <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>
                                        <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>
                                        <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>
                                        <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell width={"25%"}>
                                    <Select
                                        multiple={true}
                                        appearance="table"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        size="medium"
                                        sx={{
                                            width: "100%",
                                        }}
                                    >
                                        <MenuItem value="Organization" key="Organization">Organization</MenuItem>
                                        <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>
                                        <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>
                                        <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>
                                        <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>
                                        <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>
                                    </Select>
                                </TableCell>
                            </TableCellRow>
                        ))
                    }
                    <MuiTableFooter
                        sx={{
                            position: "sticky",
                            bottom: 0,
                            backgroundColor: "#fff",
                            zIndex: 10,
                            borderTop: "1px solid rgba(0,0,0,0.12)"
                        }}
                    >
                        <TableRow>
                            <TableFooter>
                                100
                            </TableFooter>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{
                                justifyContent: "center",
                                display: "flex",
                                border: 0,
                                paddingY: "0 !important",
                                borderRadius: "4px",
                                backgroundColor: "#EEEDF4",
                                "& .MuiTypography-root": {
                                    color: "#00000099"
                                }
                            }}>
                                <AddIcon />
                            </TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </MuiTableFooter>
                </MuiTable>
            </TableContainer>

        </Stack>
    )
}

