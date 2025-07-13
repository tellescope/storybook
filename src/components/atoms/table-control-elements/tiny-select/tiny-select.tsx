import Select from "../../select/select";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface TinySelectProps extends Omit<ComponentProps<typeof Select>, "value" | "onChange" | "children"> {
    value?: string;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}

import type { SelectChangeEvent } from "@mui/material/Select";
import type { ComponentProps } from "react";

const TinySelect = ({ value, onChange, children }: TinySelectProps) => {
    const handleChange = (event: SelectChangeEvent<string | string[]>) => {
        if (onChange) {
            onChange(event.target.value as string);
        }
    };

    return (
        <Select
            value={value ?? ""}
            onChange={handleChange}
            appearance="outlined"
            sx={{
                "&:hover": {
                    background: "#EEEDF4"
                },
                "&": {
                    width: "67px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    fontSize: "0.875rem",
                    color: "#0000008F"
                },
                "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input": {
                    padding: "1px 24px 1px 4px",
                },
                "& .MuiSvgIcon-root.MuiSelect-icon": {
                    width: "16px"
                },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                "& svg": {
                    right: "3px"
                }
            }}
            size="small"
            hiddenLabel
            IconComponent={KeyboardArrowDownIcon}
            MenuProps={{
                PaperProps: {
                    sx: {
                        padding: "4px",
                        maxHeight: "200px",
                        width: "220px"
                    },
                },
                MenuListProps: {
                    sx: {
                        padding: "0px",
                        "& .MuiButtonBase-root": {
                            fontSize: "0.875rem",
                            padding: "4px 8px",
                        }
                    }
                },
                elevation: 8
            }}
        >
            {children}
        </Select>
    )
}

export default TinySelect

