import { FormControlLabel, Checkbox, Radio, Switch, TextField, Select, MenuItem } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup as FormGroupComponent } from './Form'; // custom component

type InputType = 'text' | 'multiline' | 'checkbox' | 'radio' | 'select' | 'switch';
type LabelSize = 'default' | 'large';

interface Props {
  inputType: InputType;
  label: string;
  labelSize: LabelSize;
  helperText?: string;
  children: React.ReactNode; // ⬅️ Tambahkan ini!
}

const meta: Meta<Props> = {
  title: 'ATOMS/FormGroup',
  component: FormGroupComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputType: {
      control: 'select',
      options: ['text', 'multiline', 'checkbox', 'radio', 'select', 'switch'],
    },
    labelSize: {
      control: 'radio',
      options: ['default', 'large'],
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

export default meta;

const inputMap: Record<InputType, React.ReactNode> = {
  text: <TextField variant="filled" fullWidth />,
  multiline: <TextField variant="filled" multiline rows={3} fullWidth />,
  checkbox: <FormControlLabel control={<Checkbox />} label="Checkbox" />,
  radio: <FormControlLabel control={<Radio />} label="Radio" />,
  select: (
    <Select defaultValue="" fullWidth displayEmpty>
      <MenuItem value="" disabled>Select</MenuItem>
      <MenuItem value="one">One</MenuItem>
      <MenuItem value="two">Two</MenuItem>
    </Select>
  ),
  switch: <FormControlLabel control={<Switch />} label="Switch" />,
};

export const Default: StoryObj<Props> = {
  args: {
    inputType: 'text',
    label: 'Email Address',
    labelSize: 'default',
    helperText: "We'll never share your email.",
  },
  render: (args) => (
    <FormGroupComponent
      label={args.label}
      labelSize={args.labelSize}
      helperText={args.helperText}
    >
      {inputMap[args.inputType]}
    </FormGroupComponent>
  ),
};
