import React from 'react';
import { Radio as MuiRadio } from '@mui/material';
import type { RadioProps as MuiRadioProps } from '@mui/material';

export interface RadioProps extends MuiRadioProps {
  // Add any custom props here if needed
}

export const Radio: React.FC<RadioProps> = (props) => {
  return <MuiRadio {...props} />;
};

export default Radio; 