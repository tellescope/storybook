import { Stack, Table as MuiTable, TableRow, MenuItem, TableContainer, TableFooter as MuiTableFooter, } from '@mui/material';
import TableTabsFiltersControls from "../../molecules/table-elements/table-tabs-filters-controls/table-tabs-filters-controls";
import AppbarSidebar from "../appbar-sidebar/appbar-sidebar";
import TableCellRow from "../../molecules/table-elements/table-cell-row/table-cell-row";
import TableHead from "../../atoms/table-control-elements/table-head/table-head";
import TableCell, { type TableCellProps } from "../../atoms/table-control-elements/table-cell/table-cell";
import CheckBox from "../../atoms/checkbox/checkbox";
import { useEffect, useRef, useState, type FC } from "react";
import Select from "../../atoms/select/select";
import TableFooter from '../../atoms/table-control-elements/table-footer/table-footer';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface TableProps {
    color?: "standard" | "transitional";
    expanded?: boolean;
}

const Table: FC<TableProps> = (props) => {
    return (
        <AppbarSidebar {...props}>
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


    return (
        <Stack>
            <TableContainer sx={{
                maxHeight: "calc(100vh - 64px - 48px - 36px - 16px - 16px - 32px)",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
            }}>
                <MuiTable stickyHeader aria-label="sticky table">
                    <TableRow>
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
                                <TableCell width={"20%"}>
                                    <CheckBox size="small" sx={{
                                        height: "24px",
                                        width: "24px",
                                    }} /> Chompy
                                </TableCell>
                                {
                                    Array.from({ length: 4 }).map((_, idx) => {
                                        if (idx === 2) {
                                            return <TableCellWithSelect key={idx} withIcon />;
                                        }
                                        return <TableCellWithSelect key={idx} />;
                                    })
                                }
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

const TableCellWithSelect = ({ withIcon }: { withIcon?: boolean }) => {
    const [value, setValue] = useState<string | string[]>([]);

    const props: Partial<TableCellProps> = {
        iconPosition: "left",
        icon: <CalendarMonthIcon />
    };

    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<string | number>("100%");
    // useEffect(() => {
    //     if (parentRef.current && childRef.current) {
    //         setWidth(parentRef.current.clientWidth);
    //         // childRef.current.style.width = `${parentRef.current.clientWidth}px !important`;
    //     }
    // }, []);

    useEffect(() => {
        const handleResize = () => {
            if (parentRef.current) {
                setWidth(parentRef.current.clientWidth);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <TableCell ref={parentRef} {...(withIcon ? props : {})} width={"20%"} >
            <Select
                multiple
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size="medium"
                sx={{
                    width: width,
                    "& .MuiInputBase-root ": {
                        width: "100% !important",
                    }
                }}
                ref={childRef}
                appearance="table"
                FormControlProps={{
                    sx: {
                        minWidth: "100% !important",
                    }
                }}
            >
                <MenuItem value="rice">Rice</MenuItem>
                <MenuItem value="nom">Nom</MenuItem>
                <MenuItem value="bobba">Bobba</MenuItem>
                <MenuItem value="chompy">Chompy</MenuItem>
                <MenuItem value="fungi">Fungi</MenuItem>
                <MenuItem value="bok">Bok</MenuItem>
                <MenuItem value="choy">Choy</MenuItem>
            </Select>
        </TableCell>
    );
};
