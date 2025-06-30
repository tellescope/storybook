import React from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
  // Add any custom props here if needed
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <MuiCheckbox {...props} />;
};

export default Checkbox; 