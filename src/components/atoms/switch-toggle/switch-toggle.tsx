import { FormControl, FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import type { SwitchProps as MuiSwitchProps, FormControlLabelProps as MuiFormControlLabelProps } from "@mui/material";
import { type FC, type ReactNode } from "react";

interface SwitchProps extends Omit<MuiSwitchProps, "color"> {
    color?: "default" | "primary" | "secondary" | "info";
    label?: ReactNode;
    formlabelProps?: Omit<MuiFormControlLabelProps, "label" | "control">;
}

const SwitchToggle: FC<SwitchProps> = ({ formlabelProps, label, ...props }) => {
    const { sx, ...rest } = formlabelProps || {};
    return (
        <FormControl>
            <FormControlLabel
                control={
                    <MuiSwitch
                        color={props.color || "info"}
                        {...props}
                        disableRipple
                    />}
                label={label}
                labelPlacement="start"
                sx={{
                    m: 0,
                    borderRadius: "6px",
                    transition: "background 0.3s ease-in-out",
                    ...sx
                }}
                {...rest}
            />
        </FormControl>
    )
}

export default SwitchToggle
