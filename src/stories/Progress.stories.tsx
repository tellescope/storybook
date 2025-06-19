import type { Meta, StoryObj } from "@storybook/react"
import Progress from "../Atoms/feedback/Progress/Progress"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["linear", "circular"],
    },
    variant: {
      control: "radio",
      options: ["determinate", "indeterminate", "buffer"],
    },
    color: {
      control: "radio",
      options: ["primary", "secondary", "inherit"],
    },
    label: {
      control: "boolean",
    },
    value: {
      control: "number",
    },
    size: {
      control: "number",
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

// Default stories
export const Default: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: false,
  },
}

// Label variations
export const LabelTrue: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: true,
  },
}

export const LabelFalse: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: false,
  },
}

// Linear Progress - Label: False - Primary
export const LinearPrimaryDeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: false,
  },
}

export const LinearPrimaryBufferLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "primary",
    label: false,
  },
}

export const LinearPrimaryIndeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "primary",
    label: false,
  },
}

// Linear Progress - Label: False - Inherit
export const LinearInheritDeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "inherit",
    label: false,
  },
}

export const LinearInheritBufferLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "inherit",
    label: false,
  },
}

export const LinearInheritIndeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "inherit",
    label: false,
  },
}

// Linear Progress - Label: False - Secondary
export const LinearSecondaryDeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "secondary",
    label: false,
  },
}

export const LinearSecondaryBufferLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "secondary",
    label: false,
  },
}

export const LinearSecondaryIndeterminateLabelFalse: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "secondary",
    label: false,
  },
}

// Linear Progress - Label: True - Primary
export const LinearPrimaryDeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: true,
  },
}

export const LinearPrimaryBufferLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "primary",
    label: true,
  },
}

export const LinearPrimaryIndeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "primary",
    label: true,
  },
}

// Linear Progress - Label: True - Inherit
export const LinearInheritDeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "inherit",
    label: true,
  },
}

export const LinearInheritBufferLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "inherit",
    label: true,
  },
}

export const LinearInheritIndeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "inherit",
    label: true,
  },
}

// Linear Progress - Label: True - Secondary
export const LinearSecondaryDeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "secondary",
    label: true,
  },
}

export const LinearSecondaryBufferLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "buffer",
    value: 50,
    color: "secondary",
    label: true,
  },
}

export const LinearSecondaryIndeterminateLabelTrue: Story = {
  args: {
    type: "linear",
    variant: "indeterminate",
    color: "secondary",
    label: true,
  },
}

// Circular Progress - 32px with Label: False
export const CircularPrimary32pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "primary",
    label: false,
    size: 32,
  },
}

export const CircularSecondary32pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "secondary",
    label: false,
    size: 32,
  },
}

export const CircularInherit32pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "inherit",
    label: false,
    size: 32,
  },
}

// Circular Progress - 32px with Label: True
export const CircularPrimary32pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "primary",
    label: true,
    size: 32,
  },
}

export const CircularSecondary32pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "secondary",
    label: true,
    size: 32,
  },
}

export const CircularInherit32pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "inherit",
    label: true,
    size: 32,
  },
}

// Circular Progress - 16px with Label: False
export const CircularPrimary16pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "primary",
    label: false,
    size: 16,
  },
}

export const CircularSecondary16pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "secondary",
    label: false,
    size: 16,
  },
}

export const CircularInherit16pxLabelFalse: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "inherit",
    label: false,
    size: 16,
  },
}

// Circular Progress - 16px with Label: True
export const CircularPrimary16pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "primary",
    label: true,
    size: 16,
  },
}

export const CircularSecondary16pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "secondary",
    label: true,
    size: 16,
  },
}

export const CircularInherit16pxLabelTrue: Story = {
  args: {
    type: "circular",
    variant: "determinate",
    value: 99,
    color: "inherit",
    label: true,
    size: 16,
  },
}

// Percentage variations
export const PercentageMinimum: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 10,
    color: "primary",
    label: true,
  },
}
