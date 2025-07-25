import type { Meta, StoryObj } from "@storybook/react";
import Wrapper from "../../Molecules/Message/Message";
import { mockMessages } from "../../data/mock";


const meta: Meta<typeof Wrapper> = {
    title: "Organism/ItemViewer/ItemViewer",
    component: Wrapper,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "A component that displays a message and a message input.",
            },
        },
    },
    argTypes: {
        content: mockMessages
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: mockMessages
    },
    parameters: {
        docs: {
            description: {
                story: "A view showing all possible states of the ItemViewer component.",
            },
        },
    },
};
