import { InputBase, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '../button/icon-button';




export const AppbarSearch = () => {

    return (
        <Stack
            component="form"
            direction={"row"}
            gap={1}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: "100%",
                background: "#fff",
                borderRadius: 999
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Label"
                inputProps={{ 'aria-label': 'Label' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color="secondary">
                <SearchIcon />
            </IconButton>
        </Stack>
    )
};
