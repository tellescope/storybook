import { Radio as MuiRadio } from '@mui/material';
import type { RadioProps as MuiRadioProps } from '@mui/material/Radio';

declare module '@mui/material/Radio' {
    interface RadioPropsSizeOverrides {
        large: true;
    }

}

export interface ButtonProps extends Omit<MuiRadioProps, 'color' | 'variant' | 'size'> {
    color?: "primary" | "secondary" | "info" | "default";
    size?: "large" | "medium" | "small"; // Removed "large" as MUI Radio does not support it
    onClick?: () => void;
    disabled?: boolean;

}

export const Radio = ({ color = "default", disabled = false, ...rest }: ButtonProps) => (
    <MuiRadio
        disableRipple
        color={color}
        disabled={disabled}
        {...rest}
    />
);