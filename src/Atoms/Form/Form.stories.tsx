import type { Meta, StoryObj } from "@storybook/react";
import FormControlLabel from "./FormControlLabel";
import { Input } from "./Input/Input";
import { Checkbox } from "./Checkbox/Checkbox";
import { Radio } from "./Radio/Radio";
import { Select, MenuItem } from "./Select/Select";
import { Switch } from "./Switch/Switch";
import { FormGroup } from "./Form";

type InputType =
  | "text"
  | "multiline"
  | "checkbox"
  | "radio"
  | "select"
  | "switch";
type LabelSize = "default" | "large";

interface Props {
  inputType: InputType;
  label: string;
  labelSize: LabelSize;
  helperText?: string;
  children: React.ReactNode; // ⬅️ Tambahkan ini!
}

const meta: Meta<Props> = {
  title: "ATOMS/FormGroup",
  component: FormGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    inputType: {
      control: "select",
      options: ["text", "multiline", "checkbox", "radio", "select", "switch"],
    },
    labelSize: {
      control: "radio",
      options: ["default", "large"],
    },
    label: { control: "text" },
    helperText: { control: "text" },
  },
};

export default meta;

const createInputMap = (labelSize: LabelSize, label: string, helperText?: string): Record<InputType, React.ReactNode> => ({
  text: (
    <Input  
      type="text" 
      label={label}
      labelSize={labelSize}
      placeholder="Enter text..." 
      fullWidth 
      error
      helperText={helperText || "Helper text  "} 
    />
  ),
  multiline: (
    <Input
      type="text"
      label={label}
      labelSize={labelSize}
      multiline
      rows={3}
      placeholder="Enter multiline text..."
      fullWidth
      helperText={helperText || "Please provide detailed information"}
    />
  ),
  checkbox: <FormControlLabel control={<Checkbox />} label="Checkbox" />,
  radio: <FormControlLabel control={<Radio />} label="Radio" />,
  select: (
    <Select defaultValue="" fullWidth displayEmpty>
      <MenuItem value="" disabled>
        Select
      </MenuItem>
      <MenuItem value="one">One</MenuItem>
      <MenuItem value="two">Two</MenuItem>
    </Select>
  ),
  switch: <FormControlLabel control={<Switch />} label="Switch" />,
});

export const Default: StoryObj<Props> = {
  args: {
    inputType: "text",
    label: "Email Address",
    labelSize: "large",
    helperText: "Helper text",
  },
  render: (args) => {
    const inputMap = createInputMap(args.labelSize, args.label, args.helperText);
    return (
      <div style={{ width: "400px" }}>
        {inputMap[args.inputType]}
      </div>
    );
  },
};
