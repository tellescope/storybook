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
  labelSize,
  options,
  onChange,
  value,
}: {
  label: string;
  helperText: string;
  labelSize?: "default" | "large";
  options: Option[];
  onChange: (value: string[]) => void;
  value?: string[];
}) => {
  
  const handleCheckboxChange = (checkboxValue: string) => {
    const currentValues = value || [];
    const newSelectedValues = currentValues.includes(checkboxValue)
      ? currentValues.filter(val => val !== checkboxValue)
      : [...currentValues, checkboxValue];
    
    onChange(newSelectedValues);
  };

  return (
    <FormControlAtom variant="standard">
      <FormGroupLabel labelSize={labelSize}>{label}</FormGroupLabel>
      <MuiFormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}    
            value={option.value}
            control={
              <CheckBox 
                checked={value?.includes(option.value) || false}
                onChange={() => handleCheckboxChange(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </MuiFormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControlAtom>
  );
}; 