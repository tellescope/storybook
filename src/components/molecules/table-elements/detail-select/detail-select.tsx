import React from 'react';
import {
    Box,
    Typography,
    MenuItem, Paper,
    Menu
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '../../../atoms/button/button';
import TinySelect from '../../../atoms/table-control-elements/tiny-select/tiny-select';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export default function DetailSelect() {
    const [sortField, setSortField] = React.useState<string>('value');
    const [sortOrder, setSortOrder] = React.useState<string>('asc');

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSetSSortField = (field: string) => {
        setSortField(field);
    }
    const handleSetSortOrder = (order: string) => {
        setSortOrder(order);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 240, gap: 1 }}>
            {/* Top Badge */}
            <Button
                sx={{
                    backgroundColor: '#E3F2FD',
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 1.5,
                    py: 0.5,
                    width: 'fit-content',
                }}
                onClick={handleClick}
            >
                <ArrowUpwardIcon sx={{ fontSize: 18, color: '#0288D1' }} />
                <Typography sx={{ color: '#0288D1', fontWeight: 500, ml: 0.5, textTransform: 'capitalize' }}>
                    {/* {sortField.charAt(0).toUpperCase() + sortField.slice(1)} */}
                    Value
                </Typography>
                <ArrowDropDownIcon sx={{ color: '#0288D1', ml: 0.5 }} />
            </Button>

            {/* Dropdown Box */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Paper elevation={1} sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1, width: 220 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <TinySelect
                            value={sortField}
                            sx={{
                                "&::before": {
                                    borderBottom: "none"
                                }
                            }}
                            size="small"
                            onChange={handleSetSSortField}
                        >
                            <MenuItem value="name" sx={{ justifyContent: "flex-start" }}><PersonOutlineOutlinedIcon /> Name</MenuItem>
                            <MenuItem value="Care Team" sx={{ justifyContent: "flex-start" }}><GroupOutlinedIcon /> Care Team</MenuItem>
                            <MenuItem value="Share Team" sx={{ justifyContent: "flex-start" }}><GroupOutlinedIcon /> Share Team</MenuItem>
                            <MenuItem value="Journeys" sx={{ justifyContent: "flex-start" }}><ShowChartIcon /> Journeys</MenuItem>
                            <MenuItem value="# Tags" sx={{ justifyContent: "flex-start" }}> # Tags</MenuItem>
                        </TinySelect>
                        <TinySelect
                            value={sortOrder}
                            size="small"
                            sx={{
                                "&::before": {
                                    borderBottom: "none"
                                }
                            }}
                            onChange={handleSetSortOrder}
                        >
                            <MenuItem value="asc">Ascending</MenuItem>
                            <MenuItem value="desc">Descending</MenuItem>
                        </TinySelect>
                    </Box>

                    {/* Disabled Actions */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            color: 'text.disabled',
                            pl: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AddIcon fontSize="small" />
                            <Typography variant="body2">Add sort</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <DeleteIcon fontSize="small" />
                            <Typography variant="body2">Delete sort</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Menu>
        </Box>
    );
}
