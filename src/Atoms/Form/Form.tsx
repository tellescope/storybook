import React from 'react';
import { Box, Typography } from '@mui/material';

interface FormGroupProps {
  label?: string;
  labelSize?: 'default' | 'large';
  helperText?: string;
  children: React.ReactNode;
}


export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  labelSize = 'default',
  helperText,
  children,
}) => {
  return (
    <Box mb={2}>
      {label && (
        <Typography variant={labelSize === 'large' ? 'h6' : 'subtitle1'} gutterBottom>
          {label}
        </Typography>
      )}
      {children}
      {helperText && (
        <Typography variant="caption" color="text.secondary" mt={0.5}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};
