import { Box } from "@mui/material";
import { FormGroup } from "../../../Molecules/FormGroup";

export const CheckboxField = () => {
  return (
    <Box width="100%">
      <Box pt={"48px"}>
        <FormGroup.Checkbox
          label="What is your favorite kind of dumpling"
          labelSize="large"
          helperText="This is a helper text"
          options={[
            { label: "This is a selectable  question ", value: "1" },
            { label: "This is a selectable  question ", value: "2" },
            { label: "This is a selectable  question ", value: "3" },
          ]}
        />
      </Box>
    </Box>
  );
};
