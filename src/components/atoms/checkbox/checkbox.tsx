import { Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export interface ButtonProps extends Omit<MuiCheckboxProps, 'color' | 'variant' | 'size'> {
    color?: "primary" | "secondary" | "info";
    size?: "large" | "medium" | "small";
    onClick?: () => void;

}

export const CheckBox = ({ color = "primary", ...rest }: ButtonProps) => (
    <MuiCheckbox
        disableRipple
        color={color}
        {...rest}
    />
);