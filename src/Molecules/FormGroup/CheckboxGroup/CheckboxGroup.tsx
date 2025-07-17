import {
  FormControlLabel,
  FormGroup as MuiFormGroup,
} from "@mui/material";
import {
  FormControlAtom,
  FormGroupLabel,
  FormHelperText,
} from "../../../Atoms/Form";
import CheckBox from "../../../components/atoms/checkbox/checkbox";

type Option = {
  label: string;
  value: string;
};

export const CheckboxGroup = ({
  label,
  helperText,
  options,
}: {
  label: string;
  helperText: string;
  options: Option[];
}) => {
  return (
    <FormControlAtom variant="standard">
      <FormGroupLabel>{label}</FormGroupLabel>
      <MuiFormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<CheckBox />}
            label={option.label}
          />
        ))}
      </MuiFormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControlAtom>
  );
}; 