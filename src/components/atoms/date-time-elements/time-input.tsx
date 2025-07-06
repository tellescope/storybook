import type { FC } from "react";
import { Input } from "../input/input";
import { FormControl, FormLabel } from "@mui/material";

interface TimeInputProps {
    label?: boolean;
}

const TimeInput: FC<TimeInputProps> = ({ label = false }) => {
    return (
        <FormControl sx={{ gap: "7px" }}>
            <Input appearance="outlined" value="00" sx={{
                "& .MuiInputBase-input": {
                    fontSize: !label ? "57px" : "45px",
                    letterSpacing: !label ? "-2px" : "0",
                    height: "fit-content",
                    width: !label ? "64px" : "50px",
                    padding: 0,
                },
                "& .MuiInputBase-root": {
                    padding: 0,
                    width: !label ? 97 : 96,
                    height: !label ? 80 : 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(227, 226, 233, 1)",
                    borderRadius: "8px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    padding: 0,
                    border: 0
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: label ? "2px solid rgba(74, 92, 146, 1)" : "none"
                },
                "& .Mui-focused": {
                    background: "rgba(219, 225, 255, 1) ",
                    color: "rgba(50, 68, 120, 1)"
                }
            }} />
            <FormLabel sx={{ color: "rgba(69, 70, 79, 1)" }}>
                {label ? "Time label" : ""}
            </FormLabel>
        </FormControl>
    )
}

export default TimeInput
