import React from 'react';
import { Select as MuiSelect, MenuItem as MuiMenuItem } from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material';

export interface CustomSelectProps extends Omit<MuiSelectProps, 'variant'> {
  variant?: 'filled' | 'outlined' | 'standard';
  // Add any custom props here if needed
}

export const Select: React.FC<CustomSelectProps> = (props) => {
  return <MuiSelect {...props} />;
};

export const MenuItem = MuiMenuItem;

export default Select; 