import { FormControlLabel, Stack } from "@mui/material";

import {
  FormControlAtom,
  FormGroupLabel,
  FormHelperText,
} from "../../../Atoms";
import Switch from "../../../components/atoms/switch/switch";

type Option = {
  label: string;
  value: string;
};

export const SwitchGroup = ({
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
    <FormControlAtom>
      <FormGroupLabel labelSize={labelSize}>{label}</FormGroupLabel>
      <Stack p={1} direction="column" gap={2}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Switch
                label={option.label}
                formlabelProps={{ labelPlacement: "end" }}
              />
            }
            label={""}
          />
        ))}
      </Stack>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControlAtom>
  );
};
