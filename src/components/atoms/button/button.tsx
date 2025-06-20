import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Extend Button component to accept the custom color
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        inheritWhite: true;
    }
}


export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant' | 'size'> {
    children: string;
    appearence?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | "inheritWhite";
    size?: "large" | "medium" | "small";
    // radius?: "round",
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