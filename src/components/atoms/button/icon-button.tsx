import { IconButton as MuiIconButton } from '@mui/material';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

// Extend Button component to accept the custom color
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        inheritWhite: true;
    }
}


export interface IconButtonProps extends Omit<MuiIconButtonProps, 'color' | 'variant' | 'size'> {
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | "inheritWhite";
    size?: "large" | "medium" | "small";
    // radius?: "round",
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const IconButton = ({ children, color = "primary", disabled = false, ...rest }: IconButtonProps) => (
    <MuiIconButton
        disableRipple
        color={color}
        disabled={disabled}
        {...rest}
    >
        {children}
    </MuiIconButton>
);