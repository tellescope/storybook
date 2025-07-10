import { Stack, TableCell } from "@mui/material";
import CheckBox from "../../checkbox/checkbox";
import StarIcon from '@mui/icons-material/Star';
import type { FC } from "react";

interface TableHeadProps {
    icon?: 'none' | 'left' | 'right';
    checkbox?: boolean;
    small?: boolean
}

const TableHead: FC<TableHeadProps> = ({ icon, checkbox, small }) => {
    return (
        <TableCell align="right" sx={{ fontWeight: 'bold', padding: "8px 16px", border: 0 }} variant="head">
            <Stack sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
            }}>
                {
                    checkbox &&
                    <CheckBox
                        color="primary"
                        size={small ? "small" : "medium"}
                    />
                }

                <Stack sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                }}>
                    {
                        icon === "left" &&
                        <StarIcon sx={{ width: 20, color: "rgba(0, 0, 0, 0.56)" }} />
                    }
                    Head
                    {
                        icon === "right" &&
                        <StarIcon sx={{ width: 20, color: "rgba(0, 0, 0, 0.56)" }} />
                    }
                </Stack>
            </Stack>
        </TableCell>
    )
}

export default TableHead
