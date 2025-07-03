import { Box, styled, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MoreHoriz } from "@mui/icons-material";
import { FormHeader } from "./FormHeader";
import { FormFooter } from "./FormFooter";

interface FormBuilderProps {
  /**
   * Whether the component is in selected state
   * @default false
   */
  selected?: boolean;
}

export const FormBuilder = ({ selected = false }: FormBuilderProps) => {
  return (
    <FormWrapper>
      <FormHeader>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color={"#798ED0"}>Primary</Typography>
          <CheckCircleIcon
            sx={{
              color: selected ? "#4CAF50" : "#9E9E9E",
            }}
          />
        </Box>
        <Typography color={"#585E72"}>Secondary</Typography>
        <Typography color={"#DDE1F9"}>Accent</Typography>
      </FormHeader>
      <FormFooter>
        <Typography>Tellescope Soft</Typography>
        <MoreHoriz />
      </FormFooter>
    </FormWrapper>
  );
};

const FormWrapper = styled(Box)({
  border: "1px solid #E0E0E0",
  borderRadius: 28,
  width: 320,
  maxWidth: 320,
  margin: "0 auto",
  backgroundColor: "#F4F3FA",
  transition: "border-color 0.2s ease",
  "&:hover": {
    borderColor: "black",
    borderWidth: 1,
    cursor: "pointer",
    borderStyle: "solid",
  },
});
