import React from "react";
import { FormLabel, TextField } from "@mui/material";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export interface CustomInputProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "filled" | "outlined" | "standard";
  label?: string;
  labelSize?: "default" | "large";
  error?: boolean;
  errorText?: string;
  // Add any custom props here if needed
}

export const Input: React.FC<CustomInputProps> = (props) => {
  const { label, labelSize = "default", error, errorText, helperText, ...textFieldProps } = props;
  
  const getLabelStyles = () => {
    if (labelSize === 'large') {
      return {
        sx: {

          fontSize: '1.25rem',
          lineHeight: 1.3,
          mb: 1.5,
          color: error ? 'error.main' : 'inherit'
        }
      };
    }
    return {
      sx: {

        fontSize: '1rem',
        lineHeight: 1.4,
        mb: 1,
        color: error ? 'error.main' : 'inherit'
      }
    };
  };

  const labelProps = getLabelStyles();
  
  // Use errorText if in error state, otherwise use helperText
  const displayHelperText = error && errorText ? errorText : helperText;
  
  return (
    <>
      {label && <FormLabel  {...labelProps}>{label}</FormLabel>} 
      <TextField 
        hiddenLabel
        error={error}
        variant="filled" 
        helperText={displayHelperText}
        {...textFieldProps}
        sx={{
          pt: 1,
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: error ? 'error.main' : 'grey.500', // Red when error, grey when normal
          },
          '& .MuiFilledInput-underline:before': {
            borderBottomColor: error ? 'error.main' : 'divider', // Red when error, divider when normal
          },
          '& .MuiFilledInput-underline:hover:before': {
            borderBottomColor: error ? 'error.main' : 'grey.500', // Red when error, grey when normal
          },
          ...textFieldProps.sx
        }}
        FormHelperTextProps={{
          sx: {
            pr: 0, // Remove right padding from helper text
            ml: 0, // Ensure consistent left alignment
            mb: 4,
            pt: 1,
            color: error ? 'error.main' : 'text.secondary',
            ...props.FormHelperTextProps?.sx
          },
          ...props.FormHelperTextProps
        }}
      />
    </>
  )
};

export default Input;
