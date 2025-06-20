import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant' | 'size'> {
    children: string;
    appearence?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary" | "info";
    size?: "large" | "medium" | "small";
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({ children, appearence = "contained", color = "primary", disabled = false, ...rest }: ButtonProps) => (
    <MuiButton
        variant={appearence}
        color={color}
        disabled={disabled}
        {...rest}
    >
        {children}
    </MuiButton>
);