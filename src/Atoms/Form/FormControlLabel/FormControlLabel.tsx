import React from 'react';
import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  // Add any custom props here if needed
}

export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  return <MuiFormControlLabel {...props} />;
};

export default FormControlLabel; 