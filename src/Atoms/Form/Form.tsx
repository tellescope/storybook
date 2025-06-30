import React from 'react';
import { Box, Typography, FormGroup as MuiFormGroup } from '@mui/material';
import type { FormGroupProps as MuiFormGroupProps } from '@mui/material';

interface FormGroupProps extends MuiFormGroupProps {
  label?: string;
  labelSize?: 'default' | 'large';
  helperText?: string;
  children: React.ReactNode;
}

export const FormGroup: React.FC<MuiFormGroupProps & FormGroupProps> = ({
  ...props
}) => {
  return (
    <MuiFormGroup {...props}>
      {props.children}
    </MuiFormGroup>
  );
};

// Re-export form components for easier access
export { Input } from './Input';
export type { CustomInputProps } from './Input';

export { Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

export { Radio } from './Radio';
export type { RadioProps } from './Radio';

export { FormControlLabel } from './FormControlLabel';
export type { FormControlLabelProps } from './FormControlLabel';

export { Select, MenuItem } from './Select';
export type { CustomSelectProps } from './Select';

export { Switch } from './Switch';
export type { SwitchProps } from './Switch';
