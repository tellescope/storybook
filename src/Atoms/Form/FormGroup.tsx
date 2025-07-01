import React from "react";
import { FormControl } from "@mui/material";

export interface FormGroupProps {
  children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return <FormControl>{children}</FormControl>;
};
