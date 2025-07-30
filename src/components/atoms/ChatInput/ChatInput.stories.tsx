import type { Meta, StoryObj } from "@storybook/react";
import ChatInput from "./ChatInput";
import { useState } from "react";

const meta: Meta<typeof ChatInput> = {
  title: "Atoms/Chat Input",
  component: ChatInput,
};

export default meta;

type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  render: () => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
      alert("Sending message: ${message}");
      setMessage(" ");
    };

    return (
      <ChatInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onSend={handleSend}
      />
    );
  },
};
