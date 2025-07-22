import { FormControl, type FormControlProps } from "@mui/material";

export interface FormControlAtomProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  error?: boolean;
  helperText?: React.ReactNode;
  variant?: "standard" | "outlined" | "filled";
  fullWidth?: boolean;
}
export const FormControlAtom: React.FC<FormControlProps> = ({
  children,
  error = false,
  variant = "standard",
  fullWidth = false,
}) => {
  return (
    <FormControl component="fieldset" variant={variant} error={error} fullWidth={fullWidth}>
      {children}
    </FormControl>
  );
};
