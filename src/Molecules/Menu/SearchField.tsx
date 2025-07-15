import React from "react";
import { Box, TextField } from "@mui/material";

type SearchFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({ value, onChange }) => (
  <Box px={1} pb={1}>
    <TextField
      placeholder="Search..."
      value={value}
      onChange={onChange}
      sx={{
        border: "2px solid #1C7AE0",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
      }}
      size="small"
    />
  </Box>
); 