import {
  FormControlLabel,
  RadioGroup as MuiRadioGroup,

} from "@mui/material";
import {
  FormControlAtom,
  FormGroupLabel,
  FormHelperText,
} from "../../../Atoms/Form";
import { Radio } from "../../../components/atoms/radio/radio";

type Option = {
  label: string;
  value: string;
};

export const RadioGroup = ({
  label,
  helperText,
  labelSize,
  options,
}: {
  label: string;
  labelSize?: "default" | "large";
  helperText: string;
  options: Option[];
}) => {
  return (
    <FormControlAtom variant="standard">
      <FormGroupLabel labelSize={labelSize}>{label}</FormGroupLabel>
      <MuiRadioGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControlAtom>
  );
};
