import { CircularProgress, Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { FC } from 'react';

export interface LoadingButtonProps extends Omit<MuiButtonProps, 'color' | 'variant' | 'size'> {
    appearence?: "contained" | "outlined" | "text"
    size?: "large" | "medium" | "small";
    loading?: boolean;
    color?: "primary" | "secondary" | "info";
    loadingPosition?: 'start' | 'end' | 'center';
    loadingIndicator?: React.ReactNode | string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
    loading = false,
    loadingPosition = 'start',
    loadingIndicator,
    children,
    appearence = "contained",
    ...rest
}) => {
    return (
        <MuiButton
            disabled={loading}
            {...rest}
            startIcon={
                loading && loadingPosition === 'start' ? (
                    <CircularProgress color="inherit" size={16} />
                ) : undefined
            }
            endIcon={
                loading && loadingPosition === 'end' ? (
                    <CircularProgress color="inherit" size={16} />
                ) : undefined
            }
            variant={appearence}
        >
            {loading && loadingPosition === 'center' ? (
                <>
                    <CircularProgress color="inherit" size={16} sx={{ mr: loadingIndicator ? "8px" : null }} />
                    {loadingIndicator}
                </>
            ) : (
                children
            )}
        </MuiButton>
    );
};