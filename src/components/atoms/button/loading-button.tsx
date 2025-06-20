import { CircularProgress, Button as MuiButton } from '@mui/material';
import type { FC } from 'react';

export interface LoadingButtonProps {
    appearence?: "contained" | "outlined" | "text"
    size?: "large" | "medium" | "small";
    loading?: boolean;
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