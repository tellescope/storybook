import { InputBase, Stack } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '../button/icon-button';


type BaseProps = {
    size?: 'medium' | 'small';
    onClick?: () => void;
    disabled?: boolean;
};


type RegularTextFieldProps = BaseProps & {
    appearance?: 'filled' | 'outlined' | 'standard';
} & Omit<MuiTextFieldProps, 'color' | 'placeholder'>;

export type InputProps = DistinctProps | RegularTextFieldProps;

export const AppbarSearch = (props: InputProps) => {

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
