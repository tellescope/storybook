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

// Default story with label and percentage controls
export const Default: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 50,
    color: "primary",
    label: true,
  },
  argTypes: {
    label: { control: "boolean" },
    value: { control: "number" },
  },
}

// Sent forms story with percentage control
export const SentForms: Story = {
  args: {
    type: "linear",
    variant: "determinate",
    value: 10,
    color: "secondary",
    label: true,
  },
  argTypes: {
    value: { control: "number" },
    label: { table: { disable: true } },
    color: { table: { disable: true } },
    type: { table: { disable: true } },
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
  },
}
