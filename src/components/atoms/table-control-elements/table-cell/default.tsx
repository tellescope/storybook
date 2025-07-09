import { Stack, TableCell as MuiTableCell, type TableCellProps as MuiTableCellProps } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import type { ComponentProps, FC } from "react";

export interface TableCellProps extends Omit<MuiTableCellProps, 'children'> {
    icon?: 'none' | 'left' | 'right';
    children?: React.ReactNode;
    StackProps?: ComponentProps<typeof Stack>
}

const TableCell: FC<TableCellProps> = ({ icon, children, StackProps, sx, ...rest }) => {
    const { sx: stackSx, ...stackRest } = StackProps || {};

    return (
        <MuiTableCell align="right" sx={{ padding: "8px 16px", border: 0, ...sx }} {...rest}>
            <Stack sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                ...stackSx
            }} {...stackRest}>
                <Stack sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                }} >
                    {
                        icon === "left" &&
                        <StarIcon sx={{ width: 20, color: "rgba(0, 0, 0, 0.56)" }} />
                    }
                    {children}
                    {
                        icon === "right" &&
                        <StarIcon sx={{ width: 20, color: "rgba(0, 0, 0, 0.56)" }} />
                    }
                </Stack>
            </Stack>
        </MuiTableCell>
    )
}

export default TableCell
