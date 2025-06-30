import React from "react";
import {
  FormLabel as MuiFormLabel,
  FormHelperText as MuiFormHelperText,
  TextField as MuiTextField,
  FormControl,
  InputLabel,
  useFormControl,
} from "@mui/material";
import type {
  FormLabelProps as MuiFormLabelProps,
  FormHelperTextProps as MuiFormHelperTextProps,
  TextFieldProps as MuiTextFieldProps,
  InputProps,
} from "@mui/material";

interface CustomFormLabelProps extends MuiFormLabelProps {
  labelSize?: "default" | "large";
}

export const FormLabel: React.FC<CustomFormLabelProps> = ({
  error,
  labelSize = "default",
  ...props
}) => {
  const getLabelStyles = () => {
    if (labelSize === "large") {
      return {
        fontSize: "1.25rem",
        lineHeight: 1.3,
        color: error ? "error.main" : "inherit",
      };
    }
    return {
      fontSize: "1rem",
      lineHeight: 1.4,
      color: error ? "error.main" : "inherit",
    };
  };
  return (
    <MuiFormLabel
      sx={{
        ...getLabelStyles(),
      }}
      {...props}
    >
      {props.children}
    </MuiFormLabel>
  );
};

export const FormHelperText: React.FC<MuiFormHelperTextProps> = ({
  ...props
}) => {
  return <MuiFormHelperText {...props}>{props.children}</MuiFormHelperText>;
};

export const TextField: React.FC<MuiTextFieldProps> = ({ ...props }) => {
  const formControl = useFormControl();
  const isError = formControl?.error || props.error;
  const isDisabled = formControl?.disabled || props.disabled;

  return (
    <MuiTextField
      error={isError}
      disabled={isDisabled}
      hiddenLabel
      SelectProps={{
        hiddenLabel: true,
      }}
      {...props}
    />
  );
};

// Combined FormField component that joins FormControl, InputLabel, Input, and FormHelperText
export interface FormFieldProps extends Omit<InputProps, "id"> {
  label?: string;
  labelSize?: "default" | "large";
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const FormGroup: React.FC<FormFieldProps> = (props) => {
  const {
    label,
    labelSize = "default",
    error,
    helperText,
    children,
    disabled,
  } = props;

  const getLabelStyles = () => {
    if (labelSize === "large") {
      return {
        fontSize: "1.25rem",
        lineHeight: 1.3,
        color: error ? "error.main" : "inherit",
      };
    }
    return {
      fontSize: "1rem",
      lineHeight: 1.4,
      color: error ? "error.main" : "inherit",
    };
  };

  const labelStyles = getLabelStyles();

  // Use errorText if in error state, otherwise use helperText

  return (
    <FormControl error={error} fullWidth disabled={disabled}>
      <InputLabel
        sx={{
          ...labelStyles,
          mb: 1,
          position: "static",
          transform: "none",
        }}
      >
        {label}
      </InputLabel>
      {children}
      {helperText && (
        <MuiFormHelperText
          sx={{
            mr: 0,
            ml: 0,
            mb: 4,
            pt: 1,
            color: error ? "error.main" : "text.secondary",
          }}
          error={error}
        >
          {helperText}
        </MuiFormHelperText>
      )}
    </FormControl>
  );
};
