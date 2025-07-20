import type { Meta, StoryObj } from "@storybook/react";
import { SentForm } from "./SentForm";
import { Description, FormIntro } from "./Steps";

const meta = {
  title: "Organism/SentForm",
  component: SentForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      {
        content: <FormIntro />,
      },
      {
        content: <Description />,
      },
    ],
  },
};
