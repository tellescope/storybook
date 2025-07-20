import { Box, Stack, Typography, type SelectChangeEvent } from "@mui/material";
import { FormControlAtom } from "../../../Atoms/Form";
import Select from "../../../components/atoms/select/select";
import { useState } from "react";

export const MultipleSelectField = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    setValue(event.target.value as string[]);
  };

  return (
    <Box width="100%">
      <Box pt={"48px"}>
        <Stack gap={"12px"}>
          <Typography variant="h5">What would you like to be called?</Typography>
          <FormControlAtom  variant="outlined" fullWidth>
            <Select
              appearance="outlined"
              size="small"
              multiple
              value={value}
              onChange={handleChange}
              options={["Option 1", "Option 2", "Option 3"]}
              placeholder="Select an option"
              sx={{
                backgroundColor: "white",
                width: "100%",
              }}
            />
          </FormControlAtom>
          <Typography color="text.secondary" variant="caption">
            The location is where you’re treatment supplies will be shipped, if prescibed
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
