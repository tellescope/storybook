import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import type { SelectProps as MuiSelectProps } from '@mui/material/Select';


declare module '@mui/material/Select' {
    interface SelectPropsVariantOverrides {
        table: true;
    }
}

export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
    appearance?: "standard" | "filled" | "outlined";
}

const Select = ({ appearance = "standard", ...rest }: SelectProps) => {
    return (
        <FormControl fullWidth variant={appearance}>
            <InputLabel id="demo-simple-select-label">Label</InputLabel>
            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                variant={appearance}
                {...rest}
            >
                <MenuItem disableRipple value={10}>Option 1</MenuItem>
                <MenuItem disableRipple value={20}>Option 2</MenuItem>
                <MenuItem disableRipple value={30}>Option 3</MenuItem>
            </MuiSelect>
        </FormControl>
    );
}

export default Select;