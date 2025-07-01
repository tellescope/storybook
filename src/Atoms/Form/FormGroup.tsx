import React from "react";
import { FormControl } from "@mui/material";

export interface FormGroupProps {
  // error?: boolean;
  // disabled?: boolean;
  children?: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  // error = false,
  // disabled = false,
}) => {
  return (
    <FormControl>
      {children}
    </FormControl>
  );
};
