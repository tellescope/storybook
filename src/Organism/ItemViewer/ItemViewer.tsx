import type { IMessage } from "../../Molecules";
import Message from "../../Molecules/Message/Message";

export const ItemViewer = ({ content }: { content: IMessage[] }) => {
    return (
        <Message content={content} />
    );
};