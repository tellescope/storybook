import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup } from ".";
import React from "react";

const meta: Meta = {
  title: "Molecules/FormGroup",
};

export default meta;

export const Radio: StoryObj = {
  render: () => (
    <FormGroup.Radio
      label="Radio Group"
      helperText="This is a helper text"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ]}
    />
  ),
};

export const Checkbox: StoryObj = {
  render: () => (
    <FormGroup.Checkbox
      label="Checkbox Group"
      helperText="This is a helper text"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ]}
    />
  ),
};

export const Text: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState<Record<string, string>>({});

    return (
      <FormGroup.Text
        label="Text Group"
        helperText="This is a helper text"
        options={[
          { label: "Option 1", value: "1" },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Switch: StoryObj = {
  render: () => (
    <FormGroup.Switch
      label="Switch Group"
      helperText="This is a helper text"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ]}
    />
  ),
}; 