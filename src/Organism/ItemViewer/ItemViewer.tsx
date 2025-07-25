import type { IMessage } from "../../Molecules";
import Wrapper from "../../Molecules/Message/Wrapper";

export const ItemViewer = ({ content }: { content: IMessage[] }) => {
    return (
        <Wrapper content={content} />
    );
};