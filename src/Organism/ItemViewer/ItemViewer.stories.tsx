import type { Meta, StoryObj } from "@storybook/react";
import ItemViewer from "./ItemViewer";
import { mockMessages } from "../../data/mock";


const meta: Meta<typeof ItemViewer> = {
    title: "Organism/ItemViewer/ItemViewer",
    component: ItemViewer,
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
