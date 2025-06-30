import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup, TextField } from "./FormElements";
import { MenuItem, Stack } from "@mui/material";

const meta: Meta<typeof FormGroup> = {
  title: "Atoms/FormElements",
  component: FormGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A collection of form elements including FormControl wrapper with InputLabel and FormHelperText.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The label text for the form field",
    },
    labelSize: {
      control: { type: "select" },
      options: ["default", "large"],
      description: "The size of the label",
    },
    helperText: {
      control: "text",
      description: "Helper text shown below the input",
    },
    error: {
      control: "boolean",
      description: "Whether the field is in error state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    label: "Email Address",
    helperText: "We will never share your email with anyone.",
    labelSize: "default",
    error: false,
    disabled: false,
  },
  render: (args) => (
    <FormGroup {...args}>
      <TextField variant="filled" placeholder="Enter your email..." />
    </FormGroup>
  ),
};

export const Error: Story = {
  args: {
    label: "Email Address",
    helperText: "We will never share your email with anyone.",
    labelSize: "default",
    error: true,
  },
  render: (args) => (
    <FormGroup {...args}>
      <TextField variant="filled" placeholder="Enter your email..." />
    </FormGroup>
  ),
};

export const TwoInputs: Story = {
  args: {
    label: "Label",
    helperText: "We will never share your email with anyone.",
    labelSize: "default",
  },
  render: (args) => (
    <FormGroup {...args}>
      <Stack direction="row" spacing={2} sx={{ width: "max-content" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter your email..."
          sx={{ width: "max-content" }}
        />
        <TextField
          hiddenLabel
          select
          size="small"
          sx={{ width: 200 }}
          label="Label"
        >
          <MenuItem value="1">Option 1</MenuItem>
          <MenuItem value="2">Option 2</MenuItem>
          <MenuItem value="3">Option 3</MenuItem>
        </TextField>
      </Stack>
    </FormGroup>
  ),
};

export const ThreeInputs: Story = {
  args: {
    label: "Label",
    helperText: "We will never share your email with anyone.",
    labelSize: "default",
  },
  render: (args) => (
    <FormGroup {...args}>
      <Stack direction="row" spacing={2} sx={{ width: "max-content" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter your email..."
          sx={{ width: "max-content" }}
        />

        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter your email..."
          sx={{ width: "max-content" }}
        />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter your email..."
          sx={{ width: "max-content" }}
        />
      </Stack>
    </FormGroup>
  ),
};
// export const Error: Story = {
//   args: {
//     label: 'Password',
//     error: true,
//     errorText: 'Password must be at least 8 characters long',
//     labelSize: 'default'
//   },
//   render: (args) => (
//     <FormField {...args}>
//       <Input placeholder="Enter your password..." type="password" fullWidth />
//     </FormField>
//   )
// };

// export const TwoInputs: Story = {
//   args: {
//     labelSize: 'default',
//     error: false,
//     helperText: 'Required'
//   },
//   render: (args) => (
//     <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2, width: 600 }}>
//       <FormField
//         label="First Name"
//         labelSize={args.labelSize}
//         error={args.error}
//         helperText={args.helperText}
//       >
//         <Input placeholder="Enter first name..." fullWidth />
//       </FormField>
//       <FormField
//         label="Last Name"
//         labelSize={args.labelSize}
//         error={args.error}
//         helperText={args.helperText}
//       >
//         <Input placeholder="Enter last name..." fullWidth />
//       </FormField>
//     </FormGroup>
//   )
// };

// export const ThreeInputs: Story = {
//   args: {
//     labelSize: 'default',
//     error: false,
//     helperText: 'Required field'
//   },
//   render: (args) => (
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 400 }}>
//       <FormField
//         label="First Name"
//         labelSize={args.labelSize}
//         error={args.error}
//         helperText={args.helperText}
//       >
//         <Input placeholder="Enter first name..." fullWidth />
//       </FormField>
//       <FormField
//         label="Last Name"
//         labelSize={args.labelSize}
//         error={args.error}
//         helperText={args.helperText}
//       >
//         <Input placeholder="Enter last name..." fullWidth />
//       </FormField>
//       <FormField
//         label="Email"
//         labelSize={args.labelSize}
//         error={true}
//         errorText="Please enter a valid email address"
//       >
//         <Input placeholder="Enter email address..." type="email" fullWidth />
//       </FormField>
//     </Box>
//   )
// };
