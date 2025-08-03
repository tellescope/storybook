import type { Meta, StoryObj } from "@storybook/react";
import { PatientPortal } from "./patient-portal";
import { Box } from "@mui/material";

const meta: Meta<typeof PatientPortal> = {
  title: "Molecules/PatientPortal",
  component: PatientPortal,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["form", "link", "appointment", "message"],
    },
    completed: {
      control: { type: "boolean" },
    },
    badge: {
      control: { type: "boolean" },
    },
    badgeCount: {
      control: { type: "number" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof PatientPortal>;

export const Form: Story = {
  args: {
    type: "form",
    completed: false,
    title: "Complete Registration",
  },
  render: (args) => (
    <Box
      px={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f0f0"
      height="100vh"
    >
      <PatientPortal {...args} />
    </Box>
  ),
};

export const Link: Story = {
  args: {
    type: "link",
    completed: true,
    title: "Review care plan",
  },
  render: (args) => (
    <Box
      px={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f0f0"
      height="100vh"
    >
      <PatientPortal {...args} />
    </Box>
  ),
};

export const Appointment: Story = {
  args: {
    type: "appointment",
    completed: true,
    title: "Schedule your appointment",
  },
  render: (args) => (
    <Box
      px={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f0f0"
      height="100vh"
    >
      <PatientPortal {...args} />
    </Box>
  ),
};

export const Message: Story = {
  args: {
    type: "message",
    completed: false,
    title: "Message from your doctor",
    badge: true,
    badgeCount: 3,
    dateTime: "3/5/2025 1:00 PM",
    doctorName: "Dr. John Doe",
    avatarSrc: "https://via.placeholder.com/80",
  },
  render: (args) => (
    <Box
      px={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f0f0"
      height="100vh"
    >
      <PatientPortal {...args} />
    </Box>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Box
      px={10}
      display="flex"
      flexDirection="column"
      gap={2}
      bgcolor="#f0f0f0"
      height="100vh"
      py={4}
    >
      <PatientPortal
        type="form"
        completed={false}
        title="Complete Registration"
      />
      <PatientPortal type="link" completed={true} title="Review care plan" />
      <PatientPortal
        type="appointment"
        completed={true}
        title="Schedule your appointment"
      />
      <PatientPortal
        type="message"
        completed={true}
        title="Message from your doctor"
        badge={true}
        badgeCount={3}
        dateTime="3/5/2025 1:00 PM"
        doctorName="Dr. John Doe"
        avatarSrc="https://via.placeholder.com/80"
      />
    </Box>
  ),
};
