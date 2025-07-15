import React from "react";
import { FormControl } from "@mui/material";

export interface FormGroupProps {
  children: React.ReactNode;
  variant?: "standard" | "outlined" | "filled";
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  variant = "standard",
}) => {
  return <FormControl variant={variant}>{children}</FormControl>;
};
