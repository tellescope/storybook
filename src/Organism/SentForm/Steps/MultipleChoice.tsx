import { Box } from "@mui/material";
import { FormGroup } from "../../../Molecules/FormGroup";

export const MultipleChoice = () => {
  return (
    <Box width="100%">
      <Box pt={"48px"}>
        <FormGroup.Selectable
          label="Select your location"
          labelSize="large"
          helperText="This is a helper text"
          options={[
            { id: "1", label: "This is a selectable  question ", value: "1" },
            { id: "2", label: "This is a selectable  question ", value: "2" },
            { id: "3", label: "This is a selectable  question ", value: "3" },
          ]}
        />
      </Box>
    </Box>
  );
};
